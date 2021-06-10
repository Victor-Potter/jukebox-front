<template>
    <div id="main" class="container-fluid">
        <RegisterComponent />
    </div>
    
</template> 

<script>
import RegisterComponent from '@/components/register/RegisterComponent.vue'

export default {
    name: 'Register',
    components: {
        RegisterComponent,
    }
}
</script>

<style lang="scss" src="@/components/register/register.scss" scoped />
