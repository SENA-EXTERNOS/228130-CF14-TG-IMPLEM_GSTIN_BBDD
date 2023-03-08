<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-a.bloque-texto-p.p-4.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          img(src='@/assets/curso/intro/img1.svg', alt='Personas cerca a un servidor')
        .col-lg-8(data-aos="fade-left")
          .contenedor-dashed.p-4
            .bloque-texto-a__texto.p-4
              p.mb-3 Apreciado aprendiz, bienvenido a este componente formativo, donde conocerá las bases de datos no relacionales y los gestores que permiten su administración, así como también, los diferentes modelos que se pueden manejar. Igualmente, aprenderá sobre los procedimientos y funciones de una base de datos. En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:


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
