document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const signupModal = document.getElementById('signupModal');
    const loginModal = document.getElementById('loginModal');
    const closeButtons = document.getElementsByClassName('close');

    // Newsletter form submission
    const subscribeForm = document.getElementById('subscribe-form');
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert('Thanks for subscribing! We\'ll keep you updated.');
        this.reset();
    });

    // Notify Me button
    const notifyButton = document.querySelector('.notify-me');
    notifyButton.addEventListener('click', function() {
        openSignupModal(); // Open signup modal instead of just showing alert
    });

    // Login form submission
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
        // Add your login logic here
        alert('Login functionality will be implemented with backend integration');
        this.reset();
        loginModal.style.display = "none";
    });

    // Signup form submission
    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
        // Add your signup logic here
        alert('Signup functionality will be implemented with backend integration');
        this.reset();
        signupModal.style.display = "none";
    });

    // Close modal when clicking on X
    Array.from(closeButtons).forEach(button => {
        button.addEventListener('click', function() {
            signupModal.style.display = "none";
            loginModal.style.display = "none";
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target == signupModal) {
            signupModal.style.display = "none";
        }
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
    });
});

// Modal open functions
function openSignupModal() {
    document.getElementById('signupModal').style.display = "block";
}

function openLoginModal() {
    document.getElementById('loginModal').style.display = "block";
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

class MusicPlayer {
    constructor() {
        this.audio = new Audio();
        this.isPlaying = false;
        this.currentTrack = 0;
        this.tracks = [
            {
                title: 'Track 1',
                artist: 'CAMP CORDUROY',
                file: 'track1.mp3',
                art: 'placeholder-album.jpg'
            }
            // Add more tracks here
        ];

        this.initializePlayer();
    }

    initializePlayer() {
        // Play/Pause button
        document.getElementById('playPause').addEventListener('click', () => this.togglePlay());

        // Progress bar
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        document.querySelector('.progress-bar').addEventListener('click', (e) => this.setProgress(e));

        // Track navigation
        document.getElementById('prevTrack').addEventListener('click', () => this.prevTrack());
        document.getElementById('nextTrack').addEventListener('click', () => this.nextTrack());

        // Volume control
        document.getElementById('volumeRange').addEventListener('input', (e) => {
            this.audio.volume = e.target.value / 100;
        });

        // Track ended event
        this.audio.addEventListener('ended', () => this.nextTrack());

        // Initialize first track
        this.loadTrack(this.currentTrack);
    }

    togglePlay() {
        if (this.isPlaying) {
            this.audio.pause();
            document.querySelector('#playPause i').classList.replace('fa-pause', 'fa-play');
        } else {
            this.audio.play();
            document.querySelector('#playPause i').classList.replace('fa-play', 'fa-pause');
        }
        this.isPlaying = !this.isPlaying;
    }

    loadTrack(trackIndex) {
        const track = this.tracks[trackIndex];
        this.audio.src = track.file;
        document.getElementById('trackTitle').textContent = track.title;
        document.getElementById('artistName').textContent = track.artist;
        document.getElementById('albumArt').src = track.art;
        this.isPlaying = false;
        this.togglePlay();
    }

    updateProgress() {
        const progress = (this.audio.currentTime / this.audio.duration) * 100;
        document.querySelector('.progress').style.width = `${progress}%`;
        
        document.getElementById('currentTime').textContent = this.formatTime(this.audio.currentTime);
        document.getElementById('duration').textContent = this.formatTime(this.audio.duration);
    }

    setProgress(e) {
        const width = e.target.clientWidth;
        const clickX = e.offsetX;
        const duration = this.audio.duration;
        this.audio.currentTime = (clickX / width) * duration;
    }

    prevTrack() {
        this.currentTrack--;
        if (this.currentTrack < 0) this.currentTrack = this.tracks.length - 1;
        this.loadTrack(this.currentTrack);
    }

    nextTrack() {
        this.currentTrack++;
        if (this.currentTrack > this.tracks.length - 1) this.currentTrack = 0;
        this.loadTrack(this.currentTrack);
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
}

// Initialize player when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.music-player')) {
        const player = new MusicPlayer();
    }
}); 
