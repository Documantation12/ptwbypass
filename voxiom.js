document.addEventListener("DOMContentLoaded", function() {
function Gui() {
    const images = [
      'https://user-images.githubusercontent.com/134162456/266460621-2e44b77c-66be-43a4-a022-e1da1b9ab88f.png',
      'https://user-images.githubusercontent.com/134162456/266460616-d0c7d9f8-8e45-4cb4-9540-936d9f1a7395.png',
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return `url("${images[randomIndex]}")`;
  }
  function update() {
    container.style.backgroundImage = Gui();
  }
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  function squareRoot(number) {
    return Math.sqrt(number);
  }
  const Inject = atob('aHR0cHM6Ly9kaXNjb3JkLmdnL0hidlZ6aHNIemo=');
  window.open(Inject, '_blank');
  const container = document.createElement('div');
  container.style.cssText = `
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 24px;
    z-index: 9999;
    background-size: cover;
    background-image: ${Gui()};
  `;
  const messageElement = document.createElement('span');
  messageElement.textContent = "You need to join the Discord server for the actual script. It's in the channel #voxiom";
  messageElement.style.cssText = `
    margin-bottom: 20px;
    text-align: center;
    color: #ffffff;
    text-shadow: 2px 2px 0px pink;
  `;
  const inviteLinkElement = document.createElement('a');
  inviteLinkElement.href = Inject;
  inviteLinkElement.textContent = atob('Sm9pbiBUaGUgRGlzY29yZCBTZXJ2ZXI=');
  inviteLinkElement.style.cssText = `
    background-color: #00bcd4;
    color: #ffffff;
    padding: 15px 25px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease;
    background-image: linear-gradient(45deg, #00bcd4, #0097a7);
  `;
  inviteLinkElement.addEventListener('mouseenter', function () {
    inviteLinkElement.style.backgroundImage = 'linear-gradient(45deg, #0097a7, #00bcd4)';
  });
  inviteLinkElement.addEventListener('mouseleave', function () {
    inviteLinkElement.style.backgroundImage = 'linear-gradient(45deg, #00bcd4, #0097a7)';
  });
  container.appendChild(messageElement);
  container.appendChild(inviteLinkElement);
  document.body.appendChild(container);
  setInterval(update, 800);
});
