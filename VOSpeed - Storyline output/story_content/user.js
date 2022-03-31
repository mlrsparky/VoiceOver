function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6NuX8T1cDn1":
        Script1();
        break;
      case "5kWHJYSlYct":
        Script2();
        break;
      case "5ZNyVcFpuqT":
        Script3();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var SLplaybackSpeed = player.GetVar("playbackSpeed");
var SLplaybackSpeedPC = 0;

if (SLplaybackSpeed==.5) {
  SLplaybackSpeedPC = 50; 
} else if (SLplaybackSpeed==.75) {
  SLplaybackSpeedPC = 75; 
} else if (SLplaybackSpeed==1) {
  SLplaybackSpeedPC = 100; 
} else if (SLplaybackSpeed==1.25) {
  SLplaybackSpeedPC = 125; 
} else if (SLplaybackSpeed==1.5) {
  SLplaybackSpeedPC = 150; 
} else if (SLplaybackSpeed==1.75) {
  SLplaybackSpeedPC = 175; 
} else if (SLplaybackSpeed==2) {
  SLplaybackSpeedPC = 200;
}

player.SetVar("playbackSpeedPC",SLplaybackSpeedPC);
}

function Script2()
{
  console.log("GSAP version: "+TweenLite.version);
var player = GetPlayer();
var SLplaybackSpeed = player.GetVar("playbackSpeed");
var num = player.GetVar("numberOfVideos");
num = num - 1;

if (SLplaybackSpeed<2.00) {
  SLplaybackSpeed += 0.25;
}

var vd = document.querySelectorAll('audio');
vd[num].playbackRate = SLplaybackSpeed;
player.SetVar("playbackSpeed",SLplaybackSpeed);
}

function Script3()
{
  var player = GetPlayer();
var SLplaybackSpeed = player.GetVar("playbackSpeed");
var num = player.GetVar("numberOfVideos");
num = num - 1;

if (SLplaybackSpeed>0.5) {
  SLplaybackSpeed -= 0.25;
}

var vd = document.querySelectorAll('audio');
vd[num].playbackRate = SLplaybackSpeed;
player.SetVar("playbackSpeed",SLplaybackSpeed);
}

