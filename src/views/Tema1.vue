<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Bases de datos NoSQL (no relacional)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-sm-2
        figure
          img(src='@/assets/curso/temas/tema1/img1-1.svg', alt='Datos')
      .col-lg-11.col-sm-10
        p.mb-0 El término NoSQL tiene un significado particular, 
          em not only SQL
          |. Generalmente estos se implementan en la agrupación de bases de datos diferentes a las tradicionales. El avance tecnológico a nivel mundial y las temáticas sobre 
          em big data, cloud computing, IoT, 
          |etc., han realizado aportes significativos para el desarrollo de la tecnología NoSQL.

    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5.img1-2(data-aos="zoom-in")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .contenedor-dashed.p-4
            .bloque-texto-a__texto.p-4
              p.mb-0 Los nuevos requerimientos a nivel internacional en la actualidad son: una disponibilidad total, tolerancia a fallos, gran capacidad de almacenamiento para un gran volumen de información, buen desempeño con futuro crecimiento y escalabilidad horizontal, manejo de grandes volúmenes de datos estructurados y no estructurados, implementación de nuevas metodologías de consultas, libertad para manejar nuevos esquemas y datos con control total.
      
    p.mb-5 Debido a que las bases de datos relacionales no respondían de forma adecuada a la necesidad para la exigencia en tiempos de demanda, nacieron las bases de datos NoSQL. A continuación, se presentan algunos puntos importantes a tener en cuenta.

    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-4
        figure
          img(src='@/assets/curso/temas/tema1/img1-3.svg', alt='Estantes')
      .col-lg-8.col-sm-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Definición de términos relevantes")
            p.mb-3
              b Escalabilidad: 
              |es la capacidad que tiene un sistema de ser configurado en 
              em software 
              |o 
              em hardware
              |, para mejorar la respuesta a las exigencias o nuevas demandas de capacidad de procesamiento o almacenamiento (conservando las mismas funcionalidades). Actualmente, se usa mucho el término ‘escalabilidad vertical’, para referirse a este tipo de escalabilidad.
            p.mb-3
              b Escalabilidad horizontal: 
              |consiste en potenciar el rendimiento del sistema desde un aspecto de mejora global, a diferencia de aumentar la potencia de una única parte de este. Este tipo de escalabilidad se basa en el modularidad de su funcionalidad (Sánchez, et al, 2020), es decir, que las funcionalidades se puedan extender con la misma facilidad con la que mejoran el rendimiento y capacidad.
            p.mb-3
              b Escalabilidad vertical y horizontal: 
              |las bases de datos no relacionales están diseñadas para ofrecer sistemas con altas capacidades de escalabilidad vertical y horizontal.

          div(titulo="Generalidades")
            p.mb-4 Este tipo de bases de datos no relacional está ideal para construir aplicaciones modernas, gracias a que está conformada por esquemas flexibles y diseñadas específicamente para modelos de datos especiales. Son reconocidas en el desarrollo de 
              em software 
              |al ser de fácil construcción y manejo, permitiendo una gran escalabilidad y funcionalidad en el rendimiento. Este tipo de bases de datos no relacional usa una gran variedad de modelos de datos conformados por: documentos, clave - valor, grafos, memoria y búsqueda.

            .row.justify-content-center.mb-3
              .col-md-7
                .cajon.color-primario.p-4.mb-4
                  p Las bases de datos no relacionales también son llamadas bases de datos NoSQL, estas no disponen de un identificador que sirva para relacionar entre un conjunto de datos otro. La información se organiza generalmente mediante documentos, es una base de datos muy práctica cuando no se tiene claridad en el esquema de datos que se va a implementar.
                p Un tipo de bases de datos no relacional es la que implementa clave – valor, es una de las más prácticas en cuanto a su funcionalidad. Cada elemento dentro de la base de datos está identificado por una llave única que la hace más eficiente al momento de recuperar la información, habitualmente la información es almacenada como un objeto binario (BLOB) y se caracterizan en su eficacia al momento de escribir o leer la información.
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema1/img1-4.svg', alt='BBDD NoSQL')

          div(titulo="Ventajas de las bases de datos no relacionales (NoSQL)")
            p.mb-4 La forma de almacenamiento de la información presenta ciertas ventajas a comparación de las bases de datos relacionales:
            ol
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Se ejecutan en máquina con pocos recursos.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Escalabilidad horizontal, en búsqueda de un mejor rendimiento se pueden añadir nuevos nodos indicándole al sistema los nodos que están disponibles.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Manejan gran cantidad de datos debido a que implementan una estructura distribuida en varios casos mediante tablas 
                em hash.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |No generan cuellos de botella; el principal problema de los sistemas SQL es que se requiere trascribir cada sentencia que se va a ejecutar y cada sentencia necesita un nivel de ejecución aún más complejo, en donde muchas peticiones pueden volver lento al sistema.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Algunos tipos de almacén de bases de datos NoSQL incluyen diferentes tipos de almacenes como por ejemplo el almacén de columnas, de documentos, de 
                em key-value store
                |, de gráficos, de objetos, de XML y muchos otros modos de almacén de datos.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Algunos tipos de almacén de bases de datos NoSQL incluyen almacenes de columnas, de documentos, de valores de claves, de gráficos, de objetos, de XML y otros modos de almacén de datos.

          div(titulo="Desventajas de las bases de datos no relacionales (NoSQL)")
            ol
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Este tipo de bases de datos no se admiten funciones de fiabilidad.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Complejidad en el sistema para incrementar el grado de características de las bases de datos; el desarrollador debe implementar su propio código.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Incompatibilidad con consultas SQL; significa que se necesita construir su propio lenguaje para ejecutar las diferentes consultas.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |No son transaccionales.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
