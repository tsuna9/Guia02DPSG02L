console.log("mi mensaje");
//variables
var full_nombre = "Jorge Cano";
var age = 27;
var developer = true;
//Arrays
var skillArray = ["JavaScript", "TypeScript", "Angular"];
var NumberArray = [123, 456, 789];
//Enum
var ROLE;
(function (ROLE) {
    ROLE[ROLE["Employee"] = 0] = "Employee";
    ROLE[ROLE["Manager"] = 1] = "Manager";
    ROLE[ROLE["Admin"] = 2] = "Admin";
    ROLE[ROLE["DEveloper"] = 3] = "DEveloper";
})(ROLE || (ROLE = {}));
;
var role = ROLE.Employee;
//function
function hello() { }
;
function setName(name) { }
;
function setName(name, surName) {
    return "string";
}
;
