var num=11;
var count=document.getElementById("countdown");
var video=document.getElementById("video");
var aud=new Audio();
aud.src="./evil-laugh-89423.mp3";
function sur()
{
    if(num==11)
    {
        count.innerHTML="ARE YOU READY";
        num--;
    }
    else if(num<11 && num>3)
    {
        count.innerHTML=num;
        num--;
    }
    else if(num<=3 && num>=1)
    {
        count.innerHTML=num;
        num=num-0.5;
    }
    if(num==0.5)
    {
        video.innerHTML=`<video style="width:60vh; height:100vh" src="./video.mp4" autoplay muted></video>`;
        aud.play();
    }
    setTimeout(sur,1000);
}