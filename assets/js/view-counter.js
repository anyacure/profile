/**
 * view-counter.js  —  GitHub Pages compatible via Supabase
 * =========================================================
 * SETUP (one-time, ~2 minutes):
 *
 *  1. Go to https://supabase.com → sign up free
 *  2. Create new project (any name, any password, any region)
 *  3. Go to SQL Editor → run this query:
 *
 *       CREATE TABLE views (
 *         page  TEXT PRIMARY KEY,
 *         count BIGINT NOT NULL DEFAULT 0
 *       );
 *       INSERT INTO views (page, count) VALUES ('/', 36);
 *       INSERT INTO views (page, count) VALUES ('/mygear/', 0);
 *
 *  4. Go to Settings → API → copy:
 *       - "Project URL"  → paste into SUPABASE_URL below
 *       - "anon public"  → paste into SUPABASE_KEY below
 *
 *  5. Go to Table Editor → views table → click the shield icon
 *     → Enable Row Level Security → Add policy:
 *       Name: "Allow public read and update"
 *       Operation: SELECT and UPDATE
 *       Target roles: anon
 *       USING expression: true
 *       WITH CHECK expression: true
 *
 * =========================================================  
 * FILL IN THESE TWO VALUES:
 */
const SUPABASE_URL = 'https://vmcwszvfmtfpoazwhpcn.supabase.co';   // <-- replace
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtY3dzenZmbXRmcG9hendocGNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1Mzc2MzksImV4cCI6MjA5MTExMzYzOX0.DUxRkbDyek6ZaHc_Q_mzqOZTtMTM0jZKXJ063rF2_As';                      // <-- replace
/* ========================================================= */

(function () {
  const PAGE = '/';
  const SEED = 0;            // already seeded 36 in DB via SQL above
  const SESSION_KEY = 'vc_counted';

  function render(n) {
    document.querySelectorAll('#view-count').forEach(el => {
      el.textContent = Number(n + SEED).toLocaleString();
    });
  }

  async function getCount() {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/views?page=eq.${encodeURIComponent(PAGE)}&select=count`,
      { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } }
    );
    const data = await res.json();
    return data[0]?.count ?? 36;
  }

  async function increment() {
    // Use Supabase RPC to atomically increment (no race condition)
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/rpc/increment_view`,
      {
        method: 'POST',
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ page_key: PAGE })
      }
    );
    const data = await res.json();
    return data ?? 36;
  }

  async function track() {
    try {
      let count;
      if (sessionStorage.getItem(SESSION_KEY)) {
        count = await getCount();
      } else {
        count = await increment();
        sessionStorage.setItem(SESSION_KEY, '1');
      }
      render(count);
    } catch (e) {
      console.warn('[ViewCounter] offline, showing fallback');
      render(36);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', track);
  } else {
    track();
  }
})();
