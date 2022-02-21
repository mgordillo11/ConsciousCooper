let mySong = document.getElementById("homeSong");
let icon = document.getElementById("icon");

icon.onclick = async function() {

    const image2 = async function image() {
        return await fetch('https://picsum.photos/2000/1000')
    }

    const inspritationalQuote = async function quote() {
        return await fetch('https://api.fisenko.net/v1/quotes/en/random')
    }
    
    const image3 = await image2()
    const insQuote = await inspritationalQuote()


    const updatedImage = image3.url

    document.getElementById("song-pic").src = updatedImage
    document.getElementById("quote-pic").innerText = "Hello"

    console.log(image3.url)
    if(mySong.paused) {
        mySong.play();
        icon.src = "images/pause.png";
    } else {
        mySong.pause();
        icon.src = "images/play.png";
    }
}