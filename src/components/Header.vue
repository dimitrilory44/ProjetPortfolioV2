<template>
    <div id="header">
        <!-- <div class="alert alert-warning">
            <img src="../assets/travaux.png" width="30" height="30"/>
            <strong>Attention!</strong> Projet en cours de developpement
        </div> -->
        <b-navbar toggleable="lg" type="dark" v-if="window.width > 900">
            <slider :width="300" format="push" direction="left" :opacity="0.15" :links="Menu"></slider>
            <b-navbar-nav class="ml-auto profile">
                <b-dropdown
                    size="lg"  variant="link" toggle-class="text-decoration-none" no-caret no-flip right
                    >
                    <template #button-content>
                        <img src="../assets/avatar.jpg" class="avatar avatar-mini" alt="Dimitri LORY">                    
                    </template>                        
                    <b-dropdown-item href="tel:+33761149498">Appelez-moi</b-dropdown-item>
                    <b-dropdown-item href="mailto:lorydim44@gmail.com">Envoyez-moi un mail</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item href="/files/CV_Dimitri_3WA_2020.pdf" download target="_BLANK">
                        CV
                    </b-dropdown-item>
                </b-dropdown>
            </b-navbar-nav>
        </b-navbar>
        <b-navbar toggleable="lg" type="dark" v-else>
            <b-navbar-toggle target="nav-collapse bg-light ml-auto"></b-navbar-toggle>
            <b-dropdown
                size="lg"  variant="link" toggle-class="text-decoration-none mr-auto" no-caret no-flip right
                >
                <template #button-content>
                    <img src="../assets/avatar.jpg" class="avatar avatar-mini" alt="Dimitri LORY">                    
                </template>                        
                <b-dropdown-item href="tel:+33761149498">Appelez-moi</b-dropdown-item>
                <b-dropdown-item href="mailto:lorydim44@gmail.com">Envoyez-moi un mail</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item href="/files/CV_Dimitri_3WA_2020.pdf" download target="_BLANK">
                        CV
                </b-dropdown-item>
            </b-dropdown>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item v-for="menu in Menu" v-bind:key="menu" :href="menu.url" style="color:white">{{menu.text}}</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>        
    </div>
</template>

<script>
import Slider from '@jeremyhamm/vue-slider';

export default {
  name: 'Header',

  components: {
    'slider': Slider
  },

  data () {
    return {
        Menu: [
            {
                id: 1,
                text: 'Compétences',
                url: '#presentation'
            },
            {
                id: 2,
                text: 'Projet',
                url: '#projet'
            }
        ],

        window: {
            width: 0
        }
    }
  },

  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
    
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
    
  methods: {
    handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
    }
  }
}
</script>

<style src="../../public/style.css"></style>