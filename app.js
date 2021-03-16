const bulb = document.querySelector(".bulb");

function OnOff(check) {
  if (check === true) {
    document.body.style.backgroundColor = "#191e2d";
    bulb.style.background = "url('./svg/bulbON.svg') no-repeat center bottom";
  } else {
    document.body.style.backgroundColor = "#f0f3f7";
    bulb.style.background = "url('./svg/bulbOFF.svg') no-repeat center bottom";
  }
}
