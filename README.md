# FSL.AngularComponentsWithTypeScript

**Angular Component with TypeScript**

The goal is to show the component pattern and concept using **Angular Components**. I demonstrate how to separate all responsabilities in application. I highly recommend the use of **TypeScript**  it is much more productive and reduces chances of error at runtime.

---

What is in the source code?
---

#### <i class="icon-file"></i> FSL.AngularComponentsWithTypeScript

- Visual Studio solution file;
- Angular 1.5.8 library;
- HTML files;
- TypeScript files for our solution; 

> **Remarks:**

> - You will need to install **TypeScript** plugin for **Visual Studio**. Download it [here][1].
> - There is not need to configure anything in backend.
> - Open solution file, press F5 and call index.html.

---

What is the goal?
---

The **HomeComponent** uses **PessoaComponent** that receives a list of person to insert, update and delete each one of those person.  The objective of the component is to perform those features. 

```sequence
Home->Pessoa: Home create the component
Note right of Pessoa: Features on the component
Pessoa-->Home: Component fire events to Home
```

**Assumptions:**
- Components should be independents;
- Components should be stateless;
- Components should fire events on changes; 
- Components should be reusable;
- Components could have more than one template;

**Index.html**

```html
<body ng-cloak="">
	<fsl-home></fsl-home>
</body>
```

**home.html** (list of person)

```html
<fsl-pessoa layout="lista-edicao"
			model="$ctrl.pessoas"
            on-event="$ctrl.onChanges(evento, pessoa, index)"></fsl-pessoa>
```

**home.html** (person)

```html            
<fsl-pessoa layout="edicao"
            model="$ctrl.pessoa"
            on-event="$ctrl.onChanges(evento, pessoa, index)"></fsl-pessoa>
```  
 
----------

References:
---

- **TypeScript** download e tutoriais [here][1];
- **Angular** download e tutoriais [here][2];
- **File Nesting** extension for Visual Studio download e tutoriais [here][3];
- John Papa´s Angular guidelines [read here][5]

Licence:
---

- [Licence MIT][4]


  [1]: http://typescript.org/
  [2]: https://angularjs.org/
  [3]: https://visualstudiogallery.msdn.microsoft.com/3ebde8fb-26d8-4374-a0eb-1e4e2665070c
  [4]: https://github.com/fabiosilvalima/FSL.AngularComponentsEmTypeScript/blob/master/LICENSE
  [5]: https://github.com/johnpapa/angular-styleguide
