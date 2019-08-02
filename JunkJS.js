//this is Kyle's code that does something similar.

const searchURL = "https://www.googleapis.com/youtube/v3/search"
const apiKey = "AIzaSyDnxBtMcwu3pab20rCKW-3b-XV9iMzVRaY"

function createAPIURL(params){
    const queryString = Object.keys(params).map(function(key){
        const value = params[key]
        return `${key}=${value}`
    }).join("&")

    const url = `${searchURL}?${queryString}`
    return url
}

function createVideoHTML(title, description, thumbnailURL) {
    return `
        <div class="video">
            <img class="video-thumbnail" src="${thumbnailURL}" />
            <div class="video-title">${title}</div>
            <div class="video-description">${description}</div>
        </div>
    `
}

function displayResults(responseData) {
    const items = responseData.items
    const itemHtml = items.map(function(item){
        const title = (item.snippet.title)
        const description = (item.snippet.description)
        const thumbnail = (item.snippet.thumbnails.medium.url)

        return createVideoHTML(title, description, thumbnail)
    }).join("")

    $("#search-results").html(itemHtml)
}

function makeAPIRequest(userQuery, maxResults = 10){
    const queryParams = {
        q: userQuery,
        maxResults: maxResults,
        part: "snippet",
        key: apiKey
    }

    const url = createAPIURL(queryParams)

    fetch(url)
        .then(function(response){
            if (response.ok === true) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
        .then(function(responseJson){
            displayResults(responseJson)
        })
        .catch(function(error){
            console.log("hey something broke", error)
        })
}

function main(){
    $("#search-button").on("click", function(){
        const searchText = $("#search-text").val()
        makeAPIRequest(searchText)
    })
}

$(main)