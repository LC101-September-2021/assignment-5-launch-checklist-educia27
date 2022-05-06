# Eddy Tamayo educia27 JS DOM Manipulation and Fetching Data


This sample is using knowledge about forms, the DOM, and HTTP. With the use of PreventDefault() function to prevent a request from being sent out and the page reloading. There is also validation to ensure that the user entered a value for each field. querySelector was used as well as eventlisteners
within the codebase: script.js

Validation example: 
```javascript
 if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required");
    } else if ((validateInput(fuelLevel) === "Not a number") || validateInput(cargoLevel) === "Not a number") {
        alert("Values must contain numbers.");
    } else if ((validateInput(pilot) === "Is a number") || validateInput(copilot) === "Is a number") {
        alert("Values must contain letters.");    
    }
```

Furthermore, I used DOM manipulation to update the CSS stylings. Lastly, I fetch planetary JSON data to update where the shuttle is headed. 


