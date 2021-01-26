<template>
  <section id="projet" class="bloc" style="margin: 0 auto">
        <h5 class="titre">Projet(s)</h5>
        <div class="content-block__effect container-fluid">
            <div class="portfolio-effect row"> 
                <div class="card portfolio-item portfolio-effect__item portfolio-item--eff1 col-lg-4 col-md-4 col-xs-12 d-flex justify-content-center" v-for="(projet, index) in projets" v-bind:key="projet.id" v-bind:index="index" style="margin: 0 auto 20px auto">
                    <img :src="projet.image" alt="Card image cap">
                    <div class="portfolio-item__info">
                        <h4 class="portfolio-item__header"><strong>{{projet.titre}}</strong></h4>
                        <p>{{projet.details}}</p>
                        <div class="portfolio-item__links">
                            <div class="portfolio-item__link-block">
                                <a class="portfolio-item__link" :href="projet.lien" title="Link Title" target="_BLANK">
                                    <i class="material-icons">link</i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>   
</template>

<script>
export default {
    data() {
        return {
            projets: [
                {
                    id: 1,
                    titre: "Projet Film",
                    image: require("../assets/projet1.png"),
                    details: "Développé en Vue.js/Firebase",
                    lien: "https://videotheque.dimitri-lory.fr"
                },
                {
                    id: 2,
                    titre: "Projet 2",
                    image: "https://via.placeholder.com/200x150",
                    details: "Projet en cours de reflexion",
                    lien: "#"
                }
            ]
        };
    }
    
}
</script>

<style lang="scss" src="../../public/effect.scss"></style>