angular.module('usnApp').directive('usnChangeColor', function() {
    return {
        link: function(scope, elem, attr) {
            scope.blurHandler = function (ev) {
                scope.inputCssClass = ev.target.value;
            }
        }
    };
}).directive('usnChangeBackgroundColor', function() {
    return {
        link: function(scope, elem, attr) {
            scope.bgColor = scope.getRandomColor();
        }
    };
}).directive('usnMakeScope', function() {
    return {
        link: function(scope) {
        },
        scope: true
    };
}).directive('usnMakeScopeFalse', function() {
    return {
        link: function(scope) {
        },
        scope: false
    };
}).directive('usnMakeScopeEmpty', function() {
    return {
        link: function(scope) {
        },
        scope: {}
    };
}).directive('usnTemplateString', function() {
    return {
        link: function(scope) {
        },
        template: '<h2>writing</h2>'
    }
}).directive('usnTemplateFile', function() {
    return {
        link: function(scope) {
        },
        templateUrl: 'template.html'
    }
}).directive('first', function() {
    return {
        link: function(scope) {
            console.log('usnFirst');
            console.log(scope);
        },
        templateUrl: 'first.html',
}});
