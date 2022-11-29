<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 CRUD en MongoDB

    .bloque-texto-izquierda.mb-5
      .bloque-texto-a.bloque-texto-3.p-4(data-aos="zoom-in" style="background-color: #DEF3F3")
        .row.m-0.align-items-center.justify-content-between
          .col-lg-7.order-lg-first.order-sm-last
            .contenedor-dashed.p-3
              .bloque-texto-a__texto.p-4
                h3 Construcción de base de datos NoSQL
                p.mb-0 Operaciones básicas: son aquellas que se implementan en la construcción de una base de datos NoSQL, para la realización y explicación de cada uno de los diferentes comandos se trabajará con una base de datos no relacional como lo es “MongoDB”. Algunas de las operaciones básicas más esenciales son insertar un nuevo documento (
                    em create
                    |), obtener un documento (
                    em read
                    |), actualizar un documento existente (
                    em update
                    |) y eliminar un documento (
                    em delete
                    |); siendo llamadas operaciones 
                    em CRUD.
          .col-lg-5.mb-4.mb-lg-3.p-4
            img(src='@/assets/curso/temas/tema5/img5-1.svg', alt='Servidor')
  
    h3(data-aos="fade-right").mb-5
      i.fas.fa-square.cac.me-3
      |Operaciones CRUD

    p.mb-5(data-aos="fade-left") En una base de datos de tipo NoSQL se realizan también las operaciones 
      em CRUD 
      |como lo son: guardar, modificar, eliminar y consultar documentos de la base de datos. A continuación, se describen cada una de ellas:

    .row.justify-content-center.mb-5
      .col-md-8(data-aos="zoom-in")
        ImagenInfograficaB.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema5/img5-2.svg', alt='CRUD')
              
          div(x="86%" y="13%" tooltip="C" numero="+")
            .h5.mb-4 Guardar datos en MongoDB
            p La base de datos MongoDB dispone de los siguientes métodos para realizar la inserción de datos:
            ol
              li.mb-3
                i.fas.fa-square.cac.me-3
                |
                b
                  em db.collection.insertOne()#[br]
                |Este método es implementado para insertar un solo documento dentro de la colección, en caso de no existir dicha colección el código construirá una.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |
                b
                  em db.collection.insertMany()#[br]
                |Este método es implementado para insertar varios documentos en la colección.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |
                b
                  em db.collection.insert()#[br]
                |Este método es multifuncional, es usado para insertar un documento o varios documentos dentro de la colección.

          div(x="86%" y="38%" tooltip="R" numero="+")
            .h5.mb-4 Consultas
            p En MongoDB también se puede realizar una búsqueda de todos los documentos dentro de una colección por medio del método 
              em Find()
              |, como en el caso de SQL sería un 
              em SELECT * FROM.
            ol
              li.mb-3
                i.fas.fa-square.cac.me-3
                |
                b
                  em db.collection.findOne()
                br
                |Este método se implementa para retornar la búsqueda de un único documento.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |
                b
                  em db.collection.find().pretty()
                br
                |Este método se implementa para que el resultado retorne un formato de fácil lectura.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |
                b
                  em Condición AND en MongoDB
                br
                |Este operador $and en MongoDB permite la comparación de dos documentos y retorna el resultado cuando las condiciones coinciden.

          div(x="86%" y="62%" tooltip="U" numero="+")
            .h5.mb-4 Modificación de datos en MongoDB
            p La base de datos MongoDB dispone de los siguientes métodos para realizar la modificación de datos:
            ol
              li.mb-3
                i.fas.fa-square.cac.me-3
                |
                b
                  em db.collection.updateOne()
                br
                |Este método es usado para modificar un único documento dentro de la colección.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |
                b
                  em db.collection.updateMany()
                br
                |Este método se implementa para modificar todos los documentos que coindicen con el filtro aplicado.

          div(x="86%" y="87%" tooltip="D" numero="+")
            .h5.mb-4 Eliminación de datos en MongoDB
            p MongoDb nos brinda dos métodos para la eliminación de datos dentro de una colección; a continuación, se explica cada uno de los métodos:
            ol
              li.mb-3
                i.fas.fa-square.cac.me-3
                |
                b
                  em db.collection_name.deleteOne()
                br
                |Este método es implementado para eliminar un solo documento de la colección.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |
                b
                  em db.collection_name.deleteMany()
                br
                |Este método se implementa para la eliminación de todos los documentos dentro de la colección, en caso de aplicar un filtro solo eliminará los documentos que coincidan con la condición.

    .col-lg-10.mx-auto.mb-5(data-aos="flip-up")
      .tarjeta.color-primario.img2-4.p-4
        .row.justify-content-center.align-items-center
          .col-3.col-sm-2.col-lg-1
            figure
              img(src="@/assets/curso/temas/tema5/img5-3.svg" alt="CRUD")
          .col-auto
            .row.justify-content-between.align-items-center
              .col-auto.mb-3.mb-sm-0
                p.mb-0.text-small Para profundizar un poco más en las operaciones CRUD se le invita revisar el documento anexo.
              .col.mb-3.mb-sm-0
                a.boton.color-acento-contenido(:href="obtenerLink('downloads/Anexo2.docx')" target="_blank" type="application/pdf")
                  span(style='color:#12263F !important') Descargar 
                  i.fas.fa-file-download(style='color:#12263F !important')

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      |Índices

    p.mb-5(data-aos="fade-right") Se abordará ahora el concepto de índices en MongoDB, así como su sintaxis y un ejemplo de este.

    .row.justify-content-center.mb-5
      .col-md-10(data-aos="zoom-in")
        ImagenInfograficaB.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema5/img5-4.svg', alt='Índices')
              
          div(x="69%" y="22%" tooltip="1" numero="+")
            p Los índices en MongoDB se implementan para brindar una eficiencia durante la ejecución de las diferentes consultas que son activadas desde el cliente. En caso de no implementarse índices en la base de datos de MongoDB se tendría que realizar un escaneo completo de todo el documento presente en las colecciones en busca de la obtención de un resultado, gastando así mucho más tiempo y recursos, utilizando índices se puede seleccionar la colección adecuada evitando el escaneo competo de todas las colecciones. Los índices son creados a nivel de colección.

          div(x="69%" y="42%" tooltip="2" numero="+")
            h5 
              em db.collection_name.createIndex()
            p Este método se implementa para construir un índice en la colección de documentos. Permite además la creación de índices adicionales utilizando el método 
              em createIndex()
              | con el objetivo de respaldar la consultas y operaciones.

            .row.justify-content-center.align-items-center
              .col-lg-10
                .titulo-sexto.color-acento-contenido.cfc(data-aos="fade-left")
                  h5(style='color:#12263F !important') Sintaxis
                  p.mb-0(style='color:#12263F !important') El 1 (uno) representa el orden ascendente y el -1 representa el orden descendente.#[br]#[br]
                  p.mb-0(style='color:#12263F !important')
                    em db.collection_name.createIndex({keyname:1 or -1})

            h5
              em db.collection_name.getIndexes()
            p Este método se implementa para mostrar la descripción de todos los índices de la colección.
                    
            .row.justify-content-center.align-items-center
              .col-lg-10
                .titulo-sexto.color-acento-contenido.cfc(data-aos="fade-left")
                  h5(style='color:#12263F !important') Sintaxis
                  p.mb-0(style='color:#12263F !important')
                    br
                    em db.collectionname.getIndexes()

          div(x="69%" y="62%" tooltip="3" numero="+")
            .row
              .col-md-6
                h5.mb-4 Ejemplo del método 
                  em db.collection_name.createIndex()
                p El índice se crea en orden ascendente.
                figure
                    img(src='@/assets/curso/temas/tema5/img5-5.svg', alt='Ejemplo 1-1')
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema5/img5-6.svg', alt='Ejemplo 1-2')

          div(x="69%" y="82%" tooltip="4" numero="+")
            .row
              .col-md-4
                h5.mb-4 Ejemplo del método 
                  em db.collection_name.getIndexes()
                p 
                  em db.orders_detail.getIndexes()
              .col-md-8
                figure
                  img(src='@/assets/curso/temas/tema5/img5-7.svg', alt='Ejemplo 2')

    h3(data-aos="fade-right").mb-5
      i.fas.fa-square.cac.me-3
      |Validación de 
      em scripts

    .row.align-items-center.mb-5
      .col-lg-1.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/img5-8.svg', alt='Código')
      .col-lg-11.col-sm-10(data-aos="fade-left")
        p.mb-0 El comando de validación verifica la corrección de los datos e índices de una colección y devuelve los resultados. Además, este comando también puede encontrar inconsistencias en la colección y corregirlas si es posible.

    .row.justify-content-center.mb-5
      .col-md-9(data-aos="fade-right")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Las inconsistencias de un índice incluyen:")
            ol
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Un índice es multiclave pero no hay campos multiclave.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Un índice tiene multikeyPaths que cubren campos que no son multiclave.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Un índice no tiene multikeyPaths pero hay documentos de varias claves.
            p Si se detectan inconsistencias por parte del 
              b
                em db.colección.validar() 
              |comando, se devuelve una advertencia y el indicador de reparación en el índice se establece en verdadero.
            
          .row.justify-content-center(titulo="Sintaxis:")
            .col-md-10
              .titulo-sexto.color-acento-contenido
                h5 Figura 12.
                br
                em Validación de script
              figure
                img(src='@/assets/curso/temas/tema5/img5-10.svg', alt='Código')
                figcaption Nota: adaptado de MongoDb. (s/f).

          .row(titulo="Ejemplos")
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span.cst 1
                |Para validar una colección:
            .row.justify-content-center
              .col-md-10
                .titulo-sexto.color-acento-botones.cfa5(data-aos="fade-left")
                  p.mb-0
                    em db.runCommand( { validate: "myCollection" } )

            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span.cst 2
                |Para realizar una validación completa de la colección:
            .row.justify-content-center
              .col-md-10
                .titulo-sexto.color-acento-botones.cfa5(data-aos="fade-left")
                  p.mb-0
                    em db.runCommand( { validate: "myCollection", repair: true } )|

            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span.cst 3
                |Para reparar la colección:
            .row.justify-content-center
              .col-md-10
                .titulo-sexto.color-acento-botones.cfa5(data-aos="fade-left")
                  p.mb-0
                    em db.runCommand( { validate: "myCollection", repair: true } )

            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span.cst 4
                |Para validar los metadatos en la colección:
            .row.justify-content-center
              .col-md-10
                .titulo-sexto.color-acento-botones.cfa5(data-aos="fade-left")
                  p.mb-0
                    em db.runCommand( { validate: "myCollection", metadata: true } )
      .col-md-3.mb-sm-4.order-sm-first.order-lg-last(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema5/img5-9.png', alt='Código')

    .row.justify-content-center.mb-5
      .col-md-10(data-aos="flip-up")
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5.img511
          .row.m-0.align-items-center.justify-content-between
            .col-lg-10
              .contenedor-dashed.p-4
                .bloque-texto-a__texto.p-4
                  h4 Herramientas de depuración
                  p.mb-0 Cuando se aborda la temática de depuración de datos se hace referencia al conjunto de procesos necesarios para la preparación y transformación de datos procedentes de distintas fuentes para su análisis.

    p.mb-5(data-aos="fade-right") Principales herramientas de depuración de datos:

    .row.justify-content-center.mb-5
      .col-lg-2.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/img5-12.svg', alt='Código binario')
      .col-lg-8.col-sm-10(data-aos="fade-left")
        ol
          li.mb-3
            i.fas.fa-square.cac.me-3
            |
            em OpenRefine
            |, es una herramienta 
            em opensource
            |, su objeto es mejorar la calidad de los datos y su respectiva estructura corrigiendo errores comunes, datos incompletos, duplicidades o inconsistencias.
          li.mb-3
            i.fas.fa-square.cac.me-3
            |
            em Talend Open Studio
            |, es una solución que es distribuida por medio de código abierto que integra un conjunto de herramientas ETL. Diseñadas fundamentalmente para extraer, depurar y transformar conjunto de datos.
          li.mb-3
            i.fas.fa-square.cac.me-3
            |
            em Mr Data Converter
            |, es una aplicación web que permite convertir datos que se encuentran en formato CSV o 
            em Excel 
            |a otros formatos como CSV, JSON, HTML y XML.
          li.mb-3
            i.fas.fa-square.cac.me-3
            |
            em Beautify Converters
            |, permite convertir datos a formatos JSON, SQL, CSV o Excel, entre otros. Pertenece a la colección de herramientas online gratuitas de 
            em Beautify Tools.

    h3(data-aos="fade-right").mb-5
      i.fas.fa-square.cac.me-3
      |Herramientas de versionamiento de bases de datos

    .row.align-items-center.mb-5
      .col-lg-1.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/img5-13.svg', alt='Código')
      .col-lg-11.col-sm-10(data-aos="fade-left")
        p.mb-0 Su objetivo principal es mantener el control de todos los cambios realizados sobre la base de datos, almacenando la data de los mismos como lo es; autor, fecha, cambio, etc., relacionando dichos cambios a los desarrollos realizados sobre la aplicación e integrándolos con el propio control de versiones del código fuente.

    .bloque-texto-g.cfc.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/img5-14.png')})`}"
      )
      .bloque-texto-g__texto.p-4.borde-dashed
        h4 Características
        br
        br
        ol
          li.mb-3
            i.fas.fa-square.cac.me-3
            |Ejecución; cuando ya sea realizando de forma manual cada uno de los eventos (realizando la ejecución mediante comandos), o automática por medio de un 
            em framework.
            br
          li.mb-3
            i.fas.fa-square.cac.me-3
            |Lectura de ficheros; todos los cambios ejecutados en la base de datos son almacenados en ficheros, que la herramental 
            em liquibase
            | los llama 
            em Changelogs.
            br
          li.mb-3
            i.fas.fa-square.cac.me-3
            |Validación con la base de datos; una vez 
            em liquibase 
            |sepa qué cambios existen en tus 
            em changelogs
            |, los cruza con su tabla interna llamada 
            em DATABASECHANGELOG
            |, la principal tabla principal de versiones/cambios que se crea durante la primera ejecución.
            br
          li.mb-3
            i.fas.fa-square.cac.me-3
            |Aplicación de cambios; cuando se tiene claridad en los cambios a realizar, se debe ejecutar y actualizar la tabla de versiones.

    .col-lg-10.mx-auto.mb-5(data-aos="flip-up")
      .tarjeta.color-primario.img2-4.p-4
        .row.justify-content-around.align-items-center
          .col-md-1.col-sm-2
            img(src="@/assets/curso/temas/tema5/img5-15.svg" alt="Ruedas dentadas")
          .col-md-9.col-sm-10
            h4.mb-1 Uso y configuración
            p.text-small ¿Qué es el 
              em changelog
              |?: es un fichero que contiene todos los cambios que se requieren aplicar en la base de datos. Estos ficheros pueden ser XML, YAML, JSON o SQL; para conocer algunos ejemplos de este puede consultar el documento anexo.
          .col-md-2
            a.boton.color-acento-contenido(:href="obtenerLink('downloads/Anexo3.docx')" target="_blank" type="application/pdf")
              span(style='color:#12263F !important') Descargar 
              i.fas.fa-file-download(style='color:#12263F !important')

    p.mb-5 En el siguiente video se puede observar el proceso de construcción de una base de datos en un motor de bases de datos NoSQL:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/h-iS3eNZGvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    .row.justify-content-center.align-items-center
      .col-lg-8(data-aos="flip-up")
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: rgba(255, 179, 11, .15)")
          p.mb-0 Tenga en cuenta que el componente formativo dispone de más recursos que se ubican en este, para ello diríjase al menú principal en donde encontrará entre otros, la síntesis, una actividad didáctica y el material complementario.

</template>

<script>
export default {
  name: 'Tema3',
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
