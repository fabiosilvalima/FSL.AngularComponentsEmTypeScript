namespace App {

    export class HomeComponentController implements ng.IComponentController {

        pessoas: App.Pessoa.IPessoa[] = [];
        pessoa: App.Pessoa.IPessoa = null;
        
        constructor(
            private $timeout: ng.ITimeoutService,
            private $element: ng.IRootElementService,
            private util: App.IUtilProvider
        ) {

        }
        
        $onInit = () => {
            this.pessoas.push({
                nome: 'Fabio Silva Lima',
                email: 'fabiosilvalima@terra.com.br',
                id: this.util.generateGuid()
            });
            this.pessoas.push({
                nome: 'Thomas Pepineli Lima',
                id: this.util.generateGuid()
            });
        }
        
        onChanges = (evento: string, pessoa: App.Pessoa.IPessoa) => {
            if (evento == "salvar") {
                var index = 0;
                this.pessoas.forEach((value, i) => {
                    if (value.id === pessoa.id) {
                        index = i;
                    }
                });
                
                this.pessoas[index] = pessoa;
                this.pessoa = { id: this.util.generateGuid() };
            } else {
                this.pessoa = pessoa;
            }
            console.log(evento, this.pessoa);
        }

    }

    HomeComponentController.$inject = [
        '$timeout',
        '$element',
        'util'
    ];

}