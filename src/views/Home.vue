<template>

  <div class="container-fluid p-5 text-center">

    <div id="img-logotipo" class="container-fluid bg-transparent">
      <img class="img-fluid p-3" alt="pttr-digital-agency-logotipo" 
            src="@/assets/img/logotipo-fundo-branco-transparente.png"
            width="500" height="600">
    </div>
    
    <HelloWorld msg="[Project Test] - Jukebox"/>

  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',

  components: {
    HelloWorld
  },
}
</script>

<style lang="scss" src="@/components/hello-world.scss" scoped />
