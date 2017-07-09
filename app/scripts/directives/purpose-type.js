// Switch class (visa/pr) to <form>
app.directive('purposeType', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            purposeType: '='
        },
        link: function(scope, element, attrs){
            element.bind('change', function(){
                var newValue = this.value;
                scope.$apply(function () {
                    scope.purposeType =  newValue;
                });                
            })
        }
    }
})