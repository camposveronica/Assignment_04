/*eslint-env browser*/



function displayMenu() {
    "use strict";
    window.console.log("welcome to the Inventory Managment System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - view all products");
    window.console.log("update - update products");
    window.console.log("exit - exit the program");
    window.console.log("");
}

function getlocalitem(inventory) {
    "use strict";
    if (localStorage.getItem("localSku") !== null) {
        var result = parseInt(localStorage.getItem("localSku"), 10);
        var qty = parseInt(localStorage.getItem("localQty"), 10);
        var i, item = [], position;
        for (i = 0; i < inventory.length; i += 1) {
            item = inventory[i];
            window.console.log(item);
            var index = item.indexOf(result);
            window.console.log(index);
            if (index > -1) {
                position = i;
                break;
            }
        }
        inventory[position][2] = "(" + qty + ")";
    }
}
//VIEW
function view(inventory) {
    "use strict";
    getlocalitem(inventory);
    var i = 1;
    inventory.sort();
    for (i = 0; i < inventory.length; i += 1) {
        var strinventory = inventory[i].join(" ");
        window.console.log(strinventory);
    }

    window.console.log("");
}

//UPDATE
function update(inventory) {
    "use strict";
    var item = parseInt(window.prompt("sku number"), 10);
    var qty = parseInt(window.prompt("new quantity"), 10);
    var position, i, itemV = [];
    for (i = 0; i < inventory.length; i += 1) {
        itemV = inventory[i];
        var index = itemV.indexOf(item);
        if (index > -1) {
            position = i;
            break;
        } else {
            window.console.log("sku number not found");
        }
    }
    inventory[position][2] = "(" + qty + ")";
   
    localStorage.setItem("localSku", item);
    localStorage.setItem("localQty", qty);
    view(inventory);
}

//MAIN
function main() {
    "use strict";
    var command;
    var inventory = [];

    displayMenu();

    var product1 = [2233, "Hat", "(12)", "$14.99"];
    var product2 = [3223, "Socks", "(36)", "$9.99"];
    var product3 = [4824, "Shirt", "(10)", "$15.99"];
    var product4 = [6343, "Jeans", "(22)", "$39.99"];
    var product5 = [9382, "Jacket", "(5)", "$49.99"];

    inventory[0] = product1;
    inventory[1] = product2;
    inventory[2] = product3;
    inventory[3] = product4;
    inventory[4] = product5;



    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                view(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("command is not valid");
            }
        } else {
            break;
        }
    }
    window.console.log("program terminated");
}

main();
