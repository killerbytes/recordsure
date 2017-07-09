'use strict';
app.factory('interviewService', function ($q) {

    // Save Interview Details
    function save(data){ 
        var d = $q.defer(); 
        var storage = JSON.parse(window.localStorage.getItem('recordsure.interviews')) || [];
        storage.push(data)
        localStorage.setItem('recordsure.interviews', JSON.stringify(storage))
        d.resolve(data)
        return d.promise; //Used promise for easy switching between real API and localstorage
    }

    // Get Interview List
    function list(){
        var d = $q.defer();
        d.resolve(JSON.parse(localStorage.getItem('recordsure.interviews')));
        return d.promise;
    }

    return {
        save: save,
        list: list
    };
});