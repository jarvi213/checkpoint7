'use strict'

const searchURL = "https://developer.nps.gov/api/v1/parks"
const apiKey = "HrZMcBmPsvZDZygwNjJpwXjtlyeqdP7tbQrhotq8"

//listens for user input
function getParkInfo(){
    $("#searchButton").on("click", function(){
        const searchText = $("#stateId").val()
        const searchNumber = $('#resultsReturn').val()
        makeAPIRequest(searchText, searchNumber)
    })
}

//create the URL
function createAPIURL(params){
    const queryString = Object.keys(params).map(function(key){
        const value = params[key]
        return `${key}=${value}`
    }).join("&")

    const url = `${searchURL}?${queryString}&api_key=${apiKey}`
    return url;
}

//makes the GET request based on getParkInfo
function makeAPIRequest(searchText, searchNumber){
    const queryParams = {
        stateCode: searchText,
        limit: searchNumber
    }

    const url = createAPIURL(queryParams)

    fetch('https://cors-anywhere.herokuapp.com/'+url)
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

//handles the response info from the GET request
function displayResults(responseResults) {
    const items = responseResults.data
    const itemHtml = items.map(function(item){
        const parkName = (data.fullName)
        const parkURL = (data.url)
        const description = (data.description)

        return createParkListHTML(parkName, parkURL, description)
    }).join("")

    $(".search-results").html(itemHtml)
}
  
//handles rendering to the DOM
function createParkListHTML(parkName, parkURL, description) {
    return `
        <div class="searchResultsFound">
            <h2 class="parkName">${parkName}</h2>
            <p class="parkURL">${parkURL}</p>
            <p clss="parkDescription">${description}</p>
        </div>
    `
}
function runTheThing() {
    getParkInfo();
}

$(runTheThing);