document.addEventListener('DOMContentLoaded', () => {
    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true };

    chrome.tabs.query(query, (tabs) => {
        dialogBox.innerHTML = getBarkedTitle(tabs[0].title);
    });
});

const getBarkedTitle = (tabTitle) => {
    const barkTitle = `${getRandomBark()} Hooman?, we are at: ${tabTitle}`
    return barkTitle;
}

const meows = [
    'Meow Meow!',
    'Meowww!',
    'Prrrrr!',
    'Arf arf!',
    'Yip yip!',
    'Meoooowww!'
]

const getRandomBark = () => {
    const bark = meows[Math.floor(Math.random() * meows.length)];
    return bark;
}
