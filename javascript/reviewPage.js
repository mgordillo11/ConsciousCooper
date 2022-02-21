document.getElementById("emoji-button").addEventListener("click", function (event) {
    const emojiResponse = async function() {
        return await fetch('https://emojihub.herokuapp.com/api/random')
    }

    let emoji = emojiResponse()
    emoji = await emoji.json()
    emoji = emoji.htmlCode[0]

    document.getElementById("emoji").innerHTML = emoji
})