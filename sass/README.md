# Práctica 1: SASS

### Ejercicios introductorios

Los ejercicios resueltos se encuentran en el directorio [ejercicios](ejercicios). [Enunciado](https://github.com/isanchezberriel/TWFE-1020/blob/master/Sass.md)

* [Ejercicio 2](ejercicios/ej2.scss)
* [Ejercicio 3](ejercicios/ej3.scss)
* [Ejercicio 4](ejercicios/ej4.scss)
* [Ejercicio 5](ejercicios/ej5.scss)
* [Ejercicio 6](ejercicios/ej6.scss)
* [Ejercicio 7](ejercicios/ej7.scss)


### Herramientas

Para realizar el ejercicio [Sass](https://github.com/isanchezberriel/TWFE-1020/blob/master/Ejercicio_Sass_21_22.md) de la práctica antes fue necesario preparar la máquina virtual y el directorio del proyecto. Los pasos fueron los siguientes:

1. Se instalaron las herramientas necesarias: nodejs, npm, git, yeoman, generator-learnfe, git, gulp, sass
2. Se creó la estructura del proyecto

```bash
mkdir landing-page
cd landing-page
npm init
npm i yo
npm i generator-learnfe
yo learnfe
```

Esto crea la estructura de directorios:

![Estructura de directorios creada](images/tree.png)

3. La siguiente etapa es utilizar un automatizador de tareas, en este caso Gulp. Que se encarga de las siguientes tareas:

  * Actualizaciones en tiempo real en el navegador

  ```javascript
  gulp.task('browser-sync', () => {
    browserSync.init({
      server: {
        baseDir: "./"
      }
    })
    gulp.watch("*.html").on("change", browserSync.reload);
  });

  ```

  * Minificar el CSS

  ```javascript
  gulp.task('styles', () => {
    src(['src/styles/**/*.css'])
      .pipe(cleanCSS())
      .pipe(gulp.dest('dist'));
  });
  ```


  * Sourcesmaps

  ```javascript
  gulp.task('styles', () => {
    gulp.src(['src/styles/**/*.css'])
      .pipe(sourcemaps.init())
      .pipe(cleanCSS())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist'));
  });
  ```


### Landing Page

La página a imitar se encuentra desplegada en GitHub Pages en la siguiente dirección:

* [https://paulaexposito.github.io/SYTW_Cliente//sass/landing-page/index.html](https://paulaexposito.github.io/SYTW_Cliente/sass/landing-page/index.html)

Las partes de la página son:

* Cabecera
* Beneficios
* Productos
* Opiniones
* Formularios
* Garantías
* Contacto

Para la utilización de SASS destacan:

* Diferentes ficheros *.scss

```css
@import "_base.scss";
@import '_variables.scss';
@import "_mixins.scss";
```

* Definición de variables [_variables_.scss](src/styles/_variables_.scss)

```css
$productTypes: serie, film, documental;
$darkBackground: #181616;
```

* Varios mixins [_mixins.scss](src/styles/_mixins.scss)

```css
@mixin centerContent {
    align-items: center;
    justify-items: center;
    justify-content: center;
}
```

* Mixins con parámetros
```css
@mixin cardItem($w, $h, $m) {
    width: $w;
    height: $h;
    margin: $m;
    background-color: #8f3333;
    border-radius: 10%;
}
```

* Anidación de instrucciones

```css
.benefits {
    h1 {
        @include headersH1;
    }
    text-align: justify;
    margin-inline: 30px;
}
```

* Bucle

```css
@each $product in $productTypes {
		.#{$product}-product {
				background: url("../../assets/#{$product}.jpg");
				background-size: 100%;
				background-size: cover;

				&:hover {
						border: 2px solid yellow;
				}
		}
} 
```


* Además, se han cambiado algunas de las tareas de Gulp para que se detecten automáticamente los cambios en los ficheros SASS y se transpilen automáticamente a CSS.
