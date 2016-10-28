(() => {

    class PessoaComponent implements ng.IComponentOptions {

        bindings: { [binding: string]: string };
        controller = App.Pessoa.PessoaComponentController;

        templateUrl = ['util', '$attrs', (util: App.IUtilProvider, $attrs: ng.IAttributes) => {
            return util.buildTemplateUrl('pessoa/pessoa', $attrs['layout'] || '');
        }];

        constructor() {
            this.bindings = {
                model: '<',
                onEvent: '&'
            };
        }

    }

    angular
        .module('app.pessoa')
        .component('fslPessoa', new PessoaComponent());

})();