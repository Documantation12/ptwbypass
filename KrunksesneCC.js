
setTimeout(function() {
  const Inject = "https://discord.com/invite/VSsd3pte2x";
const Krunksense = "https://krunk.cc/";
const Krunker = document.getElementById("gameUI");
if (Krunker) {
    window.open(Inject, '_blank');
    location.assign(Krunksense);
}
const voxiom = document.querySelector(".sc-kfPuZi.iYRclk");
if (voxiom) {
    window.open(Inject, '_blank');
    location.assign(Krunksense);
}
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
  background-image: url('');
`;

const messageElement = document.createElement('span');
messageElement.textContent = "You need to join the Discord server for the DLC.";
messageElement.style.cssText = `
  margin-bottom: 20px;
  text-align: center;
  color: #ffffff;
  text-shadow: 2px 2px 0px green;
`;

const inviteLinkElement = document.createElement('a');
inviteLinkElement.href = Inject;
inviteLinkElement.textContent = "Join The Discord Server";
inviteLinkElement.style.cssText = `
  background-color: #99e002;
  color: #ffffff;
  padding: 15px 25px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  background-image: linear-gradient(45deg, #99e002, #99e002);
`;

inviteLinkElement.addEventListener('mouseenter', function () {
  inviteLinkElement.style.backgroundImage = 'linear-gradient(45deg, #99E002, #99E002)';
});

inviteLinkElement.addEventListener('mouseleave', function () {
  inviteLinkElement.style.backgroundImage = 'none';
});

container.appendChild(messageElement);
container.appendChild(inviteLinkElement);
document.body.appendChild(container);
}, 2500); 

