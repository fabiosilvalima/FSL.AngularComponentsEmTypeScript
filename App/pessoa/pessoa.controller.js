var App;
(function (App) {
    var Pessoa;
    (function (Pessoa) {
        var PessoaComponentController = (function () {
            function PessoaComponentController(util) {
                var _this = this;
                this.util = util;
                this.$onInit = function () {
                    _this.receberModel(_this.model);
                };
                this.$onChanges = function (changes) {
                    if (!changes.model.isFirstChange()) {
                        _this.receberModel(changes.model.currentValue);
                    }
                };
                this.incluirPessoa = function () {
                    var pessoa = _this.criarNovaPessoa();
                    _this.pessoas.push(pessoa);
                    _this.dispararEvento("incluir", pessoa);
                };
                this.excluirPessoa = function (pessoa) {
                    var index = _this.pessoas.indexOf(pessoa);
                    _this.pessoas.splice(index, 1);
                    _this.dispararEvento("excluir", pessoa);
                };
                this.editarPessoa = function (pessoa) {
                    _this.dispararEvento("editar", pessoa);
                };
                this.salvarPessoa = function () {
                    _this.dispararEvento("salvar", _this.pessoa);
                    _this.pessoa = _this.criarNovaPessoa();
                };
                this.criarNovaPessoa = function () {
                    return {
                        id: _this.util.generateGuid()
                    };
                };
                this.dispararEvento = function (evento, pessoa, index) {
                    if (angular.isDefined(_this.onEvent)) {
                        _this.onEvent({ pessoa: pessoa, evento: evento, index: index });
                    }
                };
                this.receberModel = function (model) {
                    if (model) {
                        if (angular.isArray(model)) {
                            _this.pessoas = model;
                        }
                        else {
                            angular.copy(model, _this.pessoa);
                        }
                    }
                    _this.pessoa = _this.pessoa || _this.criarNovaPessoa();
                    _this.pessoas = _this.pessoas || [];
                };
            }
            return PessoaComponentController;
        }());
        Pessoa.PessoaComponentController = PessoaComponentController;
        PessoaComponentController.$inject = [
            'util'
        ];
    })(Pessoa = App.Pessoa || (App.Pessoa = {}));
})(App || (App = {}));
