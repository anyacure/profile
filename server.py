#!/usr/bin/env python3
"""
Profile View Counter Server
Serves static files + tracks page views in view.db (SQLite)

Usage: python server.py [port]
Default port: 8080
"""

import sqlite3
import json
import os
import sys
import mimetypes
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse

DB_PATH = os.path.join(os.path.dirname(__file__), "view.db")
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080


# ── Database setup ────────────────────────────────────────────────────────────

def init_db():
    con = sqlite3.connect(DB_PATH)
    con.execute("""
        CREATE TABLE IF NOT EXISTS views (
            page    TEXT PRIMARY KEY,
            count   INTEGER NOT NULL DEFAULT 0,
            updated TEXT NOT NULL DEFAULT (datetime('now'))
        )
    """)
    # Seed the main profile page with 36 (existing count)
    con.execute("""
        INSERT OR IGNORE INTO views (page, count) VALUES ('/', 36)
    """)
    con.execute("""
        INSERT OR IGNORE INTO views (page, count) VALUES ('/mygear/', 0)
    """)
    con.commit()
    con.close()


def get_views(page: str) -> int:
    con = sqlite3.connect(DB_PATH)
    row = con.execute("SELECT count FROM views WHERE page = ?", (page,)).fetchone()
    con.close()
    return row[0] if row else 0


def increment_views(page: str) -> int:
    con = sqlite3.connect(DB_PATH)
    con.execute("""
        INSERT INTO views (page, count, updated)
        VALUES (?, 1, datetime('now'))
        ON CONFLICT(page) DO UPDATE SET
            count   = count + 1,
            updated = datetime('now')
    """, (page,))
    con.commit()
    row = con.execute("SELECT count FROM views WHERE page = ?", (page,)).fetchone()
    con.close()
    return row[0] if row else 1


# ── Request handler ───────────────────────────────────────────────────────────

class Handler(SimpleHTTPRequestHandler):
    # Serve files relative to this script's directory
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.path.dirname(__file__), **kwargs)

    def log_message(self, format, *args):
        # Cleaner log output
        print(f"  {self.address_string()} -> {format % args}")

    # ── CORS helper ──────────────────────────────────────────────────────────
    def send_cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_cors()
        self.end_headers()

    # ── JSON response helper ─────────────────────────────────────────────────
    def json_response(self, data: dict, status: int = 200):
        body = json.dumps(data).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.send_cors()
        self.end_headers()
        self.wfile.write(body)

    # ── Router ───────────────────────────────────────────────────────────────
    def do_GET(self):
        parsed = urlparse(self.path)

        # GET /api/views?page=/
        if parsed.path == "/api/views":
            from urllib.parse import parse_qs
            params = parse_qs(parsed.query)
            page   = params.get("page", ["/"])[0]
            count  = get_views(page)
            self.json_response({"page": page, "views": count})

        else:
            # Fall through to static file serving
            super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)

        # POST /api/views  body: {"page": "/"}
        if parsed.path == "/api/views":
            length  = int(self.headers.get("Content-Length", 0))
            body    = self.rfile.read(length) if length else b"{}"
            try:
                data = json.loads(body)
            except json.JSONDecodeError:
                data = {}

            page  = data.get("page", "/")
            count = increment_views(page)
            self.json_response({"page": page, "views": count})

        else:
            self.send_response(404)
            self.end_headers()


# ── Entry point ───────────────────────────────────────────────────────────────

if __name__ == "__main__":
    init_db()
    server = HTTPServer(("", PORT), Handler)
    print(f"\n  [*] Profile server running at  http://localhost:{PORT}")
    print(f"  [*] View counter API:          http://localhost:{PORT}/api/views")
    print(f"  [*] Database:                  {DB_PATH}")
    print(f"  [*] Press Ctrl+C to stop\n")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n  Server stopped.")
