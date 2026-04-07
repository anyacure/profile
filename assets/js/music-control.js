document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myAudio');
    const playPauseBtn = document.getElementById('playPauseBtn'); 
    const bottomPlayBtn = document.getElementById('bottom-play-btn'); 
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // UI Elements - Spotify Widget
    const spotifyTitle = document.getElementById('spotify-title');
    const spotifyArtist = document.getElementById('spotify-artist');
    const spotifyArt = document.getElementById('spotify-art');
    const spotifyTime = document.getElementById('spotify-time');
    const spotifyProgress = document.getElementById('spotify-progress');
    const spotifyProgressContainer = document.getElementById('spotify-progress-container');

    // UI Elements - Bottom Player
    const bottomTitle = document.getElementById('bottom-title');
    const bottomArt = document.getElementById('bottom-art');
    const bottomArtIcon = document.getElementById('bottom-art-icon');
    const bottomCurrentTime = document.getElementById('bottom-current-time');
    const bottomTotalTime = document.getElementById('bottom-total-time');
    const bottomProgress = document.getElementById('bottom-progress');
    const bottomProgressContainer = document.getElementById('bottom-progress-container');

    let isPlaying = false;
    let currentSongIndex = 0;
    let playlist = [];

    // Fetch Playlist from JSON
    fetch('./assets/music/playlist.json')
        .then(response => response.json())
        .then(data => {
            playlist = data;
            if (playlist.length > 0) {
                // Pre-load the first song info
                loadSongUI(0);
            }
        })
        .catch(err => console.error('Error loading playlist JSON:', err));

    function loadSongUI(index) {
        if (playlist.length === 0) return;
        currentSongIndex = index % playlist.length;
        if (currentSongIndex < 0) currentSongIndex = playlist.length - 1;
        
        const song = playlist[currentSongIndex];
        
        // Update UI Text
        if (spotifyTitle) spotifyTitle.textContent = song.title;
        if (spotifyArtist) spotifyArtist.textContent = song.artist;
        if (bottomTitle) bottomTitle.textContent = song.title;

        // Update Art
        if (song.cover) {
            if (spotifyArt) spotifyArt.src = song.cover;
            if (bottomArt) {
                bottomArt.src = song.cover;
                bottomArt.style.display = 'block';
            }
            if (bottomArtIcon) bottomArtIcon.style.display = 'none';
        }
    }

    function playSong(index, forcePlay = true) {
        if (playlist.length === 0) return;
        
        currentSongIndex = index % playlist.length;
        if (currentSongIndex < 0) currentSongIndex = playlist.length - 1;
        
        const song = playlist[currentSongIndex];
        
        // Change audio source
        audio.src = song.src;
        audio.load();
        
        loadSongUI(currentSongIndex);
        
        if (forcePlay || isPlaying) {
            audio.play().catch(e => console.log('Autoplay prevented:', e));
        }
    }

    function togglePlay() {
        if (audio.paused) {
            audio.play().catch(e => console.log('Play prevented:', e));
        } else {
            audio.pause();
        }
    }

    function playNext() {
        playSong(currentSongIndex + 1);
    }

    function playPrev() {
        playSong(currentSongIndex - 1);
    }

    function playRandomSong(forcePlay = false) {
        if (playlist.length === 0) return;
        let randomIndex;
        if (playlist.length > 1) {
            do {
                randomIndex = Math.floor(Math.random() * playlist.length);
            } while (randomIndex === currentSongIndex);
        } else {
            randomIndex = 0;
        }
        playSong(randomIndex, forcePlay || !audio.paused);
    }

    // Audio Event Hooks
    audio.addEventListener('play', () => {
        isPlaying = true;
        updatePlayButtons();
    });

    audio.addEventListener('pause', () => {
        isPlaying = false;
        updatePlayButtons();
    });

    audio.addEventListener('ended', () => {
        playRandomSong(true);
    });

    function updatePlayButtons() {
        if (playPauseBtn) {
            const icon = playPauseBtn.querySelector('i');
            if (icon) icon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
        }
        if (bottomPlayBtn) {
            bottomPlayBtn.className = isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
        }
    }

    // Progress Bar Updates
    function formatTime(seconds) {
        if (isNaN(seconds) || !isFinite(seconds)) return "00:00";
        const m = Math.floor(Math.abs(seconds) / 60);
        const s = Math.floor(Math.abs(seconds) % 60);
        return `${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`;
    }

    audio.addEventListener('timeupdate', () => {
        const current = audio.currentTime;
        const duration = audio.duration || 1;
        const progressPercent = (current / duration) * 100;

        // Spotify Widget Update
        if (spotifyProgress) spotifyProgress.style.width = `${progressPercent}%`;
        if (spotifyTime) {
            const remaining = duration - current;
            spotifyTime.textContent = `- ${formatTime(remaining)}`;
        }

        // Bottom Player Update
        if (bottomProgress) bottomProgress.style.width = `${progressPercent}%`;
        if (bottomCurrentTime) bottomCurrentTime.textContent = formatTime(current);
        if (bottomTotalTime) bottomTotalTime.textContent = formatTime(duration);
    });

    // Seeking Functionality
    function seekAudio(e, container) {
        const rect = container.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickPercent = Math.max(0, Math.min(1, clickX / rect.width));
        if (audio.duration) {
            audio.currentTime = clickPercent * audio.duration;
        }
    }

    if (spotifyProgressContainer) spotifyProgressContainer.addEventListener('click', (e) => seekAudio(e, spotifyProgressContainer));
    if (bottomProgressContainer) bottomProgressContainer.addEventListener('click', (e) => seekAudio(e, bottomProgressContainer));

    // Interaction Events
    if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlay);
    if (bottomPlayBtn) bottomPlayBtn.addEventListener('click', togglePlay);
    if (prevBtn) prevBtn.addEventListener('click', playPrev);
    if (nextBtn) nextBtn.addEventListener('click', playNext);
    
    // Hidden controls hooking if they exist
    const randomBtn = document.getElementById('randomBtn');
    if (randomBtn) randomBtn.addEventListener('click', () => playRandomSong(true));
    
    const volumeSlider = document.getElementById('volumeSlider');
    const muteBtn = document.getElementById('muteBtn');
    const muteIcon = document.getElementById('muteIcon');
    let previousVolume = 1;
    let isMuted = false;

    function updateMuteIcon() {
        if (!muteIcon) return;
        if (isMuted || audio.volume === 0) {
            muteIcon.className = 'fas fa-volume-mute';
        } else if (audio.volume < 0.5) {
            muteIcon.className = 'fas fa-volume-down';
        } else {
            muteIcon.className = 'fas fa-volume-up';
        }
    }

    if (volumeSlider) {
        audio.volume = volumeSlider.value / 100;
        volumeSlider.addEventListener('input', function() {
            const vol = this.value / 100;
            audio.volume = vol;
            if (vol > 0) {
                isMuted = false;
                previousVolume = vol;
            } else {
                isMuted = true;
            }
            updateMuteIcon();
        });
    }

    if (muteBtn) {
        muteBtn.addEventListener('click', () => {
            if (isMuted || audio.volume === 0) {
                audio.volume = previousVolume > 0 ? previousVolume : 1;
                if (volumeSlider) volumeSlider.value = audio.volume * 100;
                isMuted = false;
            } else {
                previousVolume = audio.volume;
                audio.volume = 0;
                if (volumeSlider) volumeSlider.value = 0;
                isMuted = true;
            }
            updateMuteIcon();
        });
        updateMuteIcon();
    }

    // Hook called from script.js after Terminal Sequence ends
    window.startMusicWithRandom = function() {
        if (playlist.length > 0) {
            playRandomSong(true);
        } else {
            // Fallback if JSON somehow failed
            audio.play().catch(e => console.log('Autoplay prevented', e));
        }
    };
}); 