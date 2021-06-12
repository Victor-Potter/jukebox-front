<template>

    <div id="main" class="container-fluid">
        <DashboardComponent />
    </div>
    
</template>

<script>
import DashboardComponent from '@/components/dashboard/DashboardComponent.vue'

export default {
    name: 'Dashboard',
    components: {
        DashboardComponent,
    }
}
</script>