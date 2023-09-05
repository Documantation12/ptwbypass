

function Gui() {
    const images = [
      'https://camo.githubusercontent.com/309c84b44d278cdf97ad38018936cc2825af51fb25208a1816ef504a88e6f5dd/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313134353738393232323932323439383133302f313134373639363131363430363638353834362f696d6167652e706e673f77696474683d393836266865696768743d343733',
      'https://camo.githubusercontent.com/5da0c782db09f1b544a7b61f19e02fc0b44eb0538bc5bc603ef1dfd4b39026ac/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313134353738393232323932323439383133302f313134373639363139373738383736363233382f696d6167652e706e673f77696474683d393836266865696768743d343733',
      'https://camo.githubusercontent.com/5da0c782db09f1b544a7b61f19e02fc0b44eb0538bc5bc603ef1dfd4b39026ac/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313134353738393232323932323439383133302f313134373639363139373738383736363233382f696d6167652e706e673f77696474683d393836266865696768743d343733',
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
  messageElement.textContent = atob('WW91IG5lZWQgdG8gam9pbiB0aGUgRGlzY29yZCBzZXJ2ZXIgZm9yIHRoZSBhY3R1YWwgc2NyaXB0LiBJdCdzIGluIHRoZSBjaGFubmVsICNraXJrYQ==');
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
  setInterval(update, 1000);
  
