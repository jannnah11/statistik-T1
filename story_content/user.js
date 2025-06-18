function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hvM7Gn2HAC":
        Script1();
        break;
      case "6C9wTwR6WuZ":
        Script2();
        break;
  }
}

function Script1()
{
  var audio=document.getElementById('bgsong');
audio.src="sound 3.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script2()
{
  var audio= document.getElementById('bgsong');
audio.src="sound 3.mp3";
audio.load();
audio.play();
audio.volume=0.3;


}

