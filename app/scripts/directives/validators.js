// Validates email format
app.directive('email', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl){
            var pattern = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
            ctrl.$parsers.push(function(value) {
                if (!value || value.length == 0) return;
                
                ctrl.$setValidity('format', pattern.test(value));
                return value;
            })                
            
        }
    }
})
// Validates phone format (xxx-xxx-xxxx)
app.directive('phone', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel){
            var pattern = new RegExp(/^[1-9]\d{2}-\d{3}-\d{4}$/);
            ngModel.$parsers.push(function(value) {
                if (!value || value.length == 0) return;
                
                ngModel.$setValidity('format', pattern.test(value));
                return value;
            })                
            
        }
    }
})