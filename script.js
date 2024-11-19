function generateLyrics() {
    let lyrics = "";
    for (let i = 99; i > 0; i--) {
        if (i > 1) {
            lyrics += `${i} bottles of beer on the wall, ${i} bottles of beer.\n`;
            lyrics += `Take one down, pass it around, ${i - 1} bottles of beer on the wall.\n\n`;
        } else {
            lyrics += `1 bottle of beer on the wall, 1 bottle of beer.\n`;
            lyrics += `Take it down, pass it around, no more bottles of beer on the wall.\n`;
        }
    }
    return document.getElementById("display").innerHTML = lyrics;
}

