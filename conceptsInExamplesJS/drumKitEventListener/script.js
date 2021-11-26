window.addEventListener("keydown", function(e) {
    // This will build a array with all elements with class key & then traverse through them
    const allKeys = this.document.querySelectorAll(".key");
    for (let i = 0; i < allKeys.length; i++) {
        // This gives us the key number for the current key we are traversing (turns it into a number)
        currKey = Number(allKeys[i].getAttribute("data-key"));

        // We will now check if the key that was pressed matches with any of our defined endpoints
        if (e.keyCode == currKey) {
            // We found the matching key, now we will pass on styling properties
            allKeys[i].classList.toggle("playing");
            const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
            audio.currentTime = 0;
            audio.play();
        }
    }
    // Now we will remove the styling since the click is over
    const keys = this.document.querySelectorAll(".key");
    function removeTrans(e) {
        if (e.propertyName != "transform") return;
        this.classList.remove("playing");
    }
    keys.forEach(key => key.addEventListener("transitionend", removeTrans));
});