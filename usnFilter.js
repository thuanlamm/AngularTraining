angular.module('usnApp').filter('ourFilter', function(){
    return function(text, passParam) {
        return text + ' ' + passParam;
    }
});
