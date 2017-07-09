'use strict';

describe('Controller: InterviewCtrl', function () {

  // load the controller's module
  beforeEach(module('recordsureApp'));

  var MainCtrl,
    interviewService,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, interviewService) {
    scope = $rootScope.$new();
    MainCtrl = $controller('InterviewCtrl', {
      $scope: scope,
      interviewService: interviewService
      // place here mocked dependencies
    });
  }));

  it('showCity: should return London', function () {
    var city = scope.showCity({city: 'London'})
    expect(city).toBe('London');
  });

  it('showCity: should return Elsewhere', function () {
    var city = scope.showCity({city: 'Elsewhere', elsewhere: 'Elsewhere'})
    expect(city).toBe('Elsewhere');
  });

  it('shortener: should not Shorten name (less than 12)', function () {
    var name = scope.shortener('Bruce Wayne')
    expect(name).toBe('Bruce Wayne');
  });

  it('shortener: should Shorten name (more than 12)', function () {
    var name = scope.shortener('Peter Parker')
    expect(name).toBe('Peter P.');
  });

});
