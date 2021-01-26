<template>
  <section id="competences" class="bloc">
        <h5 class="titre">Competences</h5>
        <carousel class="container-fluid d-flex justify-content-center carousel" :perPage="2" :mouse-drag="true" :autoplayTimeout="2000" :autoplay="true" :loop="true" :paginationPosition="bottom" 
        :perPageCustom="[[300, 2], [400, 2], [600, 2], [900, 4]]"
        >
          <slide>
            <img src="../assets/bootstrap_icon.png" width="80" heigth="80" alt="">
          </slide>
          <slide>
            <img src="../assets/logo.png" width="80" heigth="80" alt="">
          </slide>
          <slide>
            <img src="../assets/angular_icon.png" width="80" heigth="80" alt="">
          </slide>
          <slide>
            <img src="../assets/java8_icon.png" width="80" heigth="80" alt="">
          </slide>
          <slide>
            <img src="../assets/php7_icon.png" width="80" heigth="80" alt="">
            </slide>
          <slide>
            <img src="../assets/mySQL_icon.png" width="80" heigth="80" alt="">
          </slide>
        </carousel>
    </section> 
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
        Carousel,
        Slide,
    },
}
</script>