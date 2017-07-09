'use strict';

describe('Directive: purpose-type', function() {
  beforeEach(module('recordsureApp'));

	var element, scope, form;

	beforeEach(inject(function($compile, $rootScope) {
		scope = $rootScope;
		scope.purpose = [{name: 'Visa', value: 'visa'}, {name: 'Permanent Residence', value: 'pr'}];
		element = angular.element('<form name="form" ng-class="type">' +
			'<select name="purpose" id="purpose" ng-model="data.purpose" purpose-type="type" required>' +
            '<option ng-repeat="item in purpose" value="{{item.value}}">{{item.name}}</option>' +
        	'</select>'+
			'</form>');

		$compile(element)(scope);
		scope.$digest();
		form = scope.form
	}));

	it("should have a class visa", function() {
		var el = element.find('select')
		el.val('visa')
	    el.triggerHandler('change');
		expect(element.hasClass('visa')).toBe(true);
	});

	it("should have a class pr", function() {
		var el = element.find('select')
		el.val('pr')
	    el.triggerHandler('change');
		expect(element.hasClass('pr')).toBe(true);
	});


});
