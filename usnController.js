angular.module('usnApp').controller('usnController', ['$scope', 'orderByGroup', 'httpProvider', function($scope, orderByGroup, httpProvider) {
    // httpProvider.then(function(httpResponse){
    //     console.log('successed', httpResponse);
    //     $scope.templateArray = httpResponse.data;
    // }, function(httpResponse) {
    //     console.log('failed', httpResponse);
    //     $scope.errorMessage = 'http error';
    // });


    $scope.getHttpResult = function() {
        var httpResult = httpProvider.getHttpResult();
        $scope.templateArray = [];
        $scope.templateArray = httpResult.successData;
        $scope.errorMessage = httpResult.errMessage;
    };

    $scope.initiateNewResult = function () {
        var url = 'template-array-two.json';
        var httpResult;
        httpResult = httpProvider.initiateNewResult(url).then(
            function(httpResponse){
                console.log('successed', httpResponse);
                $scope.templateArray = httpResponse.data
            },
            function(httpResponse) {
                console.log('failed', httpResponse);
                $scope.errorMessage = httpResponse;
            }
        );
    };

    $scope.orderings = [
      'name',
      'price'
    ];

    $scope.myOrder = {
        selected: 'name'
    };
    $scope.bgColor = 0;

    $scope.getRandomColor = function(index) {
        return (Math.floor(Math.random() * 0xFFFFFF)).toString(16);
    };
}]);



