<template>
  <section id="footer">
    <div id="contacts">
      <div id="contacts--contact">
        <a class="email" href="mailto:lorydim44@gmail.com"><p>{{ mail }}</p></a>
        <a class="phone" href="tel:+33761149498"><p>{{ phone }}</p></a>
      </div>
      <div id="contacts--social">
        <a href="https://www.linkedin.com/in/dimitri-lory/" target="_BLANK"><img src="../assets/linkedin.svg" height="30" width="30"></a>
        <a href="https://github.com" target="_BLANK" class="github"><img src="../assets/github.png" height="30" width="30"></a>
        <div></div>
      </div>
    </div>
    <div id="mentions">
      <p>{{ mention }}</p>
    </div>
  </section>
</template> 

<script>

export default {
    name: 'Bottom',

    props: {
      mail: String,
      phone: String,
      mention: String
    },

    data() {
      return {
       
      }
    }
}

</script>

