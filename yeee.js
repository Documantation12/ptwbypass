// ==UserScript==
// @name         armatura
// @version      1
// @description  Krunker armatura
// @match        *://krunker.io/*
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://code.jquery.com/ui/1.13.0/jquery-ui.min.js
// @grant        GM_xmlhttpRequest
// ==/UserScript==

var defcolor = "#0066FF";
var interface_sounds = true;
let LauncherVersion = "0.0.2";
let selectedcorner = "top-left";
function loadScriptFromURL(url) {
  var hostScripts = {};
  hostScripts["krunker.io"] = url;
  const v_hostScripts = hostScripts;
  class Requester {
    constructor() {
      try {
        this.onLoad();
      } catch (varExperimentSaved) {
        if (varExperimentSaved.stack) {
          console.trace(varExperimentSaved.stack);
        } else {
          console.error(varExperimentSaved);
        }
      }
    }
    onLoad() {
      Object.entries(v_hostScripts).forEach(([host, script]) => {
        if (host == window.location.host) {
          var req = {};
          req.type = "GET";
          this.request(script, req, (code) => {
            this.inject(code);
          });
        }
      });
    }
    request(argGatherWild, argHistoryMother, argLieRemarkable) {
      let xmlHttpRequest = new XMLHttpRequest();
      xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          if (typeof argLieRemarkable == "function") {
            argLieRemarkable(this.responseText);
          }
        }
      };
      xmlHttpRequest.open(argHistoryMother.type, argGatherWild, false);
      for (const varDecideRope in argHistoryMother.headers) {
        xmlHttpRequest.setRequestHeader(
          varDecideRope,
          argHistoryMother.headers[varDecideRope]
        );
      }
      xmlHttpRequest.send(argHistoryMother.data);
    }
    inject(code, doc) {
      doc = doc || document;
      let script;
      try {
        script = doc.createElement("script");
        script.appendChild(doc.createTextNode(code));
        (
          doc.head ||
          doc.getElementsByTagName("head")[0] ||
          doc.documentElement
        ).appendChild(script);
      } catch (err) {}
      if (script) {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
        script.textContent = "";
      }
    }
  }
  new Requester();
}
loadScriptFromURL(
  "https://raw.githubusercontent.com/petiuka/ARMATURA/main/ActualLaucnherVersionGet"
);
console.log(LauncherVersion0);
loadScriptFromURL(
  "https://raw.githubusercontent.com/biggora/device-uuid/master/lib/device-uuid.min.js"
);
if (typeof jQuery === "undefined" || typeof jQuery.ui === "undefined") {
  loadScriptFromURL("https://code.jquery.com/jquery-3.6.0.min.js");
  loadScriptFromURL("https://code.jquery.com/ui/1.13.0/jquery-ui.min.js");
}
let notifs = true;
if (notifs == true) {
  var notifications = [];
  var activeNotifications = 0;
  function createNotification(
    argHeightPersonal,
    argEffortSad,
    argCompoundSeven
  ) {
    $("<style>")
      .text(
        "\n  :root {\n    --defcolor: " +
          defcolor +
          ';\n  }\n\n  .notification-body {\n    font-family: "Lucida Console", Monaco, monospace;\n    font-size: 15px;\n    letter-spacing: -0.2px;\n    word-spacing: 2px;\n    color: var(--defcolor);\n    font-weight: normal;\n    text-decoration: none;\n    font-style: normal;\n    font-variant: normal;\n    text-transform: capitalize;\n    text-shadow: 0px 0px 7px var(--defcolor);\n  }\n\n  .notification {\n    position: fixed;\n    transform: translateX(-50%);\n    z-index: 9999;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 12px;\n    box-shadow: -1px 1px 17px 0px rgba(0,0,0,1);\n    -webkit-box-shadow: -1px 1px 17px 0px rgba(0,0,0,1);\n    -moz-box-shadow: -1px 1px 17px 0px rgba(0,0,0,1);\n    width: 250px;\n    height: auto;\n    background-color: #1c1c1c;\n    border-radius: 4px;\n    opacity: 0.1;\n    filter: blur(5px);\n    transition: opacity 0.3s ease-in-out, top 0.3s ease-in-out, filter 0.3s ease-in-out;\n    -webkit-border-radius: 15px 3px 15px 3px;\n    -moz-border-radius: 15px 3px 15px 3px;\n    border-radius: 15px 3px 15px 3px;\n  }\n\n  .notification.active {\n    opacity: 1;\n    top: 60px;\n    filter: blur(0px);\n    box-shadow: -1px 1px 17px 0px rgba(0,0,0,1);\n    -webkit-box-shadow: -1px 1px 17px 0px rgba(0,0,0,1);\n    -moz-box-shadow: -1px 1px 17px 0px rgba(0,0,0,1);\n    transition: opacity 0.3s ease-in-out, top 0.3s ease-in-out, filter 0.3s ease-in-out;\n    -webkit-border-radius: 15px 3px 15px 3px;\n    -moz-border-radius: 15px 3px 15px 3px;\n    border-radius: 15px 3px 15px 3px;\n  }\n'
      )
      .appendTo("head");
    const audio = new Audio(
      "https://cdn.discordapp.com/attachments/1014958824161026188/1103606484283170827/enabled.mp3"
    );
    const audio2 = new Audio(
      "https://cdn.discordapp.com/attachments/1014958824161026188/1103606483402367027/disabled.mp3"
    );
    const audio4 = new Audio(
      "https://cdn.discordapp.com/attachments/1014958824161026188/1103606483926667314/warn.mp3"
    );
    if (interface_sounds == true) {
      if (argHeightPersonal.includes("enabled")) {
        audio.play();
      } else if (argHeightPersonal.includes("disabled")) {
        audio2.play();
      }
      var varCountMovie = $("<div>", { class: "notification" }).appendTo(
        "body"
      );
      var varHumanPeople = $("<div>", {
        class: "notification-body",
        text: argHeightPersonal,
      }).appendTo(varCountMovie);
      if (argEffortSad == "top-left") {
        var varHardlyMovement = {};
        varHardlyMovement.top = "10px";
        varHardlyMovement.left = "160px";
        varCountMovie.css(varHardlyMovement);
      } else if (argEffortSad == "top-right") {
        var varDrivingNuts = {};
        varDrivingNuts.top = "10px";
        varDrivingNuts.right = "-115px";
        varCountMovie.css(varDrivingNuts);
      } else if (argEffortSad == "bottom-left") {
        var varBillTomorrow = {};
        varBillTomorrow.bottom = "90px";
        varBillTomorrow.left = "10px";
        varCountMovie.css(varBillTomorrow);
      } else if (argEffortSad == "bottom-right") {
        var varBuriedRubber = {};
        varBuriedRubber.bottom = "90px";
        varBuriedRubber.right = "90px";
        varCountMovie.css(varBuriedRubber);
      }
      notifications.push(varCountMovie);
      setTimeout(function () {
        varCountMovie.addClass("active");
        activeNotifications++;
        if (activeNotifications > 1) {
          var varLayersUnion =
            parseInt(varCountMovie.css("top")) +
            (activeNotifications - 1) * (varCountMovie.outerHeight() / 0.85);
          varCountMovie.css("top", varLayersUnion + "px");
        }
      }, 10);
      setTimeout(function () {
        varCountMovie.removeClass("active");
        setTimeout(function () {
          varCountMovie.remove();
          notifications.splice(notifications.indexOf(varCountMovie), 1);
          activeNotifications--;
        }, 300);
      }, argCompoundSeven);
    }
  }
  window.notificate = function (argColonyPink, argCalmPaint, argBreathingPoet) {
    createNotification(argColonyPink, argCalmPaint, argBreathingPoet);
  };
}
if (LauncherVersion !== LauncherVersion0) {
  window.notificate("Outdated version!", "top-left", 2500000);
}
if (LauncherVersion == LauncherVersion0) {
  var canvas = document.createElement("canvas");
  var gl;
  var debugInfo;
  var vendor;
  var renderer;
  try {
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  } catch (varIdeaRan) {}
  if (gl) {
    debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
  }
  console.log(vendor);
  console.log(renderer);
  var du = new DeviceUUID().parse();
  var dua = [
    du.os,
    du.cpuCores,
    du.isDesktop,
    du.isWindows,
    du.isLinux64,
    du.isMac,
    du.isLinux,
  ];
  console.log(dua);
  var gpuu = btoa(renderer + vendor);
  var WHID = gpuu + du.hashMD5(dua.join(":"));
  WHID = Array.from(WHID)
    .map((argGrandmotherSquare) =>
      String.fromCodePoint(127880 + argGrandmotherSquare.charCodeAt(0))
    )
    .join("");
  console.log(WHID);
  const fieldValues = {};
  var PROFILE_UID = 0;
  var PROFILE_avatar = 0;
  var PROFILE_AlphaAccess = 0;
  var PROFILE_PremiumAccess = 0;
  var PROFILE_registertime = 0;
  var PROFILE_banned = 0;
  var PROFILE_HWID = 0;
  var PROFILE_MultiplyHWID = 0;
  function load(argBookPresent, argAwareTears) {
    console.clear();
    let varCreatureShape =
      "%c \uD83D\uDC4B What you want see here? \uD83D\uDC40";
    let varFatherUnderline = [
      "font-size: 12px",
      "font-family: monospace",
      "background: white",
      "display: inline-block",
      "color: black",
      "padding: 8px 19px",
      "border: 1px dashed;",
    ].join(";");
    console.log(varCreatureShape, varFatherUnderline);
    localStorage.setItem("Loggined", "true");
    localStorage.setItem("LogginedLogin", argBookPresent);
    localStorage.setItem("LogginedPass", argAwareTears);
    loginWindow.fadeOut(100);
    var varFatherSaw = document.createElement("div");
    varFatherSaw.style.position = "fixed";
    varFatherSaw.style.zIndex = "99999999999999";
    varFatherSaw.style.width = "800px";
    varFatherSaw.style.height = "450px";
    varFatherSaw.style.background = "#111111";
    varFatherSaw.style.cursor = "default";
    varFatherSaw.style.border = "1.3px solid rgba(255, 255, 255, 0.1)";
    varFatherSaw.style.borderRadius = "10px";
    document.body.appendChild(varFatherSaw);
    varFatherSaw.style.top = "50%";
    varFatherSaw.style.left = "50%";
    varFatherSaw.style.marginTop = "-" + varFatherSaw.offsetHeight / 2 + "px";
    varFatherSaw.style.marginLeft = "-" + varFatherSaw.offsetWidth / 2 + "px";
    var varFlightWinter = document.createElement("div");
    varFlightWinter.style.position = "absolute";
    varFlightWinter.style.width = "228.57px";
    varFlightWinter.style.height = "74.25px";
    varFlightWinter.style.top = "2.5%";
    varFlightWinter.style.left = "2.5%";
    varFlightWinter.style.fontFamily = "'Alef', sans-serif";
    varFlightWinter.style.fontStyle = "normal";
    varFlightWinter.style.fontWeight = "700";
    varFlightWinter.style.fontSize = "35px";
    varFlightWinter.style.lineHeight = "48px";
    varFlightWinter.style.color = "#0066FF";
    varFlightWinter.innerHTML = "ARMATURA";
    varFatherSaw.appendChild(varFlightWinter);
    var varArrowNobody = document.createElement("div");
    varArrowNobody.style.position = "absolute";
    varArrowNobody.style.width = "228.57px";
    varArrowNobody.style.height = "74.25px";
    varArrowNobody.style.top = "calc(2.5% + 36px)";
    varArrowNobody.style.left = "2.5%";
    varArrowNobody.style.fontFamily = "'Alef', sans-serif";
    varArrowNobody.style.fontStyle = "normal";
    varArrowNobody.style.fontWeight = "700";
    varArrowNobody.style.fontSize = "19px";
    varArrowNobody.style.lineHeight = "26px";
    varArrowNobody.style.color = "#FFFFFF";
    varArrowNobody.innerHTML = "Solution";
    varFatherSaw.appendChild(varArrowNobody);
    var varClothingManner = document.createElement("div");
    varClothingManner.style.boxSizing = "border-box";
    varClothingManner.style.position = "absolute";
    varClothingManner.style.width = "742.86px";
    varClothingManner.style.height = "227.25px";
    varClothingManner.style.top = "calc(50% - 113.625px)";
    varClothingManner.style.left = "calc(50% - 371px)";
    varClothingManner.style.background = "#141414";
    varClothingManner.style.border = "0.5px solid rgba(255, 255, 255, 0.1)";
    varClothingManner.style.borderRadius = "10px";
    varFatherSaw.appendChild(varClothingManner);
    var varBornUniverse = document.createElement("div");
    varBornUniverse.innerHTML =
      "05.04.2023 - Launcher fully completed <br> 11.04.2023 - GUI 25% completed <br> 27.04.2023 - GUI 55% completed <br> 26.05.2023 - Just a protect test";
    varBornUniverse.style.position = "absolute";
    varBornUniverse.style.width = "740.43px";
    varBornUniverse.style.height = "220.25px";
    varBornUniverse.style.fontFamily = "Verdana";
    varFlightWinter.style.fontStyle = "normal";
    varBornUniverse.style.fontWeight = "400";
    varBornUniverse.style.fontSize = "22px";
    varBornUniverse.style.lineHeight = "30px";
    varBornUniverse.style.color = "rgba(255, 255, 255, 0.7)";
    varBornUniverse.style.top = "1%";
    varBornUniverse.style.left = "1%";
    varClothingManner.appendChild(varBornUniverse);
    var varDevelopmentManner = document.createElement("div");
    varDevelopmentManner.style.boxSizing = "border-box";
    varDevelopmentManner.style.position = "absolute";
    varDevelopmentManner.style.width = "320px";
    varDevelopmentManner.style.height = "67.5px";
    varDevelopmentManner.style.background = "#141414";
    varDevelopmentManner.style.border = "0.5px solid rgba(255, 255, 255, 0.1)";
    varDevelopmentManner.style.borderRadius = "10px";
    varDevelopmentManner.style.right = "2.5%";
    varDevelopmentManner.style.top = "2.5%";
    varFatherSaw.appendChild(varDevelopmentManner);
    var varCloudThrow = document.createElement("img");
    varCloudThrow.src = "https://" + PROFILE_avatar;
    varCloudThrow.style.position = "absolute";
    varCloudThrow.style.width = "64px";
    varCloudThrow.style.height = "64px";
    varCloudThrow.style.borderRadius = "88px";
    varCloudThrow.style.left = "0%";
    varCloudThrow.style.top = "0%";
    varDevelopmentManner.appendChild(varCloudThrow);
    var varInchOur = document.createElement("div");
    varInchOur.style.position = "absolute";
    varInchOur.style.width = "166px";
    varInchOur.style.height = "58px";
    varInchOur.style.fontFamily = "'Alef', sans-serif";
    varInchOur.style.fontStyle = "normal";
    varInchOur.style.fontWeight = "400";
    varInchOur.style.fontSize = "21px";
    varInchOur.style.lineHeight = "29px";
    varInchOur.style.color = "#FFFFFF";
    varInchOur.style.top = "50%";
    varInchOur.style.left = "70px";
    varInchOur.style.transform = "translateY(-50%)";
    varInchOur.innerHTML = "User:" + argBookPresent;
    varDevelopmentManner.appendChild(varInchOur);
    var varLiquidNext = document.createElement("div");
    varLiquidNext.style.position = "absolute";
    varLiquidNext.style.width = "166px";
    varLiquidNext.style.height = "58px";
    varLiquidNext.style.fontFamily = "'Alef', sans-serif";
    varLiquidNext.style.fontStyle = "normal";
    varLiquidNext.style.fontWeight = "400";
    varLiquidNext.style.fontSize = "21px";
    varLiquidNext.style.lineHeight = "29px";
    varLiquidNext.style.color = "#FFFFFF";
    varLiquidNext.style.top = "85%";
    varLiquidNext.style.left = "70px";
    varLiquidNext.style.transform = "translateY(-50%)";
    varLiquidNext.innerHTML = "UID:" + PROFILE_UID;
    varDevelopmentManner.appendChild(varLiquidNext);
    var varFellMaterial = document.createElement("div");
    varFellMaterial.style.boxSizing = "border-box";
    varFellMaterial.style.position = "absolute";
    varFellMaterial.style.width = "742.86px";
    varFellMaterial.style.height = "75px";
    varFellMaterial.style.top = "calc(50% + 135.625px)";
    varFellMaterial.style.left = "calc(50% - 371px)";
    varFellMaterial.style.background = "#141414";
    varFellMaterial.style.border = "0.5px solid rgba(255, 255, 255, 0.1)";
    varFellMaterial.style.borderRadius = "10px";
    varFatherSaw.appendChild(varFellMaterial);
    var varChartWest = document.createElement("button");
    varChartWest.style.boxSizing = "border-box";
    varChartWest.style.position = "absolute";
    varChartWest.style.width = "210px";
    varChartWest.style.height = "75px";
    varChartWest.style.top = "0%";
    varChartWest.style.left = "0%";
    varChartWest.style.background = "#0066FF";
    varChartWest.style.border = "0.5px solid rgba(255, 255, 255, 0.1)";
    varChartWest.style.borderRadius = "10px";
    varChartWest.innerHTML = "Launch";
    varChartWest.style.fontFamily = "'Alef', sans-serif";
    varChartWest.style.fontStyle = "normal";
    varChartWest.style.fontWeight = "700";
    varChartWest.style.fontSize = "25px";
    varChartWest.style.lineHeight = "34px";
    varChartWest.style.color = "#FFFFFF";
    varFellMaterial.appendChild(varChartWest);
    varChartWest.addEventListener("click", function () {
      var p_href = window.location.href;
      window.notificate("Loading " + varChapterSix.value, selectedcorner, 2500);
      if (p_href.indexOf("krunker.io") < 0) {
        window.notificate(
          "You cant load cheat not in krunker",
          selectedcorner,
          2500
        );
      }
      if (p_href.indexOf("krunker.io") > 0) {
        if (varHeOrange == "Krunker cheat" && PROFILE_PremiumAccess == true) {
          $(varFatherSaw).fadeOut(250);
          var varFastSatisfied = {};
          varFastSatisfied.position = "absolute";
          varFastSatisfied.top = "10px";
          varFastSatisfied.left = "10px";
          varFastSatisfied.width = "auto";
          varFastSatisfied.height = "auto";
          varFastSatisfied.padding = "5px";
          varFastSatisfied.display = "flex";
          varFastSatisfied.background =
            "linear-gradient(90deg, rgba(21,89,158,0.5508578431372548) 0%, rgba(0,42,74,0.5900735294117647) 100%)";
          varFastSatisfied["backdrop-filter"] = "blur(5.5px)";
          varFastSatisfied["border-radius"] = "8px";
          varFastSatisfied["box-shadow"] = "0px 0px 22px -1px rgba(0,0,0,0.69)";
          varFastSatisfied["-webkit-box-shadow"] =
            "0px 0px 22px -1px rgba(0,0,0,0.69)";
          varFastSatisfied["-moz-box-shadow"] =
            "0px 0px 22px -1px rgba(0,0,0,0.69)";
          varFastSatisfied.justifyContent = "center";
          varFastSatisfied.alignItems = "center";
          varFastSatisfied["z-index"] = "9999999";
          varFastSatisfied.color = "#FFFFF";
          varFastSatisfied["text-shadow"] = "0px 0px 8px rgba(255,255,255,1)";
          varFastSatisfied["font-family"] = "helvetica";
          varFastSatisfied["font-style"] = "normal";
          varFastSatisfied["font-weight"] = "normal";
          varFastSatisfied["font-size"] = "15px";
          varFastSatisfied["font-variant"] = "small-caps";
          varFastSatisfied["text-align"] = "center";
          varFastSatisfied["text-decoration"] = "none";
          varFastSatisfied["letter-spacing"] = "1px";
          varFastSatisfied["word-spacing"] = "3px";
          varFastSatisfied["text-transform"] = "none";
          var v_varFastSatisfied = varFastSatisfied;
          var varAsSuccess = $("<div>", {
            text:
              "ARMATURA v" +
              LauncherVersion0 +
              " | " +
              funcActionPick() +
              " | UID:" +
              PROFILE_UID +
              " | User:" +
              argBookPresent,
            css: v_varFastSatisfied,
          });
          var varBasketRoot = varAsSuccess.text().length * 9;
          varAsSuccess.css("width", varBasketRoot + "px");
          $("body").append(varAsSuccess);
          setInterval(function () {
            var varFillZipper = funcActionPick();
            varAsSuccess.text(
              "ARMATURA v" +
                LauncherVersion0 +
                " | " +
                varFillZipper +
                " | UID:" +
                PROFILE_UID +
                " | user:" +
                argBookPresent
            );
            varBasketRoot = varAsSuccess.text().length * 9;
            varAsSuccess.css("width", varBasketRoot + "px");
          }, 1000);
          function funcActionPick() {
            return new Date().toLocaleTimeString();
          }
          $(function () {
            var varAcceptWhen;
            var varComingSea;
            var varClockWet;
            var varExceptStretch;
            varAsSuccess.mousedown(function (argCompanyWest) {
              varAcceptWhen = parseInt(varAsSuccess.css("left"));
              varComingSea = parseInt(varAsSuccess.css("top"));
              varClockWet = argCompanyWest.pageX;
              varExceptStretch = argCompanyWest.pageY;
              $(document).mousemove(function (argCombinationShelter) {
                var varFactNodded = argCombinationShelter.pageX - varClockWet;
                var varEightMark =
                  argCombinationShelter.pageY - varExceptStretch;
                varAsSuccess.css("left", varAcceptWhen + varFactNodded);
                varAsSuccess.css("top", varComingSea + varEightMark);
              });
              $(document).mouseup(function () {
                $(document).off("mousemove");
              });
              return false;
            });
          });
          var varHadSilent = $("<div>", {
            id: "rectangle34",
            css: {
              position: "absolute",
              width: "890px",
              height: "590px",
              right: "50%",
              top: "50%",
              "-webkit-box-shadow": "0px 0px 16px -9px rgba(0, 0, 0, 0.73)",
              "-moz-box-shadow": "0px 0px 16px -9px rgba(0, 0, 0, 0.73)",
              "box-shadow": "0px 0px 16px -9px rgba(0, 0, 0, 0.73)",
              transform: "translate(50%, -50%)",
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(180deg, rgba(29, 57, 100, 0.7) 0.01%, rgba(11, 11, 11, 0.7) 100%)",
              "backdrop-filter": "blur(32.5px)",
              "border-radius": "15px",
              "z-index": "99999999",
              cursor: "default",
            },
          });
          var varLoadRose = $("<div>", {
            id: "rectangle355",
            css: {
              position: "absolute",
              width: "213px",
              height: "590px",
              left: "0px",
              top: "0px",
              background: "rgba(0, 0, 0, 0.5)",
              "backdrop-filter": "blur(200px)",
              "border-radius": "15px 0px 0px 15px",
            },
          });
          var varBattlePerhaps = $("<img>", {
            src: "https://" + PROFILE_avatar,
            css: {
              position: "absolute",
              width: "45px",
              height: "45px",
              left: "3%",
              bottom: "10px",
              "border-radius": "50%",
            },
          });
          var varAtWagon = $("<img>", {
            src: "https://cdn.discordapp.com/attachments/1014958824161026188/1110498982049894400/Frame_21.png",
            css: {
              position: "absolute",
              width: "210px",
              height: "110px",
              left: "0px",
              top: "3px",
            },
          });
          varLoadRose.append(varBattlePerhaps);
          varLoadRose.append(varAtWagon);
          var varCenturyWall = $("<div>", {
            text: "User:" + argBookPresent,
            css: {
              position: "absolute",
              width: "149px",
              height: "22px",
              left: "55px",
              bottom: "10px",
              "font-family": "'Alef', sans-serif",
              "font-style": "normal",
              "font-weight": 400,
              "font-size": "17px",
              "line-height": "25px",
              "align-items": "left",
              color: "#FFFFFF",
            },
          });
          varLoadRose.append(varCenturyWall);
          var varDutyTheory = $("<div>", {
            text: "UID:" + PROFILE_UID,
            css: {
              position: "absolute",
              width: "149px",
              height: "22px",
              left: "55px",
              bottom: "32px",
              "font-family": "'Alef', sans-serif",
              "font-style": "normal",
              "font-weight": 400,
              "font-size": "17px",
              "line-height": "25px",
              "align-items": "left",
              opacity: 0.7,
              color: "#FFFFFF",
            },
          });
          var varButterSang = $("<div>", {
            class: "Section",
            id: "Section",
            css: {
              position: "absolute",
              transform: "translateX(-50%)",
              top: "1.75%",
              left: "42.5%",
              background: "#0D1018",
              border: "1.3px solid rgba(255, 255, 255, 0.1)",
              "border-radius": "10px",
              width: "300px",
              height: "250px",
              display: "none",
              alignItems: "top",
              opacity: "1",
            },
          }).appendTo(varHadSilent);
          var varCapturedStems = $("<div>", {
            id: "Title",
            css: {
              position: "absolute",
              top: "2px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              letterSpacing: "0.05em",
              fontFamily: "'Inter', sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "29px",
              color: "#0047FF",
              textShadow: "0px 0px 9px rgba(0, 71, 255, 0.65)",
            },
            text: "Main",
          });
          var varExperienceProud = $("<div>", {
            id: "TitleUnderline",
            css: {
              position: "absolute",
              width: "250px",
              height: "3px",
              top: "28px",
              left: "50%",
              transform: "translateX(-50%)",
              background:
                "linear-gradient(270deg, rgba(98, 161, 255, 0) 0%, #0066FF 48.67%, rgba(94, 158, 255, 0) 100%)",
            },
          });
          varButterSang.append(varCapturedStems, varExperienceProud);
          var varFinishSudden = $("<div>", {
            id: "Section",
            class: "Section",
            css: {
              position: "absolute",
              transform: "translateX(-50%)",
              top: "1.75%",
              left: "42.5%",
              background: "#0D1018",
              border: "1.3px solid rgba(255, 255, 255, 0.1)",
              "border-radius": "10px",
              width: "300px",
              height: "150px",
              display: "none",
              alignItems: "top",
              opacity: "1",
            },
          }).appendTo(varHadSilent);
          var varLedMark = $("<div>", {
            id: "Title",
            css: {
              position: "absolute",
              top: "2px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              letterSpacing: "0.05em",
              fontFamily: "'Inter', sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "29px",
              color: "#0047FF",
              textShadow: "0px 0px 9px rgba(0, 71, 255, 0.65)",
            },
            text: "Main",
          });
          var varForgotProcess = $("<div>", {
            id: "TitleUnderline",
            css: {
              position: "absolute",
              width: "250px",
              height: "3px",
              top: "28px",
              left: "50%",
              transform: "translateX(-50%)",
              background:
                "linear-gradient(270deg, rgba(98, 161, 255, 0) 0%, #0066FF 48.67%, rgba(94, 158, 255, 0) 100%)",
            },
          });
          varFinishSudden.append(varLedMark, varForgotProcess);
          var varEveryScared = $("<div>", {
            id: "Section",
            class: "Section",
            css: {
              position: "absolute",
              transform: "translateX(-50%)",
              top: "1.75%",
              left: "42.5%",
              background: "#0D1018",
              border: "1.3px solid rgba(255, 255, 255, 0.1)",
              "border-radius": "10px",
              width: "300px",
              height: "450px",
              display: "none",
              alignItems: "top",
              opacity: "1",
            },
          }).appendTo(varHadSilent);
          var varKeptOpposite = $("<div>", {
            id: "Title",
            css: {
              position: "absolute",
              top: "2px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              letterSpacing: "0.05em",
              fontFamily: "'Inter', sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "29px",
              color: "#0047FF",
              textShadow: "0px 0px 9px rgba(0, 71, 255, 0.65)",
            },
            text: "Config",
          });
          var varGreatOccur = $("<div>", {
            id: "TitleUnderline",
            css: {
              position: "absolute",
              width: "250px",
              height: "3px",
              top: "28px",
              left: "50%",
              transform: "translateX(-50%)",
              background:
                "linear-gradient(270deg, rgba(98, 161, 255, 0) 0%, #0066FF 48.67%, rgba(94, 158, 255, 0) 100%)",
            },
          });
          varEveryScared.append(varKeptOpposite, varGreatOccur);
          var varLeavingWord = $("<div>", {
            id: "Section",
            class: "Section",
            css: {
              position: "absolute",
              transform: "translateX(-50%)",
              top: "1.75%",
              left: "78.5%",
              background: "#0D1018",
              border: "1.3px solid rgba(255, 255, 255, 0.1)",
              "border-radius": "10px",
              width: "300px",
              height: "75px",
              display: "none",
              alignItems: "top",
              opacity: "1",
            },
          }).appendTo(varHadSilent);
          var varExistSoap = $("<div>", {
            id: "Title",
            css: {
              position: "absolute",
              top: "2px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              letterSpacing: "0.05em",
              fontFamily: "'Inter', sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "29px",
              color: "#0047FF",
              textShadow: "0px 0px 9px rgba(0, 71, 255, 0.65)",
            },
            text: "Secure",
          });
          var varLevelProperty = $("<div>", {
            id: "TitleUnderline",
            css: {
              position: "absolute",
              width: "250px",
              height: "3px",
              top: "28px",
              left: "50%",
              transform: "translateX(-50%)",
              background:
                "linear-gradient(270deg, rgba(98, 161, 255, 0) 0%, #0066FF 48.67%, rgba(94, 158, 255, 0) 100%)",
            },
          });
          varLeavingWord.append(varExistSoap, varLevelProperty);
          function ClassDoServe(
            argLipsWithout,
            argFewerWestern,
            argBrokePresident,
            argCityPull,
            argBestVoyage,
            argActMostly,
            argCellRate,
            argIndependentSeveral,
            argCustomsPure,
            argCommandWooden
          ) {
            var varGradeRecently = argLipsWithout.find(
              ".new-element-wrapper:last"
            );
            console.log(varGradeRecently);
            var varFinestSilent = 35;
            if (varGradeRecently.length) {
              varFinestSilent =
                varGradeRecently.offset().top + varGradeRecently.height() + 5;
            }
            var varCloselySpent = $("<div>", {
              class: "new-element-wrapper checkbox-wrapper-4",
              css: {
                position: "relative",
                top: varFinestSilent,
                left: "3.5%",
              },
            }).appendTo(argLipsWithout);
            var varGiveWorried = $("<input>", {
              class: "inp-cbx",
              id: argFewerWestern,
              type: "checkbox",
              checked: argCustomsPure,
            }).appendTo(varCloselySpent);
            var varJudgeReview = $("<label>", {
              class: "cbx",
              for: argFewerWestern,
            }).appendTo(varCloselySpent);
            var varImportantRod = $("<span>").appendTo(varJudgeReview);
            var varBuildingNearly = $("<svg>", {
              width: "12px",
              height: "10px",
            }).appendTo(varImportantRod);
            var varGivingRefer = $("<use>", {
              "xlink:href": "#check-4",
            }).appendTo(varBuildingNearly);
            var varHorseRest = $("<span>", {
              class: "TextOfCheckbox",
              css: { color: "#fff" },
              text: argFewerWestern,
            }).appendTo(varJudgeReview);
            var varEveningNecessary = $("<svg>", {
              class: "inline-svg",
            }).appendTo(varCloselySpent);
            var varHighZero = $("<symbol>", {
              id: "check-4",
              viewBox: "0 0 12 10",
            }).appendTo(varEveningNecessary);
            var varDetailOrange = $("<polyline>", {
              points: "1.5 6 4.5 9 10.5 1",
            }).appendTo(varHighZero);
            var varLipsNails =
              "\n    .checkbox-wrapper-4 * {\n      box-sizing: border-box;\n    }\n    .checkbox-wrapper-4 .cbx {\n      -webkit-user-select: none;\n      user-select: none;\n      cursor: pointer;\n      padding: 6px 8px;\n      border-radius: 6px;\n      overflow: hidden;\n      transition: all 0.2s ease;\n      display: inline-block;\n    }\n    .checkbox-wrapper-4 .cbx:not(:last-child) {\n      margin-right: 6px;\n    }\n    .checkbox-wrapper-4 .cbx:hover {\n      background: rgba(0,119,255,0.06);\n    }\n    .checkbox-wrapper-4 .cbx span {\n      float: left;\n      vertical-align: middle;\n      transform: translate3d(0, 0, 0);\n    }\n    .checkbox-wrapper-4 .cbx span:first-child {\n      position: relative;\n      width: 18px;\n      height: 18px;\n      border-radius: 4px;\n      transform: scale(1);\n      border: 1px solid " +
              defcolor +
              ";\n      transition: all 0.2s ease;\n      box-shadow: 0 1px 1px rgba(0,16,75,0.05);\n    }\n    .checkbox-wrapper-4 .cbx span:first-child svg {\n      position: absolute;\n      top: 3px;\n      left: 2px;\n      fill: none;\n      stroke: #fff;\n      stroke-width: 2;\n      stroke-linecap: round;\n      stroke-linejoin: round;\n      stroke-dasharray: 16px;\n      stroke-dashoffset: 16px;\n      transition: all 0.3s ease;\n      transition-delayed: 0.1s;\n}\n.checkbox-wrapper-4 .cbx span:last-child {\npadding-left: 8px;\npadding-right: 8px;\nfont-size: 14px;\ncolor: " +
              defcolor +
              ";\nletter-spacing: 0.4px;\ntext-transform: capitalize;\nfont-weight: 500;\n}\n.TextOfCheckbox {\nfont-family: 'Alef', sans-serif;\n}\n.checkbox-wrapper-4 .cbx:hover span:first-child {\nborder-color: " +
              defcolor +
              ";\nfont-style: normal;\nfont-weight: 400;\nfont-size: 21px;\ncolor: #FFFFFF;\n}\n.inp-cbx {\ndisplay:none;\nopactiy: 0;\n}\n.checkbox-wrapper-4 .inp-cbx:checked + .cbx span:first-child svg {\nstroke-dashoffset: 0;\n}\n.checkbox-wrapper-4 .inp-cbx:checked + .cbx span:first-child {\nbackground: #0077ff;\nborder-color: #0077ff;\n}\n.checkbox-wrapper-4 .inp-cbx:checked + .cbx:hover span:first-child {\nborder-color: #0055ff;\n}\n.checkbox-wrapper-4 .inline-svg {\ndisplay: none;\n}\n";
            $("head").append("<style>" + varLipsNails + "</style>");
            var varDawnNeeded = $(varCloselySpent);
            var varDiscussTree = 30;
            varDawnNeeded.height(varDiscussTree);
            if (argBrokePresident == true) {
              var varAcceptTape = $("<input>")
                .attr({
                  type: "color",
                  value: argBestVoyage,
                })
                .css({
                  height: "20.5px",
                  width: "30px",
                  position: "absolute",
                  top: "50%",
                  left: "240px",
                  transform: "translateY(-50%)",
                  border: "2.3px solid rgba(23, 34, 54)",
                  "border-radius": "15px",
                  "-webkit-border-radius": "3px",
                  "-moz-border-radius": "3px",
                  "margin-top": "-2px",
                });
              varAcceptTape.on("input", function () {
                argCityPull($(this).val());
                console.log($(this).val());
              });
              varAcceptTape.appendTo(varCloselySpent);
            }
            if (argActMostly == true) {
              var varBrainToy = $("<div>")
                .attr({
                  class: "Keybindss",
                  id: "Keybindss",
                })
                .css({
                  background: "rgb(" + funcHappenedReport(defcolor, 0.8) + ")",
                  border: "1.3px solid rgba(255, 255, 255, 0.1)",
                  "border-radius": "6px",
                  width: "35px",
                  height: "20.5px",
                  position: "absolute",
                  top: "50%",
                  display: "flex",
                  alignItems: "center",
                  transform: "translateY(-50%)",
                  justifyContent: "center",
                  color: "#d4d4d4",
                  fontSize: "10px",
                  "font-family": "'Alef', sans-serif",
                  "font-style": "normal",
                  userSelect: "none",
                  "margin-top": "-2px",
                })
                .text("...");
              if (argBrokePresident == true) {
                var varGrabbedPiano = {};
                varGrabbedPiano.left = "202px";
                varBrainToy.css(varGrabbedPiano);
              }
              if (argBrokePresident == false) {
                var varCageOrdinary = {};
                varCageOrdinary.left = "235px";
                varBrainToy.css(varCageOrdinary);
              }
              function funcHappenedReport(
                argFunctionStory,
                argIncludingObserve
              ) {
                const varAppliedSurface = parseInt(
                  argFunctionStory.slice(1),
                  16
                );
                const varBrownSit = (varAppliedSurface >> 16) & 255;
                const varExploreUnderstanding = (varAppliedSurface >> 8) & 255;
                const varFunnyUsual = varAppliedSurface & 255;
                const varFavoriteWhenever = Math.round(
                  varBrownSit * (1 - argIncludingObserve)
                );
                const varBabyOrbit = Math.round(
                  varExploreUnderstanding * (1 - argIncludingObserve)
                );
                const varBeltProgram = Math.round(
                  varFunnyUsual * (1 - argIncludingObserve)
                );
                return (
                  varFavoriteWhenever +
                  ", " +
                  varBabyOrbit +
                  ", " +
                  varBeltProgram
                );
              }
              varBrainToy.on("click", function () {
                varBrainToy
                  .css({
                    backgroundColor:
                      "rgb(" + funcHappenedReport(defcolor, 0.5) + ")",
                    color: "#0D1018",
                  })
                  .text("");
              });
              if (argCommandWooden == null) {
                varBrainToy.text("...");
              } else {
                varBrainToy.text(argCommandWooden);
              }
              varGiveWorried.prop("checked", argCellRate);
              $(document).on("keydown", function (argCreatureNeedle) {
                if (
                  varBrainToy.css("background-color") ===
                  "rgb(" + funcHappenedReport(defcolor, 0.5) + ")"
                ) {
                  argCommandWooden = argCreatureNeedle.key.toUpperCase();
                  varBrainToy.text(argCommandWooden);
                  varBrainToy.css({
                    backgroundColor:
                      "rgb(" + funcHappenedReport(defcolor, 0.8) + ")",
                    color: "#FFFFFF",
                  });
                  varGiveWorried.prop("checked", false);
                }
              });
              $(document).on("keyup", function (argDonePan) {
                if (argDonePan.key.toUpperCase() === argCommandWooden) {
                  varGiveWorried.prop(
                    "checked",
                    !varGiveWorried.prop("checked")
                  );
                  argCustomsPure = varGiveWorried.prop("checked");
                  argIndependentSeveral(argCityPull, argCustomsPure);
                }
              });
              varBrainToy.appendTo(varCloselySpent);
            }
            varGiveWorried.on("change", function () {
              argCustomsPure = $(this).prop("checked");
              argIndependentSeveral(argCityPull, argCustomsPure);
            });
          }
          function ClassFlewMyself(
            argAllowSmoke,
            argJourneySquare,
            argBecomingTrouble
          ) {
            var varColdMiddle = argAllowSmoke.find(".new-element-wrapper:last");
            console.log(varColdMiddle);
            var varFeelWho = 35;
            if (varColdMiddle.length) {
              varFeelWho =
                varColdMiddle.offset().top + varColdMiddle.height() + 3;
            }
            let varBaseProgram = $("<input>", {
              class: "new-element-wrapper inputbox",
              id: "inputbox",
              type: "text",
              name: "Input",
            })
              .appendTo(argAllowSmoke)
              .attr({
                type: "text",
                placeholder: argJourneySquare,
              })
              .css({
                position: "relative",
                top: varFeelWho,
                left: "2.5%",
                margin: "10px",
                padding: "5px",
                width: "84%",
                fontFamily: "'Alef', sans-serif",
                border: "1.3px solid rgba(255, 255, 255, 0.1)",
                "border-radius": "5px",
                "background-color": "#111621",
                outline: "none",
                color: "#0066FF",
              });
            varBaseProgram.on("input", function () {
              let varHoldTwenty = $(this).val();
              argBecomingTrouble(varHoldTwenty);
            });
            var varCarefulRed = $(varBaseProgram);
            var varHappySettlers = 19;
            varCarefulRed.height(varHappySettlers);
          }
          function ClassClawsReplied(
            argHeadingPort,
            argAngrySong,
            argDevelopmentPencil,
            argAsleepWorried
          ) {
            var varHandleRespect = argHeadingPort.find(
              ".new-element-wrapper:last"
            );
            console.log(varHandleRespect);
            var varLaidSeen = 35;
            if (varHandleRespect.length) {
              varLaidSeen =
                varHandleRespect.offset().top + varHandleRespect.height() - 8;
            }
            const varConditionUnderline = $("<div>", {
              class: "new-element-wrapper",
              css: {
                position: "relative",
                top: varLaidSeen,
                left: "6%",
                width: "88%",
              },
            });
            const varFinishSmall = $("<p>", {
              text: argDevelopmentPencil,
              css: {
                fontFamily: "'Alef', sans-serif",
                fontSize: "12px",
                color: "#ffffff",
                up: "10px",
              },
            });
            varFinishSmall.appendTo(varConditionUnderline);
            const varExplanationMove = $("<select>", {
              class: "dropdown",
              id: "dropdown",
              css: {
                boxSizing: "border-box",
                position: "relative",
                width: "100%",
                height: "27px",
                bottom: "12px",
                "background-color": "#111621",
                border: "1.3px solid rgba(255, 255, 255, 0.1)",
                "border-radius": "5px",
                fontFamily: "'Alef', sans-serif",
                fontStyle: "bold",
                color: "#0066FF",
                fontSize: "15px",
              },
              change: function () {
                console.log("Selected option:", $(this).val());
                argAsleepWorried($(this).val());
              },
            });
            $.each(argAngrySong, function (argBoundStock, mText) {
              var varAccountPeace = {};
              varAccountPeace.text = mText;
              varExplanationMove.append($("<option>", varAccountPeace));
            });
            varExplanationMove.appendTo(varConditionUnderline);
            varConditionUnderline.appendTo(argHeadingPort);
            var varExactlyShore = $(varConditionUnderline);
            var varBecameSport = 33;
            varExactlyShore.height(varBecameSport);
          }
          function funcLogScore(
            argAheadOnce,
            argBalloonNervous,
            argCarriedStraight
          ) {
            var varEmptyRocky = argAheadOnce.find(".new-element-wrapper:last");
            console.log(varEmptyRocky);
            var varHeavyPain = 35;
            console.log(varEmptyRocky.length);
            if (varEmptyRocky.length) {
              varHeavyPain =
                varEmptyRocky.offset().top + varEmptyRocky.height() + 8;
              console.log(varHeavyPain);
            }
            var varLetterPie = $("<button>", {
              class: "new-element-wrapper button",
              id: "button",
              text: argBalloonNervous,
              click: function () {
                var varMachineTorn = varLetterPie.css("background-color");
                var varAnimalPerson = {};
                varAnimalPerson["background-color"] = "#fff";
                varLetterPie.animate(varAnimalPerson, 25, function () {
                  var varCollectQuarter = {};
                  varCollectQuarter["background-color"] = varMachineTorn;
                  varLetterPie.animate(varCollectQuarter, 25);
                });
                argCarriedStraight();
              },
            }).appendTo(argAheadOnce);
            varLetterPie
              .css({
                position: "relative",
                top: varHeavyPain + "px",
                left: "5.35%",
                width: "88.5%",
                height: "24.5px",
                fontFamily: "'Alef', sans-serif",
                border: "1.3px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "5px",
                backgroundColor: "#111621",
                outline: "none",
                color: "#0066FF",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                lineHeight: "50%",
              })
              .button();
            console.log(varLetterPie.css("top"));
          }
          let varLeastRise;
          function funcDriveThousand(argHairTail) {
            varBearReady = argHairTail;
            console.log(varBearReady);
          }
          let varExcitingWhite = {};
          let varConcernedSitting;
          var varForgotPort = 0;
          function funcElectricityRich(argFeelPicture) {
            varForgotPort = argFeelPicture;
            console.log(varForgotPort);
          }
          function funcGrowStatement() {
            const varArriveMathematics = document.evaluate(
              '//*[not(self::script) and not(self::style)]/text()[contains(., "' +
                localStorage.getItem("krunker_username") +
                '")]',
              document,
              null,
              XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
              null
            );
            for (
              let varCircusSmell = 0;
              varCircusSmell < varArriveMathematics.snapshotLength;
              varCircusSmell++
            ) {
              const p_parentNode =
                varArriveMathematics.snapshotItem(varCircusSmell).parentNode;
              if (!varExcitingWhite[p_parentNode]) {
                varExcitingWhite[p_parentNode] = p_parentNode.textContent;
              }
              const mTextContent = p_parentNode.textContent.replace(
                new RegExp(localStorage.getItem("krunker_username"), "gi"),
                varBearReady
              );
              if (mTextContent !== p_parentNode.textContent) {
                p_parentNode.textContent = mTextContent;
              }
            }
          }
          function funcAnythingVoice() {
            console.log("NameChanger enabled");
            window.notificate("NameChanger enabled", selectedcorner, 1000);
            funcGrowStatement();
            varConcernedSitting = new MutationObserver(funcGrowStatement);
            var varBearUsually = {};
            varBearUsually.childList = true;
            varBearUsually.subtree = true;
            varConcernedSitting.observe(
              document.documentElement,
              varBearUsually
            );
          }
          function funcAnybodyNature() {
            console.log("NameChanger disabled");
            window.notificate("NameChanger disabled", selectedcorner, 1000);
            varConcernedSitting.disconnect();
            for (const varEducationStomach in varExcitingWhite) {
              varEducationStomach.textContent =
                varExcitingWhite[varEducationStomach];
            }
            varExcitingWhite = {};
          }
          function funcEqualToward(argDryRose, argBlowPosition) {
            if (argBlowPosition == true) {
              funcAnythingVoice();
            } else {
              funcAnybodyNature();
            }
          }
          function funcCommonOldest(argFastOil, argFifteenMark) {
            if (argFifteenMark == true) {
              console.log("ClickGUI is now", argFifteenMark);
              varHadSilent.fadeIn(90);
              window.notificate("ClickGUI enabled", selectedcorner, 1000);
            }
            if (argFifteenMark == false) {
              varHadSilent.fadeOut(90);
              console.log("ClickGUI is now", argFifteenMark);
              window.notificate("ClickGUI disabled", selectedcorner, 1000);
            }
          }
          function funcCentManufacturing(argBrainPart, argBusSad) {
            if (argBusSad == true) {
              console.log("Watermark is now", argBusSad);
              varAsSuccess.fadeIn(90);
              window.notificate("Watermark enabled", selectedcorner, 1000);
            }
            if (argBusSad == false) {
              varAsSuccess.fadeOut(90);
              console.log("Watermark is now", argBusSad);
              window.notificate("Watermark disabled", selectedcorner, 1000);
            }
          }
          function funcClimbPass(argHappenWriter, argBottomSolve) {
            if (argBottomSolve == true) {
              interface_sounds = argBottomSolve;
              console.log("Interface sounds is now", argBottomSolve);
              varAsSuccess.fadeIn(90);
              window.notificate(
                "Interface sounds enabled",
                selectedcorner,
                1000
              );
            }
            if (argBottomSolve == false) {
              interface_sounds = argBottomSolve;
              varAsSuccess.fadeOut(90);
              console.log("Interface sounds is now", argBottomSolve);
              window.notificate(
                "Interface sounds disabled",
                selectedcorner,
                1000
              );
            }
          }
          function funcFingerPoliceman(argFoundRecent) {
            selectedcorner = argFoundRecent;
          }
          let varFilmWhy = null;
          let varAnywhereWhom = "INSERT";
          let varEnjoyVoyage = null;
          function noOp(argChosenMethod) {}
          function funcImmediatelyShown(argAttemptWithin) {
            console.log(argAttemptWithin);
            defcolor = argAttemptWithin;
            var varFormerMission =
              "\n    .checkbox-wrapper-4 * {\n      box-sizing: border-box;\n    }\n    .checkbox-wrapper-4 .cbx {\n      -webkit-user-select: none;\n      user-select: none;\n      cursor: pointer;\n      padding: 6px 8px;\n      border-radius: 6px;\n      overflow: hidden;\n      transition: all 0.2s ease;\n      display: inline-block;\n    }\n    .checkbox-wrapper-4 .cbx:not(:last-child) {\n      margin-right: 6px;\n    }\n    .checkbox-wrapper-4 .cbx:hover {\n      background: rgba(" +
              funcHoweverMovement(defcolor, 0.1) +
              ", 0.2);\n    }\n    .checkbox-wrapper-4 .cbx span {\n      float: left;\n      vertical-align: middle;\n      transform: translate3d(0, 0, 0);\n    }\n    .checkbox-wrapper-4 .cbx span:first-child {\n      position: relative;\n      width: 18px;\n      height: 18px;\n      border-radius: 4px;\n      transform: scale(1);\n      border: 1px solid " +
              defcolor +
              ";\n      transition: all 0.2s ease;\n      box-shadow: 0 1px 1px rgba(0,16,75,0.05);\n    }\n    .checkbox-wrapper-4 .cbx span:first-child svg {\n      position: absolute;\n      top: 3px;\n      left: 2px;\n      fill: none;\n      stroke: #fff;\n      stroke-width: 2;\n      stroke-linecap: round;\n      stroke-linejoin: round;\n      stroke-dasharray: 16px;\n      stroke-dashoffset: 16px;\n      transition: all 0.3s ease;\n      transition-delayed: 0.1s;\n}\n.checkbox-wrapper-4 .cbx span:last-child {\npadding-left: 8px;\npadding-right: 8px;\nfont-size: 14px;\ncolor: " +
              defcolor +
              ";\nletter-spacing: 0.4px;\ntext-transform: capitalize;\nfont-weight: 500;\n}\n.TextOfCheckbox {\nfont-family: 'Alef', sans-serif;\n}\n.checkbox-wrapper-4 .cbx:hover span:first-child {\nborder-color: " +
              defcolor +
              ";\nfont-style: normal;\nfont-weight: 400;\nfont-size: 21px;\ncolor: #FFFFFF;\n}\n.inp-cbx {\ndisplay:none;\nopactiy: 0;\n}\n.checkbox-wrapper-4 .inp-cbx:checked + .cbx span:first-child svg {\nstroke-dashoffset: 0;\n}\n.checkbox-wrapper-4 .inp-cbx:checked + .cbx span:first-child {\nbackground: " +
              defcolor +
              ";\nborder-color: " +
              defcolor +
              ";\n}\n.checkbox-wrapper-4 .inp-cbx:checked + .cbx:hover span:first-child {\nborder-color: " +
              defcolor +
              ";\n}\n.checkbox-wrapper-4 .inline-svg {\ndisplay: none;\n}\n";
            $("head").append("<style>" + varFormerMission + "</style>");
            const mBackground =
              "linear-gradient(to bottom, rgba(" +
              funcHoweverMovement(defcolor, 0.7) +
              ", 0.3), rgba(" +
              funcHoweverMovement(defcolor, 0.9) +
              ", 0.8))";
            const varHardlyPick =
              "linear-gradient(to right, rgba(" +
              funcHoweverMovement(defcolor, 0.1) +
              ", 0.5), rgba(" +
              funcHoweverMovement(defcolor, 0.4) +
              ", 0.8))";
            var varListenSilly = {};
            varListenSilly.background = mBackground;
            $("#rectangle34").css(varListenSilly);
            const varFeatureSunlight =
              document.querySelectorAll("#TitleUnderline");
            varFeatureSunlight.forEach((argCookWent) => {
              argCookWent.style.background =
                "linear-gradient(270deg, rgba(" +
                funcConsiderWhy(defcolor) +
                ", 0) 0%, " +
                defcolor +
                " 48.67%, rgba(" +
                funcConsiderWhy(defcolor) +
                ", 0) 100%)";
            });
            function funcConsiderWhy(argListenYes) {
              const varAgreeThou = parseInt(argListenYes.slice(1), 16);
              const varAverageSecond = (varAgreeThou >> 16) & 255;
              const varGentlySwing = (varAgreeThou >> 8) & 255;
              const varExaminePleasant = varAgreeThou & 255;
              return (
                varAverageSecond +
                ", " +
                varGentlySwing +
                ", " +
                varExaminePleasant
              );
            }
            const varElectricProtection = document.querySelectorAll(".Section");
            varElectricProtection.forEach((argComingRush) => {
              argComingRush.style.border =
                "1.3px solid rgba(" +
                funcHoweverMovement(defcolor, 0.5) +
                ", 0.1)";
              argComingRush.style.background =
                "rgba(" + funcHoweverMovement(defcolor, 0.85) + ", 1)";
            });
            const varFellowResult = document.querySelectorAll(".Keybindss");
            varFellowResult.forEach((argFlagNegative) => {
              argFlagNegative.style.background =
                "rgba(" + funcHoweverMovement(defcolor, 0.8) + ", 1)";
            });
            const varAwayStepped = document.querySelectorAll(".inputbox");
            varAwayStepped.forEach((argDangerTwice) => {
              argDangerTwice.style.background =
                "rgba(" + funcHoweverMovement(defcolor, 0.8) + ", 1)";
              argDangerTwice.style.color = defcolor;
            });
            const varEquatorSum = document.querySelectorAll(".button");
            varEquatorSum.forEach((argLineWealth) => {
              argLineWealth.style.background =
                "rgba(" + funcHoweverMovement(defcolor, 0.8) + ", 1)";
              argLineWealth.style.color = defcolor;
            });
            const varHerdRoute = document.querySelectorAll(".dropdown");
            varHerdRoute.forEach((argDonkeyTrip) => {
              argDonkeyTrip.style.background =
                "rgba(" + funcHoweverMovement(defcolor, 0.8) + ", 1)";
              argDonkeyTrip.style.color = defcolor;
            });
            function funcHoweverMovement(
              argElectricityTribe,
              argFinalOperation
            ) {
              const varForthPair = parseInt(argElectricityTribe.slice(1), 16);
              const varBrickMuscle = (varForthPair >> 16) & 255;
              const varMachineryPlenty = (varForthPair >> 8) & 255;
              const varEventuallySlide = varForthPair & 255;
              const varGameSaid = Math.round(
                varBrickMuscle * (1 - argFinalOperation)
              );
              const varAmountTelephone = Math.round(
                varMachineryPlenty * (1 - argFinalOperation)
              );
              const varAttackReplied = Math.round(
                varEventuallySlide * (1 - argFinalOperation)
              );
              return (
                varGameSaid +
                ", " +
                varAmountTelephone +
                ", " +
                varAttackReplied
              );
            }
            varAsSuccess.css("background", varHardlyPick);
            const varBusRhyme = document.querySelectorAll("#Title");
            varBusRhyme.forEach((argFogNot) => {
              argFogNot.style.textShadow =
                "0px 0px 9px rgba(" +
                parseInt(defcolor.slice(1, 3), 16) +
                ", " +
                parseInt(defcolor.slice(3, 5), 16) +
                ", " +
                parseInt(defcolor.slice(5, 7), 16) +
                ", 0.5)";
              argFogNot.style.color = defcolor;
            });
          }
          function funcFifthTaken() {
            console.log("imgay");
          }
          let varBearReady = "Sidney";
          const varFootTool = ["top-left", "top-right"];
          ClassDoServe(
            varButterSang,
            "ClickGUI",
            true,
            funcImmediatelyShown,
            "#0066FF",
            true,
            true,
            funcCommonOldest,
            varFilmWhy,
            varAnywhereWhom
          );
          ClassDoServe(
            varButterSang,
            "Watermark",
            false,
            noOp,
            "#FFFFFF",
            true,
            true,
            funcCentManufacturing,
            varFilmWhy,
            varEnjoyVoyage
          );
          ClassDoServe(
            varFinishSudden,
            "Namechanger",
            false,
            noOp,
            "#FFFFFF",
            false,
            false,
            funcEqualToward,
            varFilmWhy,
            varEnjoyVoyage
          );
          ClassDoServe(
            varButterSang,
            "Interface sounds",
            false,
            noOp,
            "#FFFFFF",
            true,
            true,
            funcClimbPass,
            varFilmWhy,
            varEnjoyVoyage
          );
          ClassFlewMyself(
            varFinishSudden,
            "Username for namechanger",
            funcDriveThousand
          );
          ClassClawsReplied(
            varButterSang,
            varFootTool,
            "Corner of notifications",
            funcFingerPoliceman
          );
          funcLogScore(varLeavingWord, "Unload cheat [BETA]", funcFifthTaken);
          function funcGreaterPlan(argBetterSweet, argAffectResearch) {
            const varDistanceNative = parseInt(argBetterSweet.slice(1), 16);
            const varConsistStrange = (varDistanceNative >> 16) & 255;
            const varAdditionQuickly = (varDistanceNative >> 8) & 255;
            const varGarageSelect = varDistanceNative & 255;
            const varFarmSitting = Math.round(
              varConsistStrange * (1 - argAffectResearch)
            );
            const varAgreeMaybe = Math.round(
              varAdditionQuickly * (1 - argAffectResearch)
            );
            const varCityTwice = Math.round(
              varGarageSelect * (1 - argAffectResearch)
            );
            return varFarmSitting + ", " + varAgreeMaybe + ", " + varCityTwice;
          }
          var varExchangeTube = $("<div>", {
            class: "tab-container",
            css: {
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: "17%",
            },
          }).appendTo(varLoadRose);
          var varIsSlope = {};
          varIsSlope.id = "legit";
          varIsSlope.iconUrl =
            "https://media.discordapp.net/attachments/1014958824161026188/1093521759401152542/LEGIT.png";
          var varCoachTop = {};
          varCoachTop.id = "rage";
          varCoachTop.iconUrl =
            "https://media.discordapp.net/attachments/1014958824161026188/1093521761141805146/rage.png";
          var varFavoriteWeather = {};
          varFavoriteWeather.id = "visuals";
          varFavoriteWeather.iconUrl =
            "https://media.discordapp.net/attachments/1014958824161026188/1093521760793661600/Visuals.png";
          var varFightingNice = {};
          varFightingNice.id = "other";
          varFightingNice.iconUrl =
            "https://media.discordapp.net/attachments/1014958824161026188/1093521760575574046/Other.png";
          var varDrySpell = {};
          varDrySpell.id = "hud";
          varDrySpell.iconUrl =
            "https://media.discordapp.net/attachments/1014958824161026188/1093521760223236258/Hud.png";
          var varLineOrganization = {};
          varLineOrganization.id = "settings";
          varLineOrganization.iconUrl =
            "https://media.discordapp.net/attachments/1014958824161026188/1093521759858348112/Settings.png";
          var varColonyYellow = {};
          varColonyYellow.id = "scripts";
          varColonyYellow.iconUrl =
            "https://cdn.discordapp.com/attachments/1014958824161026188/1103691322252079295/Scripts.png";
          var varBrokeMore = [
            varIsSlope,
            varCoachTop,
            varFavoriteWeather,
            varFightingNice,
            varDrySpell,
            varLineOrganization,
            varColonyYellow,
          ];
          var p_id = varBrokeMore[0].id;
          $.each(varBrokeMore, function (argBravePotatoes, argEachStatement) {
            var varAtRise = $("<div>", {
              class: "tab",
              id: argEachStatement.id + "-tab",
              css: {
                width: "215px",
                height: "55px",
                display: "flex",
                "align-items": "center",
                "justify-content": "left",
                "font-family": "'Alef', sans-serif",
                "font-style": "normal",
                "font-weight": "500",
                "font-size": "24px",
                "line-height": "29px",
                "letter-spacing": "0.05em",
                color: "#0033cc",
                "text-shadow": "0px 0px 9px rgba(0,83,255,0.0)",
                background:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0.01) 0%, rgba(0, 0, 0, 0.002) 100%)",
              },
            }).appendTo(varExchangeTube);
            var varConversationWent = $("<img>", {
              src: argEachStatement.iconUrl,
              class: "icontab",
              css: {
                width: "auto",
                height: "auto",
                opacity: "0",
                "margin-left": "12px",
              },
            }).appendTo(varAtRise);
            var varDancePowder = $("<span>", {
              class: "texttab",
              text: argEachStatement.id,
              css: {
                left: "55px",
                position: "absolute",
                "align-items": "left",
                "justify-content": "left",
                "font-family": "'Alef', sans-serif",
                "font-style": "normal",
                "font-weight": "500",
                "font-size": "24px",
                "line-height": "29px",
                "letter-spacing": "0.05em",
                color: "#0033cc",
                "text-shadow": "0px 0px 9px rgba(0,83,255,0.0)",
                "text-transform": "capitalize",
              },
            }).appendTo(varAtRise);
            var varKnowledgeNever = null;
            varAtRise.click(function () {
              varKnowledgeNever = $(this).attr("id");
              if (varKnowledgeNever == "other-tab") {
                varFinishSudden.fadeIn(200);
              }
              if (varKnowledgeNever !== "other-tab") {
                varFinishSudden.fadeOut(200);
              }
              if (varKnowledgeNever == "hud-tab") {
                varButterSang.fadeIn(200);
              }
              if (varKnowledgeNever !== "hud-tab") {
                varButterSang.fadeOut(200);
              }
              if (varKnowledgeNever !== "settings-tab") {
                varEveryScared.fadeOut(200);
                varLeavingWord.fadeOut(200);
              }
              if (varKnowledgeNever == "settings-tab") {
                varEveryScared.fadeIn(200);
                varLeavingWord.fadeIn(200);
              }
            });
            var varLastMeat = {};
            varLastMeat.background =
              "linear-gradient(90deg, rgba(88, 113, 176, 0.3) 0%, rgba(20, 57, 112, 0.06) 100%)";
            varLastMeat.color = "#0066FF";
            varLastMeat.transform = "scale(1)";
            varLastMeat["text-shadow"] = "0px 0px 9px rgba(0,83,255,0.82)";
            var v_varLastMeat = varLastMeat;
            var varChainNeighborhood = {};
            varChainNeighborhood.background =
              "linear-gradient(90deg, rgba(0, 0, 0, 0.01) 0%, rgba(0, 0, 0, 0.002) 0%)";
            varChainNeighborhood.color = "#585858";
            varChainNeighborhood.transform = "scale(1)";
            varChainNeighborhood["text-shadow"] =
              "0px 0px 9px rgba(0,83,255,0)";
            var v_varChainNeighborhood = varChainNeighborhood;
            var varActivityThan = {
              "legit-tab": function () {
                console.log("Executing function for legit tab");
              },
              "rage-tab": function () {
                console.log("Executing function for rage tab");
              },
              "visuals-tab": function () {
                console.log("Executing function for visuals tab");
              },
              "other-tab": function () {
                console.log("Executing function for other tab");
              },
              "hud-tab": function () {
                console.log("Executing function for hud tab");
              },
              "settings-tab": function () {
                console.log("Executing function for settings tab");
              },
              "scripts-tab": function () {
                console.log("Executing function for scripts tab");
              },
            };
            varAtRise.click(function () {
              console.log(defcolor);
              var varDutySmile = funcFinestSeems(defcolor, 20);
              console.log(varDutySmile);
              var varBreathShout = funcGreaterPlan(defcolor, 15);
              var varClimbPhysical = funcGreaterPlan(defcolor, 50);
              $(".tab").css({
                background:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0.01) 0%, rgba(0, 0, 0, 0.002) 100%)",
                color: varDutySmile,
                "text-shadow": "0px 0px 6px rgba(0,94,206,0.0)",
                transition: "all 0.3s ease-in-out",
              });
              function funcFinestSeems(argBlindThan, _0x1881a) {
                var varAtTales = parseInt(argBlindThan.slice(1), 16);
                var varBeganTriangle = Math.round(2.55 * _0x1881a);
                var varAlmostSea = (varAtTales >> 16) - varBeganTriangle;
                var varDullOutline =
                  ((varAtTales >> 8) & 255) - varBeganTriangle;
                var varHairNeeds = (varAtTales & 255) - varBeganTriangle;
                var varLiftNervous = Math.max(0, varAlmostSea);
                var varDuringPipe = Math.max(0, varDullOutline);
                var varCookWind = Math.max(0, varHairNeeds);
                return (
                  "#" +
                  (
                    16777216 +
                    varLiftNervous * 65536 +
                    varDuringPipe * 256 +
                    varCookWind
                  )
                    .toString(16)
                    .slice(1)
                );
              }
              $(this)
                .css({
                  background:
                    "linear-gradient(90deg, rgba(${darkenedColor15},0.3) 0%, rgba(${darkenedColor50}, 0.06) 100%)",
                  transition: "all 0.3s ease-in-out",
                })
                .addClass("selected-tab");
              $(".texttab").css({
                color: varDutySmile,
                "text-shadow": "0px 0px 6px rgba(0,94,206,0.0)",
                transition: "all 0.3s ease-in-out",
              });
              $(this)
                .find(".texttab")
                .css({
                  color: defcolor,
                  "text-shadow": "0px 0px 6px " + defcolor,
                  transition: "all 0.3s ease-in-out",
                });
              $(".icontab").css({
                filter: "drop-shadow(0px 0px 15px rgba(0, 90, 255, 0))",
                opacity: "0",
                transition: "all 0.3s ease-in-out",
              });
              $(this)
                .find(".icontab")
                .css({
                  filter: "drop-shadow(0px 0px 15px " + defcolor + ")",
                  opacity: "1",
                  transition: "all 0.3s ease-in-out",
                });
              $(".tab:not(.selected-tab)").css("pointer-events", "none");
              varActivityThan[$(this).attr("id")]();
              setTimeout(function () {
                $(".tab:not(.selected-tab)").css("pointer-events", "auto");
                $(".selected-tab").removeClass("selected-tab");
              }, 10);
            });
          });
          varLoadRose.append(varDutyTheory);
          $(varHadSilent).append(varLoadRose);
          $("body").append(varHadSilent);
          $(varHadSilent).hide().fadeIn(450);
          $(function () {
            var varBentNest;
            var varDinnerWith;
            var varLipsTea;
            var varImportantSimply;
            varLoadRose.mousedown(function (argDiameterWith) {
              varBentNest = parseInt(varHadSilent.css("left"));
              varDinnerWith = parseInt(varHadSilent.css("top"));
              varLipsTea = argDiameterWith.pageX;
              varImportantSimply = argDiameterWith.pageY;
              $(document).mousemove(function (argEventPeace) {
                var varGlobeSeason = argEventPeace.pageX - varLipsTea;
                var varFellowRubbed = argEventPeace.pageY - varImportantSimply;
                varHadSilent.css("left", varBentNest + varGlobeSeason);
                varHadSilent.css("top", varDinnerWith + varFellowRubbed);
              });
              $(document).mouseup(function () {
                $(document).off("mousemove");
              });
              return false;
            });
          });
        }
      }
      if (varHeOrange == "KrunkerSocial changer") {
        $(varFatherSaw).fadeOut(1500);
        window.notificate("Soon...", selectedcorner, 2500);
      }
      if (varHeOrange == "FREE TEST") {
        $(varFatherSaw).fadeOut(1500);
        window.notificate("Soon...", selectedcorner, 2500);
      }
    });
    var varChapterSix = document.createElement("select");
    varChapterSix.style.boxSizing = "border-box";
    varChapterSix.style.position = "absolute";
    varChapterSix.style.width = "185px";
    varChapterSix.style.height = "65px";
    varChapterSix.style.background = "#1A1A1A";
    varChapterSix.style.border = "0.5px solid rgba(255, 255, 255, 0.1)";
    varChapterSix.style.borderRadius = "10px";
    varChapterSix.style.left = "30%";
    varChapterSix.style.top = "5.5%";
    varChapterSix.style.fontFamily = "'Alef', sans-serif";
    varChapterSix.style.fontStyle = "bold";
    varChapterSix.style.color = "#0066FF";
    varChapterSix.style.fontSize = "23px";
    varChapterSix.innerHTML =
      "<option>None</option><option>Krunker cheat</option><option>KrunkerSocial changer</option><option>FREE TEST</option>";
    varFellMaterial.appendChild(varChapterSix);
    let varHeOrange = "";
    var varAvailableSecret = document.createElement("img");
    varAvailableSecret.src =
      "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png";
    varAvailableSecret.style.position = "absolute";
    varAvailableSecret.style.width = "64px";
    varAvailableSecret.style.height = "48px";
    varAvailableSecret.style.borderRadius = "0px";
    varAvailableSecret.style.right = "3.5%";
    varAvailableSecret.style.top = "15.5%";
    varFellMaterial.appendChild(varAvailableSecret);
    varAvailableSecret.addEventListener("click", function () {
      window.location.href = "https://discord.gg/ptw";
    });
    varChapterSix.addEventListener("change", function () {
      varHeOrange = varChapterSix.value;
    });
    $(function () {
      $(varFatherSaw).draggable({
        start: function (argBraveMost, argChurchWhole) {
          var varBeingSouth = {};
          varBeingSouth.opacity = 0.5;
          $(this).stop().animate(varBeingSouth, 500);
        },
        stop: function (argAnnouncedPaid, argDiscussShoe) {
          var varCowTrouble = {};
          varCowTrouble.opacity = 1;
          $(this).stop().animate(varCowTrouble, 500);
        },
      });
    });
  }
  function fetchData(argAblePolitical, argHappilyPlate) {
    const varExcellentModel =
      "https://heavy-comfortable-trollius.glitch.me/data";
    const varAteMostly =
      varExcellentModel +
      "?login=" +
      argAblePolitical +
      "&password=" +
      argHappilyPlate;
    fetch(varAteMostly)
      .then((argCharacteristicMusic) => argCharacteristicMusic.json())
      .then((argLeaderSo) => {
        if (argLeaderSo.error) {
          console.log(argLeaderSo.error);
          window.notificate(argLeaderSo.error, "top-left", 2500);
        } else {
          console.log("Matching record found:");
          for (const varEggSit in argLeaderSo) {
            console.log(varEggSit + ": " + argLeaderSo[varEggSit]);
            fieldValues[varEggSit] = argLeaderSo[varEggSit];
          }
          console.log("Field Values:");
          for (const varBiggestPer in fieldValues) {
            console.log(varBiggestPer + ": " + fieldValues[varBiggestPer]);
            if (varBiggestPer === "UID") {
              PROFILE_UID = fieldValues[varBiggestPer];
              console.log(PROFILE_UID);
            }
            if (varBiggestPer === "avatar") {
              PROFILE_avatar = fieldValues[varBiggestPer];
              console.log(PROFILE_avatar);
            }
            if (varBiggestPer === "AlphaAccess") {
              PROFILE_AlphaAccess = fieldValues[varBiggestPer];
              console.log(PROFILE_AlphaAccess);
            }
            if (varBiggestPer === "PremiumAccess") {
              PROFILE_PremiumAccess = fieldValues[varBiggestPer];
              console.log(PROFILE_PremiumAccess);
            }
            if (varBiggestPer === "registertime") {
              PROFILE_registertime = fieldValues[varBiggestPer];
              console.log(PROFILE_registertime);
            }
            if (varBiggestPer === "banned") {
              PROFILE_banned = fieldValues[varBiggestPer];
              console.log(PROFILE_banned);
            }
            if (varBiggestPer === "HWID") {
              PROFILE_HWID = fieldValues[varBiggestPer];
              console.log(PROFILE_HWID);
            }
            if (varBiggestPer === "MultiplyHWID") {
              PROFILE_MultiplyHWID = fieldValues[varBiggestPer];
              console.log(PROFILE_MultiplyHWID);
            }
          }
          if (PROFILE_banned !== true && PROFILE_HWID == WHID) {
            load(argAblePolitical, argHappilyPlate);
          }
          if (PROFILE_banned !== true && PROFILE_MultiplyHWID == true) {
            load(argAblePolitical, argHappilyPlate);
          }
          if (PROFILE_HWID !== WHID && PROFILE_MultiplyHWID !== true) {
            window.notificate("Incorrect HWID", "top-left", 2500);
          }
          if (PROFILE_banned == true) {
            window.notificate("User banned", "top-left", 2566600);
          }
        }
      })
      .catch((argLayMouth) => {
        console.error("Error:", argLayMouth);
      });
  }
  const CREDENTIALS_FILE_URL =
    "https://cdn.discordapp.com/attachments/1014958824161026188/1092384762452267058/logins.txt";
  const TITLE = "ARMATURA";
  const LOGIN_WINDOW_BACKGROUND_IMAGE_URL =
    "https://cdn.discordapp.com/attachments/1014958824161026188/1092372838972923914/Group_47.png";
  let credentialsFile =
    "https://raw.githubusercontent.com/petiuka/omg-h4p/main/testt";
  var varAdventureYes = {};
  varAdventureYes.id = "login-window";
  var varInfluenceMore = {};
  varInfluenceMore["background-image"] =
    "url(" + LOGIN_WINDOW_BACKGROUND_IMAGE_URL + ")";
  varInfluenceMore["background-position"] = "center";
  varInfluenceMore["background-size"] = "cover";
  varInfluenceMore.width = "400px";
  varInfluenceMore.height = "500px";
  varInfluenceMore["border-radius"] = "25px";
  varInfluenceMore["box-shadow"] = "0px 0px 50px -5px #000000";
  varInfluenceMore.position = "absolute";
  varInfluenceMore.left = "50%";
  varInfluenceMore.top = "50%";
  varInfluenceMore.transform = "translate(-50%, -50%)";
  varInfluenceMore["z-index"] = "1000";
  varInfluenceMore.padding = "20px";
  varInfluenceMore["box-sizing"] = "border-box";
  varInfluenceMore.overflow = "hidden";
  let loginWindow = $("<div>", varAdventureYes).css(varInfluenceMore);
  var varCompassNeedle = {};
  varCompassNeedle.display = "flex";
  varCompassNeedle["flex-direction"] = "column";
  varCompassNeedle["justify-content"] = "center";
  varCompassNeedle["align-items"] = "center";
  varCompassNeedle.width = "100%";
  varCompassNeedle.height = "100%";
  let loginForm = $("<form>").css(varCompassNeedle).appendTo(loginWindow);
  var varHallSpring = {};
  varHallSpring.id = "login-window-title";
  var varBehindTail = {};
  varBehindTail.position = "absolute";
  varBehindTail.top = "10%";
  varBehindTail.left = "50%";
  varBehindTail.transform = "translate(-50%, -50%)";
  varBehindTail["text-align"] = "center";
  varBehindTail["font-family"] = "Lucida Console, Monaco, monospace";
  varBehindTail["font-size"] = "65px";
  varBehindTail["letter-spacing"] = "6px";
  varBehindTail["word-spacing"] = "6px";
  varBehindTail.color = "#FFFFFF";
  varBehindTail["text-shadow"] = "-1px 0px 7px #CECECE";
  varBehindTail["font-weight"] = "400";
  varBehindTail["text-decoration"] = "none";
  varBehindTail["font-style"] = "normal";
  varBehindTail["font-variant"] = "small-caps";
  varBehindTail["text-transform"] = "uppercase";
  let titleBar = $("<div>", varHallSpring)
    .text(TITLE)
    .css(varBehindTail)
    .appendTo(loginWindow);
  var varIceVessels = {};
  varIceVessels.type = "text";
  varIceVessels.name = "login";
  var varAgoSeason = {};
  varAgoSeason.type = "text";
  varAgoSeason.placeholder = "Login";
  var varHappenedProduce = {};
  varHappenedProduce.margin = "10px";
  varHappenedProduce.padding = "5px";
  varHappenedProduce.width = "80%";
  varHappenedProduce["font-family"] = "Lucida Console, Monaco, monospace";
  varHappenedProduce["box-shadow"] = "0px 0px 17px 0px rgba(255,255,255,0.7)";
  varHappenedProduce["border-radius"] = "5px";
  varHappenedProduce.border = "none";
  varHappenedProduce.outline = "none";
  let loginInput = $("<input>", varIceVessels)
    .appendTo(loginForm)
    .attr(varAgoSeason)
    .css(varHappenedProduce);
  var varCouldYou = {};
  varCouldYou.type = "password";
  varCouldYou.name = "password";
  var varImagineProduct = {};
  varImagineProduct.type = "password";
  varImagineProduct.placeholder = "Password";
  var varLightWell = {};
  varLightWell.margin = "10px";
  varLightWell.padding = "5px";
  varLightWell.width = "80%";
  varLightWell["font-family"] = "Lucida Console, Monaco, monospace";
  varLightWell["box-shadow"] = "0px 0px 17px 0px rgba(255,255,255,0.7)";
  varLightWell["border-radius"] = "5px";
  varLightWell.border = "none";
  varLightWell.outline = "none";
  let passwordInput = $("<input>", varCouldYou)
    .attr(varImagineProduct)
    .css(varLightWell)
    .appendTo(loginForm);
  var varInventedNeeded = {};
  varInventedNeeded.type = "submit";
  var varAboardWhale = {};
  varAboardWhale.margin = "10px";
  varAboardWhale.padding = "5px";
  varAboardWhale.width = "80%";
  varAboardWhale["border-radius"] = "5px";
  varAboardWhale.border = "none";
  varAboardWhale["font-family"] = "Lucida Console, Monaco, monospace";
  varAboardWhale["background-color"] = "white";
  varAboardWhale["box-shadow"] = "0px 0px 17px 0px rgba(255,255,255,0.7)";
  varAboardWhale.color = "gray";
  varAboardWhale.cursor = "pointer";
  let submitButton = $("<button>", varInventedNeeded)
    .text("Login")
    .css(varAboardWhale);
  loginForm.append(submitButton);
  loginWindow.append(titleBar);
  titleBar.css("cursor", "grab");
  $("body").append(loginWindow);
  var varExperimentSuccess = {};
  varExperimentSuccess.top = 20;
  varExperimentSuccess.left = 20;
  loginWindow.draggable({
    handle: "#login-window-title",
    cursor: "move",
    cursorAt: varExperimentSuccess,
    start: function (argComingMemory, argAnnouncedOccur) {
      $(this).animate(
        {
          opacity: 0.5,
          "box-shadow": "0 0 10px 0 rgba(0,0,0,0.5)",
        },
        {
          duration: 500,
          start: function () {
            setTimeout(function () {
              loginWindow.css("cursor", "move");
            }, 300);
          },
        }
      );
    },
    stop: function (argBelowParagraph, argEvidenceSystem) {
      $(this).animate(
        {
          opacity: 1,
          "box-shadow": "none",
        },
        {
          duration: 500,
          start: function () {
            loginWindow.css("cursor", "default");
          },
        }
      );
    },
  });
  let logstat = localStorage.getItem("Loggined");
  let oldlogin = localStorage.getItem("LogginedLogin");
  let oldpass = localStorage.getItem("LogginedPass");
  if (logstat == "true") {
    loginfunc();
  }
  function loginfunc() {
    var varChosenWild = "";
    var varEnemyRecently = "";
    if (logstat !== "true") {
      varChosenWild = loginInput.val();
      varEnemyRecently = passwordInput.val();
    }
    if (logstat == "true") {
      varChosenWild = oldlogin;
      varEnemyRecently = oldpass;
    }
    fetchData(varChosenWild, varEnemyRecently);
  }
  loginForm.submit(function (argDeepMemory) {
    loginfunc();
  });
  loginWindow.hide();
  loginWindow.fadeIn(1000);
}
