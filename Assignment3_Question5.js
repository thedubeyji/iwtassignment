var app = angular.module("simpleApp", []);

function simpleController() {
    this.collection = [{name: "Rohan", age: 22, city: "Indore"},
        {name: "Kshitij", age: 21, city: "Bhopal"},
        {name: "Shyam", age: 19, city: "Alirajpur"}];

    this.limit = 7;
    this.sortProperty = 'name';
    this.reverseSort = false;
}

simpleController.prototype.addEntry = function () {
    this.collection.push(this.newData);
    this.newData = '';
};

simpleController.prototype.sort = function (prop) {
    this.sortProperty = prop;
    this.reverseSort = !this.reverseSort;
}


app.controller("simpleController", simpleController);