<template>
    <div id="main" class="container-fluid mt-5">

        <div id="login" class="container m-4 row">
            <div class="container-fluid m-2 col-sm-12 col-lg-12">
                <h4 class="fw-bold">Login do nosso sistema</h4>
                {{ msg }}
            </div>

            <div class="container-fluid m-2 col-sm-12 col-lg-12">



            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginComponent',
    props: {
        msg: String
    }

}
</script>

<style lang="scss" src="./login.scss" scoped />