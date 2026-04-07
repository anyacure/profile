function updateClocks() {
    const now = new Date();

    // Vietnam Time (Asia/Ho_Chi_Minh)
    const vnTimeStr = now.toLocaleTimeString('en-GB', {
        timeZone: 'Asia/Ho_Chi_Minh',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // US Time (America/Denver)
    const usTimeStr = now.toLocaleTimeString('en-GB', {
        timeZone: 'America/Denver',
        hour: '2-digit',
        minute: '2-digit'
    });

    const vnElem = document.getElementById('vn-time');
    if (vnElem) vnElem.textContent = vnTimeStr;
    
    const usElem = document.getElementById('us-time');
    if (usElem) usElem.textContent = usTimeStr;
}

// Initial sync
updateClocks();

// Update display every second
setInterval(updateClocks, 1000);
