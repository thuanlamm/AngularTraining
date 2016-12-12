describe ('usnApp', function() {
    it(' should demonstrate basic test behavior', function() {
        module('usnApp');
        var myFilter;
        inject(
            function ($filter) {
                myFilter = $filter('ourFilter');
            }
        );
        var filteredResult = myFilter('text to be filtered', 5);
        expect(filteredResult).toEqual('text to be filtered 5');
    });


});

