// get data from server
// filter if needed , using utility func
// iterate and render all pictures using components

const cardContainer = document.getElementById("cards")


const tempData = [
    {
    "id": "181913649",
    "name": "Drake Hotline Bling",
    "url": "https://i.imgflip.com/30b1gx.jpg",
    "width": 1200,
    "height": 1200,
    "box_count": 2,
    "captions": 1219750
    },
    {
    "id": "87743020",
    "name": "Two Buttons",
    "url": "https://i.imgflip.com/1g8my4.jpg",
    "width": 600,
    "height": 908,
    "box_count": 3,
    "captions": 977250
    },
    {
    "id": "112126428",
    "name": "Distracted Boyfriend",
    "url": "https://i.imgflip.com/1ur9b0.jpg",
    "width": 1200,
    "height": 800,
    "box_count": 3,
    "captions": 1011500
    },
    {
    "id": "217743513",
    "name": "UNO Draw 25 Cards",
    "url": "https://i.imgflip.com/3lmzyx.jpg",
    "width": 500,
    "height": 494,
    "box_count": 2,
    "captions": 540000
    }
]

const el = tempData[0]
// const URL = "https://api.imgflip.com/get_memes";

function card (el) {
    // destruct img url, name, id and 
    // insert it in HTML


    return `
    <div id="cards">
        <div class="meme-card">
            <img class="meme-img" src="https://i.imgflip.com/3lmzyx.jpg" alt="">
            <h3>Meme name</h3>
            <button class="meme-card-button">Like!</button>
            <p>likes: <span>0</span></p>
        </div>
    `
}

function renderCards(){
    // prnt cards in cardContainer
}





console.log(tempData)