'use strict';

describe('Directive: Validators', function() {
  beforeEach(module('recordsureApp'));

	var element, scope, form;

	beforeEach(inject(function($compile, $rootScope) {
		scope = $rootScope;
		element = angular.element('<form name="form">' +
			'<input type="text" id="email" name="email" ng-model="data.email" email required>' +
			'<input type="text" id="phone_number" name="phone_number" ng-model="data.phone_number" phone required>' +
			'</form>');

	    scope.data = { email: null, phone_number: null }

		$compile(element)(scope);
		// scope.$digest();
		form = scope.form
	}));

	it("should have a valid email format", function() {
		form.email.$setViewValue('email@email.com');
		scope.$digest();
		expect(scope.data.email).toEqual('email@email.com');
		expect(form.email.$valid).toBe(true);
	});

	it("should reject an invalid email format", function() {
		form.email.$setViewValue('email@emailcom');
		scope.$digest();
		expect(scope.data.email).toEqual('email@emailcom');
		expect(form.email.$valid).toBe(false);
	});

	it("should have a valid phone number format", function() {
		form.phone_number.$setViewValue('222-222-2222');
		scope.$digest();
		expect(scope.data.phone_number).toEqual('222-222-2222');
		expect(form.phone_number.$valid).toBe(true);
	});

	it("should reject an invalid phone number format", function() {
		form.phone_number.$setViewValue('222-222');
		scope.$digest();
		expect(scope.data.phone_number).toEqual('222-222');
		expect(form.phone_number.$valid).toBe(false);
	});

});
