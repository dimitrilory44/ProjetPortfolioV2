<template>
  <div id="app">
    <Header/>
    <intitule nom="Dimitri LORY" intitule="Développeur Full-Stack"></intitule>
    <Presentation/>
    <Competences/>
    <Projet/>
    <bottom mail="lorydim44@gmail.com" phone="07 61 14 94 98" mention="2021 | mentions légales"></bottom>
  </div>
</template>

<script>
import Header from './components/Header';
import Intitule from './components/Intitule';
import Presentation from './components/Presentation';
import Competences from './components/Competences';
import Projet from './components/Projet';
import Bottom from './components/Bottom';

export default {
  name: 'App',
  components: {
    Header,
    Intitule,
    Presentation,
    Competences,
    Projet,
    Bottom
  },
  data() {
    return {
          
    };
  },
}
</script>

<style src="../public/style.css"></style>