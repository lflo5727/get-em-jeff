const filename = 'sounds/bezos-cut.mp3',
    audio = new Audio(browser.runtime.getURL(filename));
audio.play();
