'use strict';

/**
 * @ngdoc function
 * @name recordsureApp.controller:InterviewCtrl
 * @description
 * # InterviewCtrl
 * Controller of the recordsureApp
 */
app.controller('InterviewCtrl', function ($scope, interviewService) {
    // Load Interview List from service
    interviewService.list().then(function(res){
        $scope.interviews = res;
    });

    // Switch fields if city is not from selection
    $scope.showCity = function(item){
        return item.city === 'other' ? item.elsewhere : item.city;
    }

    // Shorten the name if more than 12 characters
    $scope.shortener = function(name){
        if(!name || name.length < 12) return name;
        var names = name.split(' ').map(function(name, index) {
            if(index === 0){
                return name;
            }else{
                return name.substr(0,1) + '.';
            }
        });
        return names.join(' ')
    }
});
