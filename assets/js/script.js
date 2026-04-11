document.addEventListener('DOMContentLoaded', function () {
    var terminalContainer = document.getElementById('terminal');
    var terminalText = document.getElementById('terminal-text');
    var videoBackground = document.getElementById('myVideo');
    var audioBackground = document.getElementById('myAudio');
    var blurredBox = document.getElementById('blurred-box');
    var closeButton = document.getElementById('close-button');

    var terminalTextContent = [
        "User Details:",
        "- Alias: anyacure",
        "- Network IP: Loading...",
        "- System: Loading...",
        "",
        "Profile Metadata:",
        "- Specialization: Web Alchemist & UI Designer",
        "- Passion: Master of Anime & Gaming",
        "- Status: Online & Living in 4K",
        "-------------------------------",
        "",
        "System Ready.",
        "Press [Enter] to continue to full console."
    ];
    var currentIndex = 0;
    var isTyping = true;
    var typingTimeout;

    videoBackground.pause();
    audioBackground.pause();

    function typeWriter() {
        if (!isTyping) return;
        var line = currentIndex === 0 ? getAsciiArt() : terminalTextContent[currentIndex - 1];
        var i = 0;

        function typeChar() {
            if (!isTyping) return;
            if (i < line.length) {
                terminalText.textContent += line.charAt(i);
                i++;
                typingTimeout = setTimeout(typeChar, 15);
            } else {
                terminalText.textContent += "\n";
                currentIndex++;
                if (currentIndex < terminalTextContent.length + 1) {
                    typeWriter();
                } else {
                    isTyping = false;
                    terminalContainer.removeEventListener('click', skipTyping);
                    addEventListeners();
                }
            }
        }
        if (currentIndex === 0) {
            typingTimeout = setTimeout(typeChar, 2500); // Wait for Miku loader on startup
        } else {
            typeChar(); // Type subsequent lines immediately
        }
    }

    function skipTyping() {
        if (!isTyping) return;
        isTyping = false;
        clearTimeout(typingTimeout);
        
        let fullText = getAsciiArt();
        terminalTextContent.forEach(line => {
            fullText += line + "\n";
        });
        terminalText.textContent = fullText;
        
        addEventListeners();
        terminalContainer.removeEventListener('click', skipTyping);
    }

    terminalContainer.addEventListener('click', skipTyping);

    function handleInput() {
        terminalContainer.style.display = 'none';
        videoBackground.play();

        // Reveal the main content
        let scrollWrapper = document.getElementById('scroll-wrapper');
        if (scrollWrapper) {
            scrollWrapper.style.display = 'flex';
        }

        // Trigger auto-play music with random song
        if (window.startMusicWithRandom) {
            window.startMusicWithRandom();
        } else {
            audioBackground.play();
        }

        blurredBox.style.display = 'block';

        // Initialize tilt for profile card to match setup section
        if (typeof VanillaTilt !== 'undefined') {
            VanillaTilt.init(blurredBox, {
                max: 5,
                speed: 400,
                glare: true,
                "max-glare": 0.2,
            });
        }

        let bottomPlayer = document.querySelector('.bottom-player-widget');
        if (bottomPlayer) {
            bottomPlayer.style.display = 'flex';
        }
        let topLeft = document.getElementById('top-left-controls');
        if (topLeft) {
            topLeft.style.display = 'flex';
        }
        removeEventListeners();
    }

    function addEventListeners() {
        document.addEventListener('keydown', handleKeyPress);
        terminalContainer.addEventListener('click', handleInput);
    }

    function removeEventListeners() {
        document.removeEventListener('keydown', handleKeyPress);
        terminalContainer.removeEventListener('click', handleInput);
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleInput();
        }
    }

    closeButton.addEventListener('click', function () {
        handleInput();
    });

    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            var ipAddress = data.ip;
            terminalTextContent[2] = "- Network IP: " + ipAddress;
            typeWriter();
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
            terminalTextContent[2] = "- Network IP: Unable to fetch";
            typeWriter();
        });

    var userAgent = navigator.userAgent;
    var systemInfo;

    function getOperatingSystem() {
        if (userAgent.match(/Windows/)) {
            return getWindowsVersion();
        } else if (userAgent.match(/Macintosh/)) {
            return getMacOSVersion();
        } else if (userAgent.match(/Linux/)) {
            return "Linux";
        } else if (userAgent.match(/Android/)) {
            return getAndroidVersion();
        } else if (userAgent.match(/iPhone|iPad|iPod/)) {
            return getiOSVersion();
        } else {
            return "Unknown";
        }
    }

    function getWindowsVersion() {
        var version = userAgent.match(/Windows NT ([\d.]+)/);
        if (version) {
            version = version[1];
            switch (version) {
                case "5.1":
                    return "Windows XP";
                case "6.0":
                    return "Windows Vista";
                case "6.1":
                    return "Windows 7";
                case "6.2":
                    return "Windows 8";
                case "6.3":
                    return "Windows 8.1";
                case "10.0":
                    return "Windows 10";
                case "10.0":
                    return "Windows 11";
                default:
                    return "Windows";
            }
        } else {
            return "Windows";
        }
    }

    function getMacOSVersion() {
        var version = userAgent.match(/Mac OS X ([\d_]+)/);
        if (version) {
            version = version[1].replace(/_/g, '.');
            return "macOS " + version;
        } else {
            return "macOS";
        }
    }

    function getAndroidVersion() {
        var version = userAgent.match(/Android ([\d.]+)/);
        if (version) {
            return "Android " + version[1];
        } else {
            return "Android";
        }
    }

    function getiOSVersion() {
        var version = userAgent.match(/OS ([\d_]+)/);
        if (version) {
            version = version[1].replace(/_/g, '.');
            return "iOS " + version;
        } else {
            return "iOS";
        }
    }

    var operatingSystem = getOperatingSystem();
    terminalTextContent[3] = "- System: " + operatingSystem;

    function centerTerminal() {
        var terminalWidth = terminalContainer.offsetWidth;
        var terminalHeight = terminalContainer.offsetHeight;
        var centerX = (window.innerWidth - terminalWidth) / 2;
        var centerY = (window.innerHeight - terminalHeight) / 2;

        terminalContainer.style.position = 'absolute';
        terminalContainer.style.left = centerX + 'px';
        terminalContainer.style.top = centerY + 'px';
    }

    centerTerminal();
    window.addEventListener('resize', centerTerminal);

    terminalText.style.textAlign = 'center';

    function getAsciiArt() {
        return `anyacure Profile - Bio Interface
-------------------------------

`;
    }

    var audio = document.getElementById("myAudio");

    var maxVolume = 1.0;
    function limitVolume(volume) {
        if (volume > maxVolume) {
            audio.volume = maxVolume;
        } else {
            audio.volume = volume;
        }
    }

    limitVolume(0.2);

    // Initialize Tilt for the setup section to match the profile card
    if (typeof VanillaTilt !== 'undefined') {
        const setupContainer = document.querySelector('.setup-container.tilt-element');
        if (setupContainer) {
            VanillaTilt.init(setupContainer, {
                max: 5,
                speed: 400,
                glare: true,
                "max-glare": 0.2,
            });
        }
    }
});
