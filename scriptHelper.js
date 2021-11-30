// Write your helper functions here!
 require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
                let mission = document.getElementById("missionTarget");
                mission.innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src= "${imageUrl}">`;
   
}

function validateInput(testInput) {
     if (testInput === "") {
         return "Empty";
     } else if (isNaN(testInput)) {
         return "Not a number";
     } else  {
         return "Is a number";
     }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    list = document.getElementById("faultyItems");

    let pilotInput = document.querySelector("input[name=pilotName]");
    pilot = pilotInput.value;

    let copilotInput = document.querySelector("input[name=copilotName]");
    copilot = copilotInput.value;

    let fuelInput = document.querySelector("input[name=fuelLevel]");
    fuelLevel = fuelInput.value;

    let cargoInput = document.querySelector("input[name=cargoMass]");
    cargoLevel = cargoInput.value;

    let pilotStatus = document.getElementById("pilotStatus");

    let copilotStatus = document.getElementById("copilotStatus");

    let fuelStatus = document.getElementById("fuelStatus");

    let cargoStatus = document.getElementById("cargoStatus");

    let launchStatus = document.getElementById("launchStatus");
    

    if (validateInput(pilot) === "" || validateInput(copilot) === "" || validateInput(fuelLevel) === "" || validateInput(cargoLevel) === "") {
        alert("All fields are required");
    } else if (isNaN(validateInput(fuelLevel)) || isNaN(validateInput(cargoLevel))) {
        alert("Values must contain numbers.");
    } else if (!isNaN(validateInput(pilot)) || !isNaN(validateInput(copilot))) {
        alert("Values must contain letters.");
        
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
    }

    if (fuelLevel < 10000) {
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        fuelStatus.innerHTML = "There is not enough fuel for the journey";
        launchStatus.style.color = "red";
    } else if (cargoLevel > 10000) {
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle is not ready for launch";
        cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
        launchStatus.style.color = "red";
    } else if (fuelLevel >= 10000 && cargoLevel <=10000) {
        launchStatus.innerHTML =  "Shuttle is ready for launch";
        launchStatus.style.color = "green";
    }
}

async function myFetch() {
    const planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
    });
    return planetsReturned;
}

function pickPlanet(planets) {
    let index  = Math.random() * planets.length
    return planets[index]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
