<template>
  <section id="bg">
      <div class="wrapper container">
        <div class="typewriter">
          <h3>{{ nom }}</h3>
          <div class="typewriter-v2"><h3>{{ intitule }}</h3></div>
          </div>
          <!-- A revoir -->
        <!-- <a role="button" class="btn btn-primary button">Contact</a> -->
      </div>
    </section>
</template>

<script>
export default {
    name: 'Intitule',

    props: {
        nom: String,
        intitule: String
    }
}
</script>