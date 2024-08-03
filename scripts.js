document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const trackTitle = document.getElementById('trackTitle');
    const trackArtist = document.getElementById('trackArtist');
    const coverImage = document.getElementById('coverImage');
    const progressBar = document.getElementById('progressBar');

    const tracks = [
        { title: 'Song 1', artist: 'Artist 1', src: 'audio/song1.mp3', cover: 'images/cover1.jpeg' },
        { title: 'Song 2', artist: 'Artist 2', src: 'audio/song2.mp3', cover: 'images/cover2.jpg' },
        { title: 'Song 3', artist: 'Artist 3', src: 'audio/song3.mp3', cover: 'images/cover3.jpg' }
    ];

    let currentTrackIndex = 0;

    function loadTrack(index) {
        const track = tracks[index];
        audioPlayer.src = track.src;
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
        coverImage.src = track.cover;
        audioPlayer.load();
        audioPlayer.play();
        playPauseBtn.textContent = '⏸️';
    }

    function playPauseTrack() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = '⏸️';
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = '▶️';
        }
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        loadTrack(currentTrackIndex);
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrackIndex);
    }

    audioPlayer.addEventListener('timeupdate', () => {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = progress;
    });

    progressBar.addEventListener('input', () => {
        audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
    });

    playPauseBtn.addEventListener('click', playPauseTrack);
    nextBtn.addEventListener('click', nextTrack);
    prevBtn.addEventListener('click', prevTrack);

    loadTrack(currentTrackIndex);
});
