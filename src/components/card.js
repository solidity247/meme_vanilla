export default function card ({name, id, url}) {
    // destruct img url, name, id and 
    // insert it in HTML
    // nake it as a module in dfile ./scr/components/card.js
    return `
            <div id="cards ${id}">
                <div class="meme-card">
                    <img class="meme-img" src=${url} alt="">
                    <h3>${name}</h3>
                    <button class="meme-card-button">Like!</button>
                    <p>likes: <span>0</span></p>
                </div>
            </div>
        `
}