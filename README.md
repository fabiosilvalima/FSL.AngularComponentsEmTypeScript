# FSL.AngularComponentsEmTypeScript

**Angular Component em TypeScript**

O objetivo � mostrar o conceito de **"componente"** usando **Angular Components** separando as responsabilidades na aplica��o. Considero o uso de **TypeScript** pois � muito mais produtivo e diminui chances de erro em tempo de execu��o.

---

O que h� no c�digo fonte?
---

#### <i class="icon-file"></i> FSL.AngularComponentsEmTypeScript

- Solution do Visual Studio para facilitar;
- Bibliotecas do framework Angular 1.5;
- Arquivos HTML dos templates;
- Arquivos TypeScript e JavaScript que comp�em a solu��o; 

> **Observa��o:**

> - Voc� vai precisar instalar um plugin do **TypeScript** no seu **Visual Studio**. Fa�a download dele [aqui][1].
> - N�o h� necessidade de configura��o ou implementa��o de backend.
> - Abra a solution e chame o arquivo index.html.

---

Qual a proposta da solu��o?
---

O **HomeComponent** chama o **PessoaComponent** passando uma lista de pessoas onde � poss�vel incluir, editar e excluir os dados de cada pessoa. O componente � usado para essas opera��es em uma pessoa. 

```sequence
Home->Pessoa: Home cria o componente
Note right of Pessoa: Opera��es no componente
Pessoa-->Home: Componente responde � tela em eventos
```

**PREMISSAS:**
- Componentes devem ser independentes;
- Componentes n�o devem se poss�vel manipular o mundo externo e n�o devem compartilhar o escopo;
- Componentes devem responder altera��es por evento; 
- Componentes devem ser reutiliz�veis em qualquer lugar;
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

Refer�ncias:
---

- **TypeScript** download e tutoriais [aqui][1];
- **Angular** download e tutoriais [aqui][2];
- Extension para Visual Studio **File Nesting** download e tutoriais [aqui][3];
- Angular Guidelines de John Papa veja [aqui][5]

Lincen�a:
---

- [Licen�a MIT][4]


  [1]: http://typescript.org/
  [2]: https://angularjs.org/
  [3]: https://visualstudiogallery.msdn.microsoft.com/3ebde8fb-26d8-4374-a0eb-1e4e2665070c
  [4]: https://github.com/fabiosilvalima/FSL.AngularComponentsEmTypeScript/blob/master/LICENSE
  [5]: https://github.com/johnpapa/angular-styleguide
