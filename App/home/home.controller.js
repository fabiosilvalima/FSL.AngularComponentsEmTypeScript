var App;
(function (App) {
    var HomeComponentController = (function () {
        function HomeComponentController($timeout, $element, util) {
            var _this = this;
            this.$timeout = $timeout;
            this.$element = $element;
            this.util = util;
            this.pessoas = [];
            this.pessoa = null;
            this.$onInit = function () {
                _this.pessoas.push({
                    nome: 'Fabio Silva Lima',
                    email: 'fabiosilvalima@terra.com.br',
                    id: _this.util.generateGuid()
                });
                _this.pessoas.push({
                    nome: 'Thomas Pepineli Lima',
                    id: _this.util.generateGuid()
                });
            };
            this.onChanges = function (evento, pessoa) {
                if (evento == "salvar") {
                    var index = 0;
                    _this.pessoas.forEach(function (value, i) {
                        if (value.id === pessoa.id) {
                            index = i;
                        }
                    });
                    _this.pessoas[index] = pessoa;
                    _this.pessoa = { id: _this.util.generateGuid() };
                }
                else {
                    _this.pessoa = pessoa;
                }
                console.log(evento, _this.pessoa);
            };
        }
        return HomeComponentController;
    }());
    App.HomeComponentController = HomeComponentController;
    HomeComponentController.$inject = [
        '$timeout',
        '$element',
        'util'
    ];
})(App || (App = {}));
