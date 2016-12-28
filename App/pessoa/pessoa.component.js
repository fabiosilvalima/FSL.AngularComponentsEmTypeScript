(function () {
    var PessoaComponent = (function () {
        function PessoaComponent() {
            this.controller = App.Pessoa.PessoaComponentController;
            this.templateUrl = ['util', '$attrs', function (util, $attrs) {
                    return util.buildTemplateUrl('pessoa/pessoa', $attrs['layout'] || '');
                }];
            this.bindings = {
                model: '<',
                onEvent: '&'
            };
        }
        return PessoaComponent;
    }());
    angular
        .module('app.pessoa')
        .component('fslPessoa', new PessoaComponent());
})();
