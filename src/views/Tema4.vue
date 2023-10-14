<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Procedimientos y funciones almacenadas

    .row.justify-content-center.mb-5
      .col-md-10(data-aos="zoom-in")
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5.img4-1
          .row.m-0.align-items-center.justify-content-between
            .col-lg-10
              .contenedor-dashed.p-4
                .bloque-texto-a__texto.p-4
                  p.mb-0 En bases de datos no relacionales o NoSQL, no se realizan procedimientos almacenados, se pueden realizar funciones que se enfocan en casos puntuales para ejecutar en las bases de datos. A continuación, se aborda los procedimientos almacenados y su respectiva estructura en bases de datos SQL.

    h3(data-aos="fade-right").mb-5
      i.fas.fa-square.cac.me-3
      |Procedimientos almacenados

    .row.mb-5
      .col-lg-1.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img4-2.svg', alt='Datos almacenados')
      .col-lg-11.col-sm-10(data-aos="fade-right")
        p Un procedimiento puede tomar argumentos de entrada y mostrar valores como resultados. En estos casos, se debe nombrar y almacenar un procedimiento en un conjunto de datos de #[em BigQuery]. Un procedimiento almacenado puede acceder a los datos o modificarlos en varios conjuntos de datos, de varios usuarios. También puede contener una consulta de varias instrucciones.
          br
          br
          |Generalmente, algunos procedimientos almacenados están compilados en #[em BigQuery] y no deben construirse; estos son llamados procedimientos del sistema; a continuación, conoceremos sus particularidades:

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Características")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            p Los procedimientos almacenados brindan ciertos beneficios en bases de datos SQL como puede ser:
            ol
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Recibir parámetros de
                em input
                |(entrada) y producir un
                em output
                |(valores de salida) como resultado a un programa que realice peticiones (llamadas).
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Compilar instrucciones de programación que ejecutan acciones dentro de la base de datos.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Devolver valores de estados que permiten saber si la operación de un programa se ha realizado de forma exitosa o no.
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema4/img4-3.png', alt='Entrada/Salida')

      .py-4.py-md-5(titulo="Tipos")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            p
              b Existen tres tipos de procedimientos almacenados:
            p #[strong Procedimientos almacenados definidos por el usuario]: este tipo de procedimientos se establece en la base de datos del sistema (#[em Master, Model, MSDB…]) o en la base de datos defina por el usuario. p Además, los procedimientos definidos por este se construyen en #[em Transact]-SQL o como una referencia a un método CLR de .NET.
            p #[strong Procedimientos almacenados temporales]: son un tipo de procedimientos definidos por el usuario que se almacenan en la base de datos #[em TempDB]. Están clasificados en dos tipos:

            ol
              li.mb-3
                i.fas.fa-square.cac.me-3
                span Locales, su primer carácter inicia por “#”
              li.mb-3
                i.fas.fa-square.cac.me-3
                span Globales, su primer carácter inicia por “##”

            p #[strong Procedimientos almacenados del sistema de SQL]: este tipo de procedimientos pertenece al lenguaje SQL server y sus primeros caracteres al definir un procedimiento inicia por “sp”. Estos se encuentran almacenados de manera física en el motor de base de datos y de forma oculta en la parte de #[em resource].
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema4/img4-4.png', alt='Piezas de rompecabezas')

      .py-4.py-md-5(titulo="Estructuras")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            p Para construir un procedimiento almacenado en bases de datos SQL, se implementa la siguiente declaración:
              .row.justify-content-center
                .col-md-10
                  .titulo-sexto.color-acento-botones.cfc4
                    p.mb-0
                      em “Create procedure”
            p A continuación, se define cómo es la sintaxis de un procedimiento almacenado:
              .row.justify-content-center
                .col-md-10
                  figure
                    img(src='@/assets/curso/temas/tema4/img4-6.svg', alt='Sintaxis procedimiento almacenado')
            p El ejemplo que se presenta a continuación, se observa un procedimiento que realiza una consulta de varias instrucciones. En la consulta se establece una variable, donde se ejecuta una instrucción
              em insert
              |y se obtiene el resultado como un
              em string
              |de texto con formato.

              .row.justify-content-center
                .col-md-10
                  figure
                    img(src='@/assets/curso/temas/tema4/img4-7.svg', alt='Ejemplo')
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema4/img4-8.png', alt='Código fuente')

    h3(data-aos="fade-right").mb-5
      i.fas.fa-square.cac.me-3
      |Funciones almacenadas

    .row.justify-content-center.mb-5
      .col-md-10(data-aos="zoom-in")
        .bloque-texto-izquierda
          .bloque-texto-a.bloque-texto-3.p-4(data-aos="zoom-in" style="background-color: #DEF3F3")
            .row.m-0.align-items-center.justify-content-between
              .col-lg-7.order-lg-first.order-sm-last
                .contenedor-dashed.p-3
                  .bloque-texto-a__texto.p-4
                    p.mb-0 Una función almacenada es un conjunto de instrucciones que realizan en determinada operación y devuelven un único valor.
                      br
                      br
                      | Se presentan a continuación, sus características y estructura:

              .col-lg-5.mb-4.mb-lg-0.p-4
                img(src='@/assets/curso/temas/tema4/img4-9.svg', alt='MongoDB')

    .row.justify-content-center.mb-5
      .col-md-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Características")
            .col-md-10.col-sm-10.order-lg-first.order-sm-last
              p Teniendo en cuenta la gran variedad de funciones realizadas en una base de datos y tomando como referencia la base de datos MongoDB, las funciones a construir se realizan por medio del lenguaje JavaScript y son almacenadas en una colección del sistema llamada
                em system.js.
              p Para la construcción de una función en MongoDB se debe tener en cuenta:
              ol
                li.mb-3
                  i.fas.fa-square.cac.me-3
                  |Conocimientos de los diferentes comandos implementados en la construcción de las funciones.
                li.mb-3
                  i.fas.fa-square.cac.me-3
                  |La operación para realizar dentro de la función.
                li.mb-3
                  i.fas.fa-square.cac.me-3
                  |Valor único de retorno.
            .col-md-2.col-sm-2
              figure
                img(src='@/assets/curso/temas/tema4/img4-10.svg', alt='Diseño base de datos')

          div(titulo="Estructura")
            .row
              .col-md-10.col-sm-10.order-lg-first.order-sm-last
                p La sintaxis de una función en MongoDB es de la siguiente forma:
                p Ejemplo de una función suma de dos números. Esta función por nombre es “sum”, donde recibe dos parámetros (x,y) donde a su vez son los números para realizar dicha operación.
                .row.justify-content-center.mb-5
                  .col-md-10
                    figure
                      img(src='@/assets/curso/temas/tema4/img4-12.svg', alt='Código funciones almacenadas')
                p También se puede realizar su implementación de la siguiente forma:
                .row.justify-content-center.mb-5
                  .col-md-10
                    figure
                      img(src='@/assets/curso/temas/tema4/img4-13.svg', alt='Ejemplo funciones almacenadas')
                p Para su respectiva consulta si existe la función y la eliminación de la función:
                .row.justify-content-center.mb-5
                  .col-md-10
                    figure.mb-4
                      img(src='@/assets/curso/temas/tema4/img4-14.svg', alt='Consulta a función almacenada')

                    figure
                      img(src='@/assets/curso/temas/tema4/img4-14.svg', alt='Eliminación de función almacenada')
              .col-md-2.col-sm-2
                figure
                  img(src='@/assets/curso/temas/tema4/img4-11.svg', alt='Carpeta con documentos')

    h3(data-aos="fade-right").mb-5
      i.fas.fa-square.cac.me-3
      | Disparadores

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img4-25.svg', alt='Hoja')
      .col-lg-11.col-sm-10(data-aos="fade-left")
        p.mb-0 Los disparadores implementados en MongoDB, son una pieza fundamental donde se permite ejecutar la lógica por parte del servidor del cliente, después que ocurra un evento en la base de datos; por ejemplo, actualizaciones en las bases de datos pueden ser: eliminación, inserción y modificación de datos.
    p.mb-5(data-aos='fade-right') Los disparadores, también llamados activadores, tiene el poder de actualizar la información después de diferentes cambios, como la inserción de nuevos datos en las bases; teniendo en cuenta esto, verifiquemos sus principales variables:
    .row.mb-5
      .col-md-9(data-aos="fade-left")
        TabsA.color-primario
          .tarjeta.tarjeta--gris.p-4(titulo="Características")
            p MongoDB
              em Triggers
              |(disparadores) brinda a los usuarios los beneficios de las siguientes maneras:
            ol
              li.mb-3
                i.fas.fa-square.cac.me-3
                |En la parte de auditoría, los disparadores ayudan a la identificación de que usuarios realizaron cambios en la base de datos.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Coherencia de datos, los disparadores pueden asegurarse de que los datos que se ingresen en la base de datos cumplan con un formato preestablecido; por ejemplo, que un campo estado, figure en mayúscula, si está ACTIVO o NO ACTIVO.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Integridad de datos, los disparadores ayudan por medio de la lógica condicional agregar ciertas validaciones para asegurar que los datos cumplan con dicha validación.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Eventos de datos, por medio de los disparadores pueden lanzar diferentes eventos para que sucedan como medio para llevar un control de todos los sucesos y tipo de documentos que sucedan en la base de datos.

          .tarjeta.tarjeta--gris.p-4(titulo="Tipos")
            h4 Tipos de disparadores de MongoDB
            p Hay tres tipos de disparadores de MongoDB:
            ol
              li.mb-3
                i.fas.fa-square.cac.me-3
                |
                b Disparadores de base de datos:
                |estos activadores realizan una acción particular una vez que se agrega, elimina o actualiza un documento.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |
                b Desencadenadores programados:
                |estas son acciones programadas que ocurren en un intervalo establecido o en un momento específico. Por ejemplo, la ejecución de un proceso de limpieza de registros o la generación de un informe sobre posibles novedades en las transacciones después de cada minuto.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |
                b Disparadores de autenticación:
                |estas son acciones que ocurren durante la creación o eliminación de usuarios o también a las acciones de inicio de sesión en MongoDB. Se implementan también para realizar el mantenimiento del usuario y el seguimiento de la auditoría del usuario.
          .tarjeta.tarjeta--gris.p-4(titulo="Estructura")
            p Los objetos de evento de actualizaciones en la base de datos tienen la siguiente sintaxis:
            .row.justify-content-center.mb-3
              .col-md-10
                figure
                  img(src='@/assets/curso/temas/tema4/img4-17.svg', alt='Estructura de disparador')
                  figcaption Nota: adaptada de MongoDB, (s/f).

            p Un disparador se configura con la siguiente expresión de proyecto:
            .row.justify-content-center.mb-3
              .col-md-10
                figure
                  img(src='@/assets/curso/temas/tema4/img4-18.svg', alt='Configuración de disparador')
                  figcaption Nota: adaptada de MongoDB, (s/f).

            p El objeto de evento de cambio que pasa a la función de disparador solo incluye los campos especificados en la proyección, como se destaca en el ejemplo a continuación:
            .row.justify-content-center.mb-3
              .col-md-10
                figure
                  img(src='@/assets/curso/temas/tema4/img4-19.svg', alt='Ejemplo de disparador')
                  figcaption Nota: adaptada de MongoDB, (s/f).
      .col-md-3.mb-sm-4.order-sm-first.order-lg-last
        figure
          img(src='@/assets/curso/temas/tema4/img4-16.png', alt='Diseño BBDD')

    h3(data-aos="fade-right").mb-5
      i.fas.fa-square.cac.me-3
      |Paquetes de bases de datos

    .row.justify-content-center.mb-5
      .col-md-10(data-aos="zoom-in")
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5.img420
          .row.m-0.align-items-center.justify-content-between
            .col-lg-7
              .contenedor-dashed.p-4
                .bloque-texto-a__texto.p-4
                  p.mb-0 Los paquetes en PL/SQL, tienen un papel importante que es el de agrupar funciones y procedimientos de forma lógica. De esta manera, se consigue obtener un único objeto en todas las instrucciones, asociadas a un determinado tipo de tarea.
    p.mb-5(data-aos='fade-right') Por ejemplo, si tenemos un conjunto de funciones y procedimientos para realizar cálculos matemáticos, los podemos agrupar en un paquete:

    .row.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img4-21.svg', alt='Imagen decorativa')
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Características")
            ol
              li.mb-3
                i.fas.fa-square.cac.me-3
                |El paquete cuando es llamado la primera vez es almacenado en memoria.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |El paquete se mantiene en memoria para ser implementado por cada usuario.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Los paquetes se pueden encapsular en aquellos casos en los que no formen parte de la interfaz del usuario.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Se pueden manejar la encapsulación y hacer visibles aquellos objetos que queremos.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Sobrecarga de los paquetes.

          div(titulo="Estructura")
            p Es fundamental que al construir un paquete (
              em package
              |), se declaren todos los subprogramas públicos. Hay que recordar que en este espacio se deben declarar aquellas funciones o procedimientos que actúan como interfaz. También se declaran las variables o constantes que se requieren tener como globales y que se puedan cambiar o referenciar fuera del paquete.
            p Esta sería la sintaxis.
            figure.mb-4
              img(src='@/assets/curso/temas/tema4/img4-22.svg', alt='Estructura de paquete')
            p El cuerpo donde se define cada uno de los procedimientos y/o las funciones tendría la siguiente sintaxis:
            figure.mb-4
              img(src='@/assets/curso/temas/tema4/img4-23.svg', alt='Sintaxis de paquete')
            p Si se requiere eliminar un paquete de la base de datos tanto la especificación como el cuerpo, sería de la siguiente forma:
            figure.mb-4
              img(src='@/assets/curso/temas/tema4/img4-24.svg', alt='Eliminar paquete')
            p Cabe destacar que en las bases de datos no relacionales o NoSQL no existe la agrupación de funciones o procedimientos llamados en SQL paquetes.
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
