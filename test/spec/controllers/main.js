'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('recordsureApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      // place here mocked dependencies
    });

  }));

  it('should get a uniqueID', function () {
    scope.generate()
    expect(scope.data.unique_id.length).toBe(14);
  });

  it('should reset the form', function () {
    scope.submitted = true;
    scope.form = {
      $setPristine: function(){},
      $setUntouched: function(){},
      $rollbackViewValue: function(){}
    }
    scope.reset()
    expect(scope.submitted).toBe(false);
  });

});
