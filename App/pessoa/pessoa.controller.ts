namespace App.Pessoa {

    export class PessoaComponentController implements ng.IComponentController {

        model: App.Pessoa.IPessoa | App.Pessoa.IPessoa[];
        pessoa: App.Pessoa.IPessoa;
        pessoas: App.Pessoa.IPessoa[];
        onEvent: (values: any) => void;

        constructor(
            private util: App.IUtilProvider
        ) {

        }
        
        $onInit = () => {
            this.receberModel(this.model);
        }
                
        $onChanges = (changes) => {
            if (!changes.model.isFirstChange()) {
                this.receberModel(changes.model.currentValue);
            }
        }

        incluirPessoa = () => {
            var pessoa = this.criarNovaPessoa();
            this.pessoas.push(pessoa);
            this.dispararEvento("incluir", pessoa);
        }

        excluirPessoa = (pessoa: App.Pessoa.IPessoa) => {
            var index = this.pessoas.indexOf(pessoa);
            this.pessoas.splice(index, 1);
            this.dispararEvento("excluir", pessoa);
        }

        editarPessoa = (pessoa: App.Pessoa.IPessoa) => {
            this.dispararEvento("editar", pessoa);
        }

        salvarPessoa = () => {
            this.dispararEvento("salvar", this.pessoa);
            this.pessoa = this.criarNovaPessoa();
        }

        private criarNovaPessoa = () => {
            return {
                id: this.util.generateGuid()
            }
        }

        private dispararEvento = (evento: string, pessoa: App.Pessoa.IPessoa, index?: number) => {
            if (angular.isDefined(this.onEvent)) {
                this.onEvent({ pessoa: pessoa, evento: evento, index: index });
            }
        }

        private receberModel = (model: App.Pessoa.IPessoa | App.Pessoa.IPessoa[]) => {
            if (model) {
                if (angular.isArray(model)) {
                    this.pessoas = <App.Pessoa.IPessoa[]>model;
                } else {
                    angular.copy(<App.Pessoa.IPessoa>model, this.pessoa);
                }
            }

            this.pessoa = this.pessoa || this.criarNovaPessoa();
            this.pessoas = this.pessoas || [];
        }

    }

    PessoaComponentController.$inject = [
        'util'
    ];

}