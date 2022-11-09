<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-a.bloque-texto-p.p-4.mb-5(data-aos="zoom-in")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img(src='@/assets/curso/intro/img1.svg', alt='Personas cerca a un servidor')
        .col-lg-8
          .contenedor-dashed.p-4
            .bloque-texto-a__texto.p-4
              p.mb-3 Estimado aprendiz, a través del presente componente formativo conocerá las bases de datos no relacionales y los gestores que permiten su administración, así como los diferentes tipos que se pueden manejar. Igualmente, aprenderá sobre los procedimientos y funciones de una base de datos. Lo invitamos a ver el siguiente video para documentarse sobre cada una de las temáticas comprendidas.
              p.mb-0 
                b ¡Muchos éxitos en este proceso de aprendizaje!

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
       
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
