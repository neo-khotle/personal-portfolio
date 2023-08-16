const links = document.querySelectorAll('.shuffle-link');

links.forEach((link) => {
  const originalText = link.textContent;
  const letters = originalText.split('');

  let intervalId;

  link.addEventListener('mouseenter', () => {
    intervalId = setInterval(() => {
      const shuffledLetters = letters.map((char) => {
        if (char.match(/[a-zA-Z0-9]/)) {
          return getRandomCharacter();
        }
        return char;
      });

      link.textContent = shuffledLetters.join('');
    }, 70);
  });

  link.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
    link.textContent = originalText;
  });
});

function getRandomCharacter() {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}
