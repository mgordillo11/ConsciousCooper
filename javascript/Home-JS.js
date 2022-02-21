let mySong = document.getElementById("homeSong");
let icon = document.getElementById("icon");

icon.onclick = async function() {

    const randomPic = async function image() {
        return await fetch('https://picsum.photos/2000/1000')
    }

    const inspritationalQuote = async function quote() {
        return await fetch('https://api.kanye.rest')
    }
    
    const homePic = await randomPic()
    const insQuote = await inspritationalQuote()
    let quote = await insQuote.json();


    const updatedImage = homePic.url
    quote = quote.quote

    document.getElementById("song-pic").src = updatedImage
    document.getElementById("quote-pic").innerText = quote

    if(mySong.paused) {
        mySong.play();
        icon.src = "images/pause.png";
    } else {
        mySong.pause();
        icon.src = "images/play.png";
    }
}