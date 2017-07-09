'use strict';

describe('Service: interviewService', function () {

  // load the service's module
  beforeEach(module('recordsureApp'));

  var MainCtrl,
    interviewService,
    scope;

  beforeEach(inject(function ($controller, $rootScope, _interviewService_) {
    interviewService = _interviewService_;
    scope = $rootScope.$new();
    MainCtrl = $controller('InterviewCtrl', {
      $scope: scope,
    });

  var store = {};

  }));

  it('should exist', function () {
    expect(interviewService).toBeDefined();
  });

  it('should exist save()', function() {
    expect(interviewService.save).toBeDefined();
  });

  it('should exist list()', function() {
    expect(interviewService.list).toBeDefined();
  });

  localStorage.clear();

  it("should save() interview to localstorage", function () {
    interviewService.save({city: 'London'})
    var item = JSON.parse(localStorage.getItem('recordsure.interviews'))[0]
    expect('London').toEqual(item.city);
      
  });

  it("should list() interviews from localstorage", function () {
    interviewService.list().then(function(res){
      expect(res.length).toBe(1)
    });
    scope.$apply();

      
  });



});