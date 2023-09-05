function Gui() {
  const images = [
    'https://user-images.githubusercontent.com/134162456/260266445-b116f9dd-1852-4768-b5d9-6e227f2c6974.png',
    'https://user-images.githubusercontent.com/134162456/259533515-884c541a-818d-4079-8afd-1e11724382c3.png',
    'https://user-images.githubusercontent.com/134162456/265300577-7a6fa56b-2656-4a25-9b9c-38e9259af146.png',
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
messageElement.textContent = atob('WW91IG5lZWQgdG8gam9pbiB0aGUgRGlzY29yZCBzZXJ2ZXIgZm9yIHRoZSBhY3R1YWwgc2NyaXB0LiBJdCdzIGluIHRoZSBjaGFubmVsICNmZW1ib3Qu');
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
