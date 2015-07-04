/**
 * Created by saketmohan on 6/30/15.
 */

( function() {

    'use strict';

    var app = angular.module('myVer1', []);
    app.controller('HomeCtrl', HomeController);

    function HomeController() {

        var hc = this;
        hc.name = 'Saket Trials';

        hc.users =  [
            {
                "id": 1,
                "firstname": "Saket",
                "lastname": "Mohan",
                "city": "Chicago",
                "phone": "312-391-7021",
                "email": "saketmohan21@gmail.com"

                },
            {
                "id": 2,
                "firstname": "Kukka",
                "lastname": "Abhilash",
                "city": "Pheonix",
                "phone": "512-371-9654",
                "email": "abhilash@gmail.com"

            },
            {
                "id": 3,
                "firstname": "Rebel",
                "lastname": "Banda",
                "city": "Pune",
                "phone": "312-391-7021",
                "email": "RebelBanda@december.biz"

            },
            {
                "id": 4,
                "firstname": "Vamsi",
                "lastname": "Krishna",
                "city": "Tampa",
                "phone": "919-966-2277",
                "email": "vamsi127@yahoo.co.in"

            },
            {
        "id": 5,
        "firstname": "Shiv",
        "lastname": "kanth",
        "city": "New Jersey",
        "phone": "312-345-4523",
        "email": "shivkanth007@yahoo.com"

            }];

        hc.addPerson = function() {
            hc.newPerson.id = hc.users.length + 1;
             hc.users.push(hc.newPerson);
            hc.newPerson = null;
        };

        hc.deletePerson = function(location) {
            hc.users.splice(location,1);
            console.dir(hc.users);
        };
    }

})();