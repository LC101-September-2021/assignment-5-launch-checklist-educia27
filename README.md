# Eddy Tamayo educia27 JavaScript DOM Manipulation and Fetching Data


This codebase deals with a checklist form and this checklist is successful if appropriate values are given within the input fields. Validation is implemented to make sure correct values are inserted. It also fetches planetary data for view once the user successfully inputs correct data. This sample is using knowledge about forms, the DOM, and HTTP. With the use of PreventDefault() function to prevent a request from being sent out and the page reloading. There is also validation to ensure that the user entered a value for each field. querySelector was used as well as eventlisteners
within the codebase: script.js

Validation example in ScriptHelper.js: 
```javascript
 if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required");
    } else if ((validateInput(fuelLevel) === "Not a number") || validateInput(cargoLevel) === "Not a number") {
        alert("Values must contain numbers.");
    } else if ((validateInput(pilot) === "Is a number") || validateInput(copilot) === "Is a number") {
        alert("Values must contain letters.");    
    }
```

DOM Manipulation:
```javascript
cargoLevel = document.querySelector("input[name=cargoMass]").value;

    let pilotStatus = document.getElementById("pilotStatus");

    let copilotStatus = document.getElementById("copilotStatus");
```

Fetching JSON:
``` javascript
async function myFetch() {
    const planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
    });
    return planetsReturned;
}
```

Furthermore, I used DOM manipulation to update the CSS stylings. Lastly, I fetch planetary JSON data to update where the shuttle is headed. 


