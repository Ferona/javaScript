function removeTransition(e) {
    if (e.propertyName !== 'transform') return;        //<-- atanmayan bir tuşa basıldığı durumlar için    
    e.target.classList.remove('playing');
  }

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);  //<-- atanan tuşun seçilmesi
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');     
    audio.currentTime = 0;
    audio.play();     //<-- atanan tuşa bastığımızda çalması için
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);