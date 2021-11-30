// Write your JavaScript code here!

//const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    
    let form = document.querySelector("form");
    let pilotInput = document.querySelector("input[name=pilotName]");
    pilot = pilotInput.value;

    let copilotInput = document.querySelector("input[name=copilotName]");
    copilot = copilotInput.value;

    let fuelInput = document.querySelector("input[name=fuelLevel]");
    fuelLevel = fuelInput.value;

    let cargoInput = document.querySelector("input[name=cargoMass]");
    cargoLevel = cargoInput.value;

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
 
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        let otherWorldly = pickPlanet(listedPlanets)
        addDestinationInfo(document, otherWorldly.name, otherWorldly.diameter, otherWorldly.star, otherWorldly.distance,otherWorldly.moons,otherWorldly.image);
    });
   
    form.addEventListener("submit", function(event) {
        //event.preventDefault();
        // if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
        //     alert("All fields are required");
        //     //event.preventDefault();
        // } else if (isNaN(fuelLevel.value) || isNaN(cargoInput.value)) {
        //     alert("Values must contain numbers.");
        // } else if (!isNaN(pilotInput.value) || !isNaN(copilotInput.value)) {
        //     alert("Values must contain letters.");
        // }
        event.preventDefault();
        let list = document.getElementById("faultyItems");
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

    });
   
});