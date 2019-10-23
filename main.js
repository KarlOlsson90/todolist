//CONFIRM LOAD.......................................................................................................................................................................

document.addEventListener("DOMContentLoaded", function(event) {

    console.log("Allt laddat!")

});

/*/READ JSON..........................................................................................................................................................................

function loadJSON(file, callback) {​
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, false);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {​

            callback(xobj.responseText);​
        }
    }
    xobj.send(null);​
}​
function getJSON(file) {
    let result = null;

    loadJSON(file, function(response) {
        result = JSON.parse(response);
    });
    return result;
}

//CLASSES...........................................................................................................................................................................
*/

/*
class todoList {
    constructor() {
        this. = ;
        this. = ;
        this. = ;
        this. = ;
    }
}

class todoItems {
    constructor(dueDate, mission, missionStatus) {
        
        this.dueDate = ;
        this.task = ;
        this.taskStatus = ;
    }
}

*/

//ADD ITEMS...........................................................................................................................................

document.addEventListener("DOMContentLoaded", function(event) {
    const button = document.getElementById("addButton");
    button.addEventListener("click", function(e) {
        e.preventDefault();

        console.log("Du tryckte på knappen")
        let TaskInput = document.getElementById("TaskInputHTML").value;
        let DateInput = document.getElementById("DateInputHTML").value;
        let divElement = document.createElement("P");
        divElement.innerHTML = TaskInput + " " + DateInput;
        document.getElementById("allTasks").appendChild(divElement);



    });
});