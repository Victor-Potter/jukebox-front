<template>

  <div id="main" class="container-fluid p-5">

    <h1 id="title-project" class="fw-bold">{{ msg }}</h1>

    <div id="content-home" class="container-fluid mt-5">
      <h5 id="content-home-h1">
        Primeiro projeto da <strong>PttR Digital Agency</strong> com Vue.js e consumo em API.
      </h5>
      <p>
        Font-end .: Vue.js + Boostrap |
        Back-end .: Laravel + Mysql
      </p>
    </div>

  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="@/assets/scss/_main.scss" scoped/>
