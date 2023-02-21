<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestores de BD NoSQL

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-1.svg', alt='Código')
      .col-lg-11.col-sm-10(data-aos="fade-left")
        p Los sistemas de gestión de bases de datos DBMS (#[em Data Base Management System]), se refieren a un tipo de #[em software] muy específico, dedicado a servir de interfaz entre la base de datos, el usuario y las aplicaciones que la utilizan. El propósito general de los sistemas de gestión es el de administrar, de manera clara, sencilla y ordenada, un conjunto de datos que, posteriormente, se convertirán en información relevante para una organización.

    .bloque-texto-g.cfc.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img2-2.png')})`}"
      )
      .bloque-texto-g__texto.p-4.borde-dashed
        p Existen distintos objetivos que deben cumplir los SGBD.#[br]#[br]
        ol
          li.mb-3
            i.fas.fa-square.cac.me-3
            |#[b Abstracción de la información: ]
            |los SGBD ahorran a los usuarios detalles acerca del almacenamiento físico de los datos.#[br]#[br]
          li.mb-3
            i.fas.fa-square.cac.me-3
            |#[b Independencia: ]
            |consiste en la capacidad de modificar el esquema (físico o lógico) de una base de datos sin tener que realizar cambios en las aplicaciones que se sirven de ella.#[br]#[br]
          li.mb-3
            i.fas.fa-square.cac.me-3
            |#[b Consistencia:]
            |en aquellos casos en los que no se ha logrado eliminar la redundancia, será necesario vigilar que aquella información que aparece repetida se actualice de forma coherente; es decir, que todos los datos repetidos se actualicen de forma simultánea.#[br]#[br]
          li.mb-3
            i.fas.fa-square.cac.me-3
            |#[b Seguridad:]
            |la información almacenada en una base de datos puede llegar a tener un gran valor. Los SGBD deben garantizar que esta información se encuentre segura de permisos y grupos de usuarios que permiten otorgar diversas categorías de permisos.#[br]#[br]
          li.mb-3
            i.fas.fa-square.cac.me-3
            |#[b Manejo de transacciones:]
            |una transacción es un programa que se ejecuta como una sola operación. Esto quiere decir que luego de una ejecución en la que se produce una falla es el mismo que se obtendría si el programa no se hubiera ejecutado.#[br]#[br]
          li.mb-3
            i.fas.fa-square.cac.me-3
            |#[b Tiempo de respuesta:]
            |lógicamente, es deseable minimizar el tiempo que el SGBD demora en proporcionar la información solicitada y en almacenar los cambios realizados. (Treviño, Vega, Quirós & Acuña, 2019).

    .row.justify-content-center.mb-5
      .col-md-10(data-aos="flip-up")
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 En este sentido, la base de datos sólo sirve si existe un sistema que la gestione, un SGBD. En NoSQL, hay varios SGBD y la mayoría son de código libre o libre distribución. Es necesario tener en cuenta que, no obstante, pueden existir una gran variedad SGBD menos populares pero que pueden ser una buena opción en el momento de trabajar para 
            em Big Data.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-3.svg', alt='Gestores de BBDD')
      .col-lg-6.col-sm-5(data-aos="fade-left")
        p
          b Listado de algunos sistemas gestores de base de datos NoSQL:
        ol
          li.mb-3
            i.fas.fa-square.cac.me-3
            |MongoDB
          li.mb-3
            i.fas.fa-square.cac.me-3
            |Cassandra
          li.mb-3
            i.fas.fa-square.cac.me-3
            |Redis
          li.mb-3
            i.fas.fa-square.cac.me-3
            |Reven DB

    .col-lg-10.mx-auto
      .tarjeta.color-primario.img2-4.p-4.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema2/img2-5.svg")
          .col-auto
            .row.justify-content-between.align-items-center
              .col-auto.mb-3.mb-sm-0
                p.text-small Para conocer sobre la instalación de MongoBD y su configuración puede consultar el documento anexo.
              .col.mb-3.mb-sm-0
                a.boton.color-acento-botones(:href="obtenerLink('downloads/CF14_Anexo1.pdf')" target="_blank" type="application/pdf")
                  span(style='color:#12263F !important') Descargar 
                  i.fas.fa-file-download(style='color:#12263F !important')

</template>

<script>
export default {
  name: 'Tema2',
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
