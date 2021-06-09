<template>

    <div id="main" class="container-fluid mt-5">
        <div id="login-view" class="container m-4">
            <h1>Login - View</h1>

            <LoginComponent 
                msg="Faça seu login e entenda como funciona esta aplicação básica com Vue.js."
            
            />
        </div>
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