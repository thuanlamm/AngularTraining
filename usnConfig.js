angular.module('usnApp').config(function ($stateProvider) {
    var firstRoute = {
        name: 'First',
        url: '/first',
        templateUrl: 'first.html'
        //template: '<first>this is first </first>'
    }
    var secondRoute = {
        name: 'Second',
        url: '/second',
        template: '<h1>Second route</h1>'
    }
    $stateProvider.state(firstRoute);
    $stateProvider.state(secondRoute);
});

angular.module('usnApp').config(function(uiSelectConfig) {
    uiSelectConfig.theme = 'bootstrap';
    uiSelectConfig.resetSearchInput = true;
    return uiSelectConfig.appendToBody = true;
});
