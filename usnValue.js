angular.module('usnApp').value('templateArray', [
    {name: 'one',   makeScope: false},
    {name: 'two',   makeScope: true}]
).value('orderByGroup', ['name', 'price']
);

