<template>
<div>
  <Navbar/>
  <section class="section">
    <div class="container">
      <h1 class="title"><marquee behavior="alternate" direction="">Welcome To TodoApp, To see todos Login!</marquee></h1>
    </div>
  </section>
</div>
</template>

<script>
import Navbar from '~/components/Navbar';

export default {
  components: {
    Navbar,
  },
}
</script>

<style scoped>
h1{
  color: blue;
}
</style>

