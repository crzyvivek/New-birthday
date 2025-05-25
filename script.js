// Play music after user taps button (due to browser autoplay policies)
const musicBtn = document.getElementById('startMusicBtn');
const bgMusic = document.getElementById('bgMusic');

musicBtn.addEventListener('click', () => {
  bgMusic.play().then(() => {
    musicBtn.style.display = 'none';
  }).catch(err => {
    alert('Music playback failed: ' + err);
  });
});
