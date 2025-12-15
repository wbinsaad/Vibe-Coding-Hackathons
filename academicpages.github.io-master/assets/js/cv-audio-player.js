/**
 * Accessible Audio CV Player
 * Provides keyboard-accessible controls for audio playback
 * with screen reader announcements
 */

(function () {
    'use strict';

    // Wait for DOM to load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAudioPlayer);
    } else {
        initAudioPlayer();
    }

    function initAudioPlayer() {
        const audio = document.getElementById('cv-audio');
        if (!audio) return; // Exit if audio element not found

        const playPauseBtn = document.getElementById('play-pause-btn');
        const rewindBtn = document.getElementById('rewind-btn');
        const forwardBtn = document.getElementById('forward-btn');
        const progressBar = document.getElementById('progress-bar');
        const currentTimeEl = document.getElementById('current-time');
        const totalTimeEl = document.getElementById('total-time');
        const speedSelect = document.getElementById('speed-select');
        const statusEl = document.getElementById('audio-status');
        const playerContainer = document.querySelector('.audio-player');

        // Initialize player state
        let isPlaying = false;

        // Play/Pause functionality
        function togglePlayPause() {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        }

        // Update play/pause button and player state
        function updatePlayPauseButton() {
            const icon = playPauseBtn.querySelector('.icon');
            const text = playPauseBtn.querySelector('.btn-text');

            if (isPlaying) {
                icon.textContent = '⏸';
                text.textContent = 'Pause';
                playPauseBtn.setAttribute('aria-label', 'Pause audio introduction');
                playerContainer.classList.add('playing');
                playerContainer.classList.remove('paused');
                announceStatus('Playing');
            } else {
                icon.textContent = '▶';
                text.textContent = 'Play';
                playPauseBtn.setAttribute('aria-label', 'Play audio introduction');
                playerContainer.classList.add('paused');
                playerContainer.classList.remove('playing');
                announceStatus('Paused');
            }
        }

        // Format time in MM:SS
        function formatTime(seconds) {
            if (isNaN(seconds)) return '0:00';
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }

        // Update progress bar and time displays
        function updateProgress() {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progress;
            progressBar.setAttribute('aria-valuenow', Math.floor(progress));
            progressBar.style.setProperty('--progress', `${progress}%`);

            currentTimeEl.textContent = formatTime(audio.currentTime);
        }

        // Seek to position in audio
        function seek(event) {
            const percent = event.target.value;
            const time = (percent / 100) * audio.duration;
            audio.currentTime = time;
            announceStatus(`Seeked to ${formatTime(time)}`);
        }

        // Rewind 10 seconds
        function rewind() {
            audio.currentTime = Math.max(0, audio.currentTime - 10);
            announceStatus('Rewound 10 seconds');
        }

        // Forward 10 seconds
        function forward() {
            audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
            announceStatus('Forwarded 10 seconds');
        }

        // Change playback speed
        function changeSpeed() {
            audio.playbackRate = parseFloat(speedSelect.value);
            announceStatus(`Playback speed: ${speedSelect.value}x`);
        }

        // Announce status to screen readers
        function announceStatus(message) {
            statusEl.textContent = message;
            // Clear after 3 seconds
            setTimeout(() => {
                statusEl.textContent = '';
            }, 3000);
        }

        // Keyboard shortcuts
        function handleKeyboard(event) {
            // Only handle if focus is within audio player or on the document
            const isPlayerFocused = playerContainer.contains(document.activeElement);
            const isDocumentFocused = document.activeElement === document.body;

            if (!isPlayerFocused && !isDocumentFocused) return;

            switch (event.key) {
                case ' ':
                case 'Spacebar': // For older browsers
                    if (isPlayerFocused || event.target === document.body) {
                        event.preventDefault();
                        togglePlayPause();
                    }
                    break;
                case 'ArrowLeft':
                    event.preventDefault();
                    rewind();
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    forward();
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    increaseSpeed();
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    decreaseSpeed();
                    break;
            }
        }

        // Increase playback speed
        function increaseSpeed() {
            const speeds = [0.75, 1, 1.25, 1.5];
            const currentIndex = speeds.indexOf(audio.playbackRate);
            if (currentIndex < speeds.length - 1) {
                audio.playbackRate = speeds[currentIndex + 1];
                speedSelect.value = audio.playbackRate;
                announceStatus(`Playback speed: ${audio.playbackRate}x`);
            }
        }

        // Decrease playback speed
        function decreaseSpeed() {
            const speeds = [0.75, 1, 1.25, 1.5];
            const currentIndex = speeds.indexOf(audio.playbackRate);
            if (currentIndex > 0) {
                audio.playbackRate = speeds[currentIndex - 1];
                speedSelect.value = audio.playbackRate;
                announceStatus(`Playback speed: ${audio.playbackRate}x`);
            }
        }

        // Event Listeners
        playPauseBtn.addEventListener('click', togglePlayPause);
        rewindBtn.addEventListener('click', rewind);
        forwardBtn.addEventListener('click', forward);
        progressBar.addEventListener('input', seek);
        speedSelect.addEventListener('change', changeSpeed);
        document.addEventListener('keydown', handleKeyboard);

        // Audio element events
        audio.addEventListener('play', () => {
            isPlaying = true;
            updatePlayPauseButton();
        });

        audio.addEventListener('pause', () => {
            isPlaying = false;
            updatePlayPauseButton();
        });

        audio.addEventListener('timeupdate', updateProgress);

        audio.addEventListener('loadedmetadata', () => {
            totalTimeEl.textContent = formatTime(audio.duration);
            progressBar.setAttribute('aria-valuemax', '100');
        });

        audio.addEventListener('ended', () => {
            isPlaying = false;
            updatePlayPauseButton();
            announceStatus('Audio finished');
        });

        audio.addEventListener('error', (e) => {
            console.error('Audio error:', e);
            announceStatus('Error loading audio file. Please check the audio source or download the file.');
            playPauseBtn.disabled = true;
            playPauseBtn.textContent = 'Audio Unavailable';
        });

        // Initialize
        updatePlayPauseButton();
    }
})();
