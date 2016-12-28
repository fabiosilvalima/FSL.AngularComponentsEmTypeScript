(function () {
    angular
        .module('app', [
        'app.pessoa'
    ]);
})();
angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
});
