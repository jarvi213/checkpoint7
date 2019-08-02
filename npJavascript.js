'use strict'

function getNPSinfo() {
    makeAPIRequest();
    fetch(`https://developer.nps.gov/api/v1/parks?api_key=HrZMcBmPsvZDZygwNjJpwXjtlyeqdP7tbQrhotq8`)
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));}
  
function getAPIstuff() {
    const parkName = 
    const parkDesc =
    const ParkURL = 
}

function makeAPIRequest(userQuery, limit = 10){
    const queryParams = {
        stateCode: ,
        limit: limit,
        key: HrZMcBmPsvZDZygwNjJpwXjtlyeqdP7tbQrhotq8
    }

function makeStateArray() {
    if 
}
    
function watchForm() {
    $('form').submit(event => {
      let stateIdForm = ($('#stateId').val()); 
      let limitForm = ($('#resultsReturn').val());
      event.preventDefault();
      getNPSinfo(stateIdForm, limitForm);
    });
  }
  
$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });