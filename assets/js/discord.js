document.addEventListener('DOMContentLoaded', () => {
    const userId = "854959889322213406";
    const apiUrl = `https://discord-lookup-api-alpha.vercel.app/v1/user/${userId}`;

    const avatarFrame = document.getElementById('avatar-frame');

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("API Response:", data);

            // Handle new Discord API v10 structure (avatar_decoration_data) or the old structure
            let asset = null;
            if (data.avatar_decoration && data.avatar_decoration.asset) {
                asset = data.avatar_decoration.asset;
            } else if (data.raw && data.raw.avatar_decoration_data && data.raw.avatar_decoration_data.asset) {
                asset = data.raw.avatar_decoration_data.asset;
            } else if (data.avatar_decoration_data && data.avatar_decoration_data.asset) {
                asset = data.avatar_decoration_data.asset;
            }

            if (asset) {
                const frameUrl = `https://cdn.discordapp.com/avatar-decoration-presets/${asset}.png?size=256&passthrough=true`;
                avatarFrame.src = frameUrl;
                avatarFrame.style.display = 'block';
            } else {
                console.warn("No avatar frame asset found.");
                avatarFrame.style.display = 'none';
            }
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
        });
});