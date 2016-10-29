# FSL.AngularComponentsEmTypeScript

**Angular Component em TypeScript**

O objetivo é mostrar o conceito de **"componente"** usando **Angular Components** separando as responsabilidades na aplicação. Considero o uso de **TypeScript** pois é muito mais produtivo e diminui chances de erro em tempo de execução.

---

O que há no código fonte?
---

#### <i class="icon-file"></i> FSL.AngularComponentsEmTypeScript

- Solution do Visual Studio para facilitar;
- Bibliotecas do framework Angular 1.5;
- Arquivos HTML dos templates;
- Arquivos TypeScript e JavaScript que compõem a solução; 

> **Observação:**

> - Você vai precisar instalar um plugin do **TypeScript** no seu **Visual Studio**. Faça download dele [aqui][1].
> - Não há necessidade de configuração ou implementação de backend.
> - Abra a solution e chame o arquivo index.html.

---

Qual a proposta da solução?
---

O **HomeComponent** chama o **PessoaComponent** passando uma lista de pessoas onde é possível incluir, editar e excluir os dados de cada pessoa. O componente é usado para essas operações em uma pessoa. 

```sequence
Home->Pessoa: Home cria o componente
Note right of Pessoa: Operações no componente
Pessoa-->Home: Componente responde à tela em eventos
```

**PREMISSAS:**
- Componentes devem ser independentes;
- Componentes não devem se possível manipular o mundo externo e não devem compartilhar o escopo;
- Componentes devem responder alterações por evento; 
- Componentes devem ser reutilizáveis em qualquer lugar;
- Componentes podem ter mais de um template;

**Index.html**

```html
<body ng-cloak="">
	<fsl-home></fsl-home>
</body>
```

**home.html** (lista de pessoas)

```html
<fsl-pessoa layout="lista-edicao"
			model="$ctrl.pessoas"
            on-event="$ctrl.onChanges(evento, pessoa, index)"></fsl-pessoa>
```

**home.html** (uma pessoa)

```html            
<fsl-pessoa layout="edicao"
            model="$ctrl.pessoa"
            on-event="$ctrl.onChanges(evento, pessoa, index)"></fsl-pessoa>
```  
 
----------

Referências:
---

- **TypeScript** download e tutoriais [aqui][1];
- **Angular** download e tutoriais [aqui][2];
- Extension para Visual Studio **File Nesting** download e tutoriais [aqui][3];
- Angular Guidelines de John Papa veja [aqui][5]

Lincença:
---

- [Licença MIT][4]


  [1]: http://typescript.org/
  [2]: https://angularjs.org/
  [3]: https://visualstudiogallery.msdn.microsoft.com/3ebde8fb-26d8-4374-a0eb-1e4e2665070c
  [4]: https://github.com/fabiosilvalima/FSL.AngularComponentsEmTypeScript/blob/master/LICENSE
  [5]: https://github.com/johnpapa/angular-styleguide
