'use strict';

/**
 * @ngdoc function
 * @name recordsureApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recordsureApp
 */
app.controller('MainCtrl', function ($scope, generatorService, interviewService) {

    $scope.purpose = [{name: 'Visa', value: 'visa'}, {name: 'Permanent Residence', value: 'pr'}];
    $scope.cities = [ 'London', 'Brighton', 'Belfast', 'Cardiff', 'Newcastle'];

    $scope.data = {};

    // Generate Unique ID
    $scope.generate = function(){
      $scope.data.unique_id = generatorService.generate();
    }

    // Reset the form
    $scope.reset = function(){
        $scope.data = {}
        $scope.form.$setPristine();
        $scope.form.$setUntouched();
        $scope.form.$rollbackViewValue();
        $scope.submitted = false;
    }

    // Submit the form
    $scope.submitForm = function(){
      $scope.submitted = true;
      if(this.form.$valid){
        interviewService.save(this.data);
        $scope.reset();        
      }
    }
  });
