import card from "./src/components/card.js"
import { restClient } from "./src/clients/restClient.js"
import { shuffle } from "./src/utils/shuffle.js"

// access input#filter and provided callback
document.getElementById("filer").addEventListener("keyup", handleFilter);
// accessed a container where to render pictures
const cardContainer = document.getElementById("cards");

// get data from server
// dont worry about new keyword "await"
const memesResponse = await restClient.getMemes();
const memes = shuffle(memesResponse.data.memes);

// print cards in cardContainer
function renderCards(memes){
    cardContainer.innerHTML = memes.map( el=> card(el)).join("")
}

function handleFilter(e) {
    // TODO:
    // e.targ.val  - what you typed
    // retreive inp value
    // filter serverData    // use HOF filter, not any ather loop
    // render filtered data using (renderCards)
}

// add like count to the functionality ===> extra for those who is looking for real challenge

renderCards(memes)