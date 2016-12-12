angular.module('usnApp').factory('httpProvider', ['$http', function($http) {
    var httpResult;
    $http({
        method: 'GET',
        url: 'template-array.json'
    }).then(
        function(httpResponse){
            console.log('successed', httpResponse);
            httpResult = {successData: httpResponse.data};
        },
        function(httpResponse) {
            console.log('failed', httpResponse);
            httpResult = { errMessage: httpResponse };
        }
    );

    function makeHttpCall(url) {
        $http({
            method: 'GET',
            url: url
        }).then(
            function(httpResponse){
                console.log('successed', httpResponse);
                httpResult = {successData: httpResponse.data};
            },
            function(httpResponse) {
                console.log('failed', httpResponse);
                httpResult = { errMessage: httpResponse };
            }
        );
    };

    return {
        getHttpResult: function() {
            return httpResult;
        },

        initiateNewResult: function(url){
            makeHttpCall(url);
        }
    }
}]);
