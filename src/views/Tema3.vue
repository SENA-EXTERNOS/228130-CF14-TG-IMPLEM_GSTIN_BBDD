<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tipos de BD NoSQL

    .bloque-texto-izquierda.mb-5
      .bloque-texto-a.bloque-texto-3.p-4(data-aos="zoom-in" style="background-color: #FFFFFF")
        .row.m-0.align-items-center.justify-content-between
          .col-lg-7.order-lg-first.order-sm-last
            .contenedor-dashed.p-3
              .bloque-texto-a__texto.p-4
                p.mb-0 Dentro de las bases de datos no relacionales, se encuentran distintos modelos o tipos de implementaciones. Este grupo de bases de datos no relacionales NoSQL, desempeñan funciones para diferentes ambientes en particular y con necesidades también divergentes. Existen algunos tipos más comunes que otros, porque están orientadas a documentos, porque permiten mejor escalabilidad horizontal.
          .col-lg-5.mb-4.mb-lg-0.p-4
            img(src='@/assets/curso/temas/tema3/img3-1.png', alt='Gestores de BBDD NoSQL')

    h3(data-aos="fade-right").mb-4
      i.fas.fa-square.cac.me-3
      |Bases de datos basadas en clave valor

    p.mb-5(data-aos='fade-right') Las bases de datos basadas en clave-valor, son un tipo de base de datos NoSQL sencillo, que sirve para insertar y consultar datos.
    p.mb-5(data-aos="fade-right") A continuación, se presentan algunas características para tener en cuenta con relación a las bases de datos basadas en clave-valor:
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo='b')
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            h4 Definición
            p.mb-0 El concepto ‘clave-valor’ significa que los datos se almacenan como una colección de pares; la clave identifica de forma única la colección, y el valor contiene los datos y se ordenan según la clave.
              br
              br
              | Básicamente, el almacenamiento de clave-valor, determina el equilibrio óptimo entre la actualización de datos, la inserción, y el rendimiento de recuperación.
          .col-md-4.col-sm-5
            figure
              img(src='@/assets/curso/temas/tema3/img3-2.svg', alt='BBDD NoSQL')
            
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            h4 Ejemplo bases de datos basadas en clave valor
            p.mb-3 Suponer que se requiere almacenar datos de una persona, como su cédula, nombres, apellidos, correo y varios números de teléfono, y que, por ejemplo, necesita guardar los datos para las siguientes personas:
            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th Persona 1
                    th Persona 2
                tbody
                  tr
                    td 
                      b Cédula: 
                      |1029283762
                    td 
                      b Cédula: 
                      |98765322
                  tr
                    td 
                      b Nombre: 
                      |JUAN CARLOS
                    td 
                      b Nombre: 
                      |DANIELA
                  tr
                    td 
                      b Apellidos: 
                      |MARTINEZ
                    td 
                      b Apelldos: 
                      |VELEZ LEMOS
                  tr
                    td 
                      b Correo: 
                      |juancho@nerss.et
                    td 
                      b Correo: 
                      |dnala@nerss.et
                  tr
                    td 
                      b Teléfono: 
                      |3150817273
                    td
                  tr
                    td 
                      b Teléfono: 
                      |3168272372
                    td
            p.mb-0 Se toma la cédula como una especie de llave para identificar a una persona, es decir, el documento es el identificador único para cada persona y no hay dos personas con el mismo número de documento.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema3/img3-3.svg', alt='Clave-Valor')

        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            h4.mb-4 Más posibilidades
            p.mb-4 En la misma base de datos se necesita guardar datos de carros, siendo la placa lo que permite identificar al vehículo; entonces, los datos a guardar serían:
            .row.justify-content-center.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema3/img3-4.svg', alt='Datos automóvil')
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema3/img3-3.svg', alt='Clave-Valor')

        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 La base de datos sería:
            

          .row.justify-content-center.mb-5
              .col-md-6
                .tabla-a.color-acento-contenido
                  table
                    thead
                      tr
                        th Clave
                        th Valor
                    tbody
                      tr
                        td persona/cedula
                        td 1029283762
                      tr
                        td persona/1029283762/apellidos
                        td MARTINEZ
                      tr
                        td persona/1029283762/correo
                        td juancho@nerss.et
                      tr
                        td persona/1029283762/teléfono
                        td 3150817273
                      tr
                        td persona/1029283762/teléfono
                        td 3168272372
                      tr
                        td carro/placa
                        td MSR-13
                      tr
                        td carro/MSR-13/modelo
                        td 2015
              .col-md-6
                .tabla-a.color-acento-contenido
                  table
                    thead
                      tr
                        th Clave
                        th Valor
                    tbody
                      tr
                        td carro/MSR-13/marca
                        td MAZDA
                      tr
                        td carro/MSR-13/tipo
                        td SEDAN
                      tr
                        td persona/cedula
                        td 98765322
                      tr
                        td persona/98765322/nombres
                        td DANIELA
                      tr
                        td persona/98765322/apellidos
                        td VELEZ LEMOS
                      tr
                        td persona/98765322/correo
                        td dnala@nerss.et
          p.mb-0 Estas bases de datos son óptimas para consultas en ambientes de respuesta rápida, para aplicaciones de tiempo real, como sistemas de telefonía IP o sistemas de 
            em chats
            |.

        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            h4 Listado de las bases de datos más reconocidas
            
            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th Nombre del SGBD
                    th Descripción
                tbody
                  tr
                    td Cassandra DB
                    td Apache Cassandra es una base de datos distribuida NoSQL de código abierto en la que confían miles de empresas por su escalabilidad y alta disponibilidad sin comprometer el rendimiento. La escalabilidad lineal y la tolerancia a fallas comprobada en 
                      em hardware 
                      |básico o infraestructura en la nube la convierten en la plataforma perfecta para datos de misión crítica. <a href="https://cassandra-apache-org.translate.goog/_/index.html?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=sc" target="_blank" class="cta"><u>Sitio Web de Apache Cassandra.</u></a>
                  tr
                    td Redis
                    td 
                      em Redis
                      |, que significa 
                      em remote dictionary server
                      |; es una base de datos de clave-valor gestionado en código abierto. Se caracteriza por sus grandes capacidades básicas y los casos de uso funcionales.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema3/img3-5.svg', alt='BBDD NoSQL reconocidas')

    h3(data-aos="fade-right").mb-5
      i.fas.fa-square.cac.me-3
      |Bases de datos orientadas a documentos

    .bloque-texto-a.bloque-texto-4.p-4.mb-5(data-aos="zoom-in")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img(src='@/assets/curso/temas/tema3/img3-6.svg', alt='Persona trabajando en portátil')
        .col-lg-8
          .contenedor-dashed.p-4
            .bloque-texto-a__texto.p-4
              p.mb-3 Los SGBD con estas características, son denominados bases de datos documentales y funcionan en el marco de la definición de un “documento”; la mayoría de estos SGBD coinciden en cómo se almacena la información, empleando un formato estándar. Los formatos estándares más comunes o populares son JSON, BSON y XML. Se podría considerar este último tipo de formato, como el más utilizado en la actualidad y teniendo en cuenta lo anterior, profundizaremos un poco más sobre ellos:

    TabsA.color-primario.mb-5
      .tarjeta.tarjeta--gris.p-4(titulo="Formato XML")
        h4 Definición
        .row.justify-content-center
          .col-md-10.col-sm-10
            p XML, sigla en inglés de 
              em extensible markup language
              |, traducido como “lenguaje de marcado extensible” o “lenguaje de marcas extensible”, es un metalenguaje que permite definir lenguajes de marcas, desarrollado por el 
              em World Wide Web Consortium 
              |(W3C), utilizado para almacenar datos en forma legible. Proviene del lenguaje SGML y permite definir la gramática de lenguajes específicos (de la misma manera que HTML es, a su vez, un lenguaje definido por SGML) para estructurar documentos grandes. A diferencia de otros, el lenguaje XML da soporte a bases de datos, siendo útil cuando varias aplicaciones deben comunicarse entre sí o integrar información. (Wikipedia, 2021).

            h4 En base de datos relacional
            p Si se quisiera modelar esto en una base de datos relacional, seguramente se definiría una tabla para personas (con atributos nombre y correo) y una tabla para los correos, con dos relaciones a la tabla personal: una para el remitente y otra para el destino.
          .col-md-2.col-sm-2
            figure
              img(src='@/assets/curso/temas/tema3/img3-7.svg', alt='XML')

        .row.justify-content-center.align-items-center
          .col-lg-4
            .titulo-sexto.color-acento-contenido.cfc(data-aos="fade-left")
              p.mb-0 
                b Persona: 
                |(nombre, correo)
              p.mb-0
                b Correo: 
                |(asuntos y texto)

        p Sin embargo, en XML en lugar de tener filas en las tablas, cada correo es un archivo con la estructura dada en el ejemplo.

      .tarjeta.tarjeta--gris.p-4(titulo="Formato JSON")
        h4 Definición
        .row.justify-content-center
          .col-md-10.col-sm-10
            p Notación de objetos JavaScript JSON, (JavaScript Object Notation), es un formato de texto sencillo para el intercambio de datos. Se trata de un subconjunto de la notación literal de objetos de JavaScript, aunque, debido a su amplia adopción como alternativa a XML, se considera, desde el año 2019, un formato independiente del lenguaje.
              br
              br
              | En el formato JSON, hay que tener en cuenta cómo este se encuentra compuesto, según el tipo de datos:

            ol
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Cadenas de texto: al ser una secuencia de ninguno o más caracteres, se ponen entre doble comilla, como en lenguaje JavaScript. Ejemplo, “hola mundo”.
              li.mb-3
                i.fas.fa-square.cac.me-3
                | Números: se permiten números negativos y positivos, que también pueden contener partes no enteras separadas por puntos. Ejemplo, 654.321.
              li.mb-3
                i.fas.fa-square.cac.me-3
                |Arreglos: representan una lista con ninguno o más valores, los cuales pueden ser todos del mismo o de diferente tipo. Los valores separados por comas y el vector, entre llaves ([]). Ejemplo, [“Luis”,” Carlos”,” Julian”,99].
              li.mb-3
                i.fas.fa-square.cac.me-3
                | Booleanos: representan valores booleanos y pueden tener dos valores: true y false.
              li.mb-3
                i.fas.fa-square.cac.me-3
                | Valores nulos: representan el valor nulo (null).
              li.mb-3
                i.fas.fa-square.cac.me-3
                | Objetos: son colecciones no ordenadas de pares de la forma < nombre >:< valor >, donde el nombre debe ser separado por comas y puestos entre corchetes ({}).

          .col-md-2.col-sm-2
            figure
              img(src='@/assets/curso/temas/tema3/img3-8.svg', alt='JSON')

    h3(data-aos="fade-right").mb-5
      i.fas.fa-square.cac.me-3
      |Bases de datos no relacionales no documentadas

    .row.mb-5
      .col-lg-1.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img3-9.svg', alt='Monitor y persona')
      .col-lg-11.col-sm-10(data-aos="fade-left")
        p Las bases de datos no relacionales documentales, se caracterizan por el concepto de guardar la información con el modelo de clave-valor. Es por esta razón por lo que los documentos más comunes son en formato JSON; la diferencia fundamental de este tipo de bases de datos radica en que un documento se almacena en una clave en la BD correspondiente. Esta definición puede parecer abstracta y se complementa mejor su concepto, por medio de un ejemplo:

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo='b')
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Representación de los datos de una persona en un documento
            .row.justify-content-center.align-items-center.mb-4
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema3/img3-10.svg', alt='Datos en documento')
            p Note cómo “nombres” es la clave y “JUAN CARLOS” es el valor. De la misma forma como “edad” es la clave y 65 el valor.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema3/img3-11.png', alt='Carpetas')

        .row
          .col-md-8.mb-4.mb-md-0
            h4 Representación en formato BSON
            p.mb-5 Es la representación equivalente en binario.
            .row.justify-content-center.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema3/img3-12.svg', alt='BSON')
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema3/img3-13.png', alt='Código fuente')

        .row
          .col-md-6.mb-4.mb-md-0
            p La representación de JSON que se muestra en la tabla, es una representación en formato texto, y también se puede representar en formato binario (unos y ceros); a esta otra representación equivalente en binario, se le llama BSON; es una cadena de unos y ceros sin nada que la caracterice de más.
              br
              br
              |Ejemplo:
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img3-14.svg', alt='XML vs JSON')
                    
        .row
          .col-md-12.mb-4.mb-md-0
            h4 Bases de datos no documentadas
            p A continuación, un listado de las bases de datos más reconocidas:
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th Nombre del SGBD
                  th Descripción
              tbody
                tr
                  td Mongo DB
                  td MongoDB es un sistema gestor de base de datos orientado a documentos multiplataforma disponible en la fuente. Categorizado como un sistema gestor de base de datos NoSQL, MongoDB implementa documentos similares a JSON con esquemas opcionales. MongoDB fue construido por MongoDB Inc. y se obtiene bajo licencia pública del lado del servidor (SSPL).
                tr
                  td Raven DB
                  td RavenDB es una base de datos documental desarrollado en código abierto y además está integrada con el lenguaje C# y desarrollada por 
                    em hibernating rhinos
                    |. Es una base de datos multiplataforma compatible con 
                    em Windows, Linux 
                    |y 
                    em MacOS
                    |. RavenDB almacena datos como documentos JSON y soporta clústeres distribuidos con replicación maestro-maestro.

    h3(data-aos="fade-right").mb-5
      i.fas.fa-square.cac.me-3
      |Bases de datos orientadas a grafos

    p.mb-5(data-aos="fade-right") Un grafo es una colección de elementos “nodos”, que aportan información y relacionados mediante “aristas”, que son la conexión entre los nodos, y que pueden tener una dirección concreta (Macarrón, 2021).

    .row.justify-content-center.mb-5
      .col-md-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          br
          em Base de datos orientadas a grafos
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img3-15.svg', alt='Grafos')
          figcaption Nota: adaptado de Macarrón, (2021).
          
    .row.mb-4
      .col-lg-1.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img3-16.svg', alt='Código')
      .col-lg-11.col-sm-10(data-aos="fade-left")
        p Este es un tipo de base de datos muy diferente a los anteriores; maneja la información de una manera particular, empleando grafos y teoría de grafos. Cada nodo solo debe contener una sola columna, entonces se deben normalizar completamente las bases de datos y solo aplica para grafos de tipo binario; cada nodo solo se puede relacionar con otros dos nodos como máximo. Las ventajas de este tipo de bases de datos van enfocadas a la integridad de los datos y la optimización de consultas.
        p A continuación, un listado de las bases de datos más reconocidas:

    .row.justify-content-center
      .col-md-8(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          br
          em Bases de datos orientadas a grafos

        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th Nombre del SGBD
                th Descripción
            tbody
              tr
                td Neo4j
                td Neo4j es un sistema de bases de datos libre, implementado en Java. Gran parte de los programadores describen esta base de datos como un motor de persistencia embebido en Java, completamente transaccional que almacena los datos estructurándolos en forma de grafos en lugar de tablas.
              tr
                td Sones 
                  em GraphDB
                td Es una base de datos de gráficos, basada en estructura de grafos desarrollada por la empresa alemana sones GmbH.

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
