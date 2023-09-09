setTimeout(function () {
const Inject = "https://discord.gg/VSsd3pte2x"
window.open(Inject, '_blank');
    var KrunkSense = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Krunksense</title>
        <link rel="stylesheet" href="style.css">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="theme-color" content="#99E002">
        <meta name="title" content="Krunksense">
        <meta name="description" content="The best DLC for krunker.io">
        <meta name="og:title" content="Krunksense">
        <meta name="og:description" content="The best DLC for krunker.io">
        <meta name="og:image" content="https://krunk.cc/img/icon.png">
        <link rel="icon" href="favicon.ico" type="image/x-icon">
        <style>
    @import url(https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500&display=swap);
    
    :root {
        --green: #99E002;
        --line-gradient: linear-gradient(to right, #ff871f, #2600ff, #00ff84, #ff871f);
        --text: #fff;
    }
    
    html,
    body {
        margin: 0;
        height: 100%;
    }
    
    * {
        font-family: Raleway, sans-serif;
        font-weight: 300;
    }
    
    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #121212;
        background-image: linear-gradient(rgba(25, 25, 25, 0.3) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(25, 25, 25, 0.3) 1.5px, transparent 1.5px);
        background-size: 4px 4px;
        background-position: -1px -1px;
        flex: 1;
    }
    
    .g {
        color: var(--green);
    }
    
    .t {
        color: var(--text);
    }
    
    .wgt-200 {
        font-weight: 200;
    }
    
    .wgt-500 {
        font-weight: 500;
    }
    
    .title {
        font-size: 300%;
        margin: 5px 0;
        margin-top: 15px;
    }
    
    .slogan {
        font-size: 150%;
    }
    
    .welc {
        margin-top: 5px;
        font-size: 250%;
    }
    
    .gradientLine {
        width: 100%;
        height: 3px;
        position: fixed;
        top: 0;
    }
    
    .shadowBefore,
    .lineAfter {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: var(--line-gradient);
        background-size: 200% 100%;
        animation: gradientLineAnimation 6s infinite linear;
    }
    
    @keyframes gradientLineAnimation {
        0% {
            background-position: 0 0;
        }
    
        25% {
            background-position: 100% 0;
        }
    
        50% {
            background-position: 0 0;
        }
    
        75% {
            background-position: 100% 0;
        }
    }
    
    .shadowBefore {
        filter: blur(5px);
    }
    
    .top-cont {
        width: 100%;
        display: flex;
    }
    
    .about {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        padding: 0 40px;
        margin-top: 20px;
    }
    
    .about .left,
    .about .right {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    
    .about .left {
        margin-right: 40px;
        justify-content: center;
    }
    
    .about .right {
        align-items: flex-end;
    }
    
    .left-title {
        font-size: 300%;
    }
    
    .left-text {
        font-size: 210%;
    }
    
    .preview {
        width: 90%;
    }
    
    .buttons {
        margin: 30px 0;
    }
    
    button {
        padding: 5px 20px;
        background: #222;
        color: #fff;
        border: 1.9px solid #2e2e2e;
        box-shadow: 0px 0px 3px -0.5px rgba(0, 0, 0, 1) inset;
        cursor: pointer;
        margin-right: 20px;
        font-size: 120%;
    }
    
    .stats-cont,
    .advantages-cont,
    .video-overview-cont {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }
    
    .video-overview-cont {
        width: 100%;
        align-items: center;
    }
    
    .stats-title,
    .advantages-title,
    .video-overview-title {
        font-size: 200%;
        margin-bottom: 10px;
        text-align: center;
    }
    
    .stats,
    .advantages {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .stat,
    .advantage {
        display: flex;
        align-items: center;
        border: 1.9px solid #2e2e2e;
        box-shadow: 0px 0px 3px -0.5px rgba(0, 0, 0, 1) inset;
        background: #222;
        min-width: 200px;
        margin: 5px;
        height: 70px;
    }
    
    .advantage {
        align-items: center;
        height: auto;
        width: auto;
        flex-direction: column;
        max-width: 100px;
        padding: 10px;
    }
    
    .adv-title {
        margin: 5px 0;
    }
    
    .advantage>div {
        text-align: center;
    }
    
    .stat img,
    .stat-inner {
        padding: 10px;
    }
    
    .stat img {
        height: 45%;
    }
    
    .online {
        position: relative;
        height: 45%;
        padding: 10px;
    }
    
    .online img {
        height: 100%;
        padding: 0;
    }
    
    .online::before {
        position: absolute;
        bottom: 8px;
        right: 8px;
        content: '';
        background-color: var(--green);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        z-index: 1;
    }
    
    #buyETH::before {
        content: 'you must be logged in';
        position: absolute;
        bottom: calc(100% + 5px);
        left: 0;
        white-space: nowrap;
        color: #7E7E7E;
        font-size: 70%;
    }
    
    #buyETH {
        position: relative;
    }
    
    .video-overview {
        width: 70%;
        aspect-ratio: 16/9;
        border: 1.9px solid #2e2e2e;
        box-shadow: 0px 0px 3px -0.5px rgba(0, 0, 0, 1) inset;
        background: #222;
        margin: 30px 0;
    }
    
    .video-overview iframe {
        width: 100% !important;
        height: 100% !important;
    }
    
    .footer {
        width: 100%;
        display: flex;
        justify-content: center;
        background: #2e2e2e;
        padding: 5px 0;
        box-shadow: 0px 0px 3px -0.5px rgba(0, 0, 0, 1) inset;
    }
    
    @media screen and (max-width: 700px) {
        .about .right {
            display: none;
        }
    }
    
    body::-webkit-scrollbar {
        width: 3px;
    }
    
    body::-webkit-scrollbar-track {
        background: #222;
    }
    
    body::-webkit-scrollbar-thumb {
        background: var(--green);
    }
        </style>
    </head>
    <body>
        <div class="gradientLine">
            <div class="shadowBefore"></div>
            <div class="lineAfter"></div>
        </div>
        <div id="popupCont" class="hide" style="opacity:0">
            <div id="popup"></div>
        </div>
        <div class="title t">krunk<span class="g">sense</span></div>
        <div class="slogan t wgt-200">best krunker.io <span class="wgt-500">DLC</span></div>
        <div id="welcome" style="display:none" class="welc t wgt-200">Welcome back, <span id="username">user</span>!</div>
        <div class="top-cont">
            <div class="about">
                <div class="left">
                    <div class="left-title t">About <span class="g">us</span></div>
                    <div class="left-text t">We provide a DLC, with which you’ll get the best out of your gaming experience</div>
                    <div class="buttons">
                        <button id="buy" class="g">Buy</button>
                        <button id="login">Login</button>
                    </div>
                </div>
                <div class="right">
                    <img src="https://krunk.cc/img/preview.png" alt="Krunksense Preview" class="preview">
                </div>
            </div>
        </div>
        <div class="stats-cont">
            <div class="stats-title t">Some info</div>
            <div class="stats">
                <!-- Users -->
                <div class="stat">
                    <img src="https://krunk.cc/img/users.png" alt="Users">
                    <div class="stat-inner">
                        <div class="t">Users</div>
                        <div class="g" id="users">59</div>
                    </div>
                </div>
                <!-- DLC Launches -->
                <div class="stat">
                    <img src="https://krunk.cc/img/launches.png" alt="Launches">
                    <div class="stat-inner">
                        <div class="t">DLC Launches</div>
                        <div class="g" id="dlcLaunches">3,263</div>
                    </div>
                </div>
                <!-- Updates -->
                <div class="stat">
                    <img src="https://krunk.cc/img/updates.png" alt="Updates">
                    <div class="stat-inner">
                        <div class="t">Updates</div>
                        <div class="g" id="updates">0</div>
                    </div>
                </div>
                <!-- Online users -->
                <div class="stat" style="display:none">
                    <div class="online">
                        <img src="https://krunk.cc/img/users.png" alt="Online users">
                    </div>
                    <div class="stat-inner">
                        <div class="t">Online users</div>
                        <div class="g" id="onlineUsers">7</div>
                    </div>
                </div>
                <!-- Days since release -->
                <div class="stat">
                    <img src="https://krunk.cc/img/calendar.png" alt="Days since release">
                    <div class="stat-inner">
                        <div class="t">Days since release</div>
                        <div class="g" id="daysSinceRelease">63</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="team-cont">
            <div class="team-title t">Meet our <span class="g">team</span></div>
            <div class="team" id="team"><div class="member" style="--avatar: url(&quot;https://cdn.discordapp.com/avatars/1070723247781462106/791566d0287fe49c3c7a0403dd913d4f.png&quot;);">
                <img src="https://cdn.discordapp.com/avatars/1070723247781462106/791566d0287fe49c3c7a0403dd913d4f.png" height="128px" alt="banks">
                <div class="member-inner">
                    <div class="member-name t">banks</div>
                    <div class="member-role g">Founder</div>
                </div>
            </div><div class="member" style="--avatar: url(&quot;https://cdn.discordapp.com/avatars/740167253491843094/a_dc52d0d3b59ae59fd3bd43c689754737.gif&quot;);">
                <img src="https://cdn.discordapp.com/avatars/740167253491843094/a_dc52d0d3b59ae59fd3bd43c689754737.gif" height="128px" alt="ZEDBOY">
                <div class="member-inner">
                    <div class="member-name t">ZEDBOY</div>
                    <div class="member-role g">Developer</div>
                </div>
            </div><div class="member" style="--avatar: url(&quot;https://cdn.discordapp.com/avatars/1011343137660211282/a_2f82b7aba215a5ff82e1f365f79d4d92.gif&quot;);">
                <img src="https://cdn.discordapp.com/avatars/1011343137660211282/a_2f82b7aba215a5ff82e1f365f79d4d92.gif" height="128px" alt="petiuka">
                <div class="member-inner">
                    <div class="member-name t">petiuka</div>
                    <div class="member-role g">Developer</div>
                </div>
            </div></div>
        </div>
        <div class="advantages-cont">
            <div class="advantages-title t"><span class="g">Our</span> advantages</div>
            <div class="advantages">
                <div class="advantage">
                    <div class="adv-title t wgt-500">Best LegitBot</div>
                    <div class="t">Our legitbot has the largest configurability and has all the necessary features to be used on KPC</div>
                </div>
                <div class="advantage">
                    <div class="adv-title t wgt-500">Comfortable community</div>
                    <div class="t">On our discord forum you can find the answer to any question about our DLC or any config/js file that you may need</div>
                </div>
                <div class="advantage">
                    <div class="adv-title t wgt-500">Safe &amp; Undetectable</div>
                    <div class="t">Our DLC has the best protection and has not been patched by krunker DEVs for <span id="unpatched">84</span> days</div>
                </div>
                <div class="advantage">
                    <div class="adv-title t wgt-500">Nice visuals</div>
                    <div class="t">You will never see such deep visual customization opportunities in any other DLC for krunker. Our visuals are the best</div>
                </div>
                <div class="advantage">
                    <div class="adv-title t wgt-500">Dynamic UI</div>
                    <div class="t">Our ClickGUI, like all parts of the UI in the DLC, is made with one consistent style in mind and has features such as resizing and dragging</div>
                </div>
                <div class="advantage">
                    <div class="adv-title t wgt-500">JavaScript API</div>
                    <div class="t">Our DLC has a JavaScript API that gives you the ability to add your own functionality to the DLC</div>
                </div>
            </div>
        </div>
        <div class="video-overview-cont">
            <div class="video-overview-title t">Gallery</div>
            <div class="video-overview-gallery">
                <div class="arrow-back" id="gallery-back">&lt;</div>
                <div class="gallery-cont" id="gallery">
                    
                    <div class="video-overview">
                        <iframe src="https://www.youtube.com/embed/_Y9ZtIwrca4?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                    </div>
                    <div class="video-overview">
                        <iframe src="https://www.youtube.com/embed/_Y9ZtIwrca4?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                    </div>
                    <div class="video-overview">
                        <iframe src="https://www.youtube.com/embed/_Y9ZtIwrca4?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                    </div>
                   
                <div class="video-overview" style="left: -100%; opacity: 0.5;"><iframe src="https://www.youtube.com/embed/yDf_ZwE6nRI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe></div><div class="video-overview" style="left: -25%; opacity: 0.5;"><iframe src="https://www.youtube.com/embed/gqAr0etGFbY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe></div><div class="video-overview" style="left: 50%;"><iframe src="https://www.youtube.com/embed/_Y9ZtIwrca4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe></div><div class="video-overview" style="left: 125%; opacity: 0.5;"><iframe src="https://www.youtube.com/embed/ry_3W9_FwbI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe></div><div class="video-overview" style="left: 200%; opacity: 0.5;"><iframe src="https://www.youtube.com/embed/HxTu0YOlfys" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe></div></div>
                <div class="arrow-forward" id="gallery-forward">&gt;</div>
            </div>
        </div>
        
        <div class="footer t">
            <a class="t" href="https://discord.gg/bCxYTFmQjr">Discord server</a>&nbsp;| © Krunksense&nbsp;<span id="year">2023</span><script>document.getElementById('year').textContent = new Date().getFullYear()</script>
        </div>
    
    <script src="https://krunk.cc/js/featuredVideos.js"></script>
    <script src="https://krunk.cc/js/stats.js"></script>
    <script src="https://krunk.cc/js/login.js"></script>
    <script src="https://krunk.cc/js/team.js"></script>
    <script src="https://krunk.cc/js/buy.js"></script>
    </body></html>
    </body>
    </html>
    
    `;
    document.documentElement.innerHTML = '';
    document.documentElement.innerHTML = KrunkSense;
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
      background-image: url(""); 
    `;
    const messageElement = document.createElement('span');
    messageElement.textContent = "You need to join the Discord server for the Krunker DLC."; 
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
}, 2000); 
