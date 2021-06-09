<template>

    <div id="main" class="container bg-light text-center">
        <LoginComponent 
            msg="Faça seu login e entenda como funciona esta aplicação básica com Vue.js."
        />
    </div>
    
</template>

<script>
import LoginComponent from '@/components/login/LoginComponent.vue'

export default {
    name: 'Login',
    
    components: {
        LoginComponent,
    },
    
}
</script>

<style lang="scss" src="@/components/login/login.scss" scoped />