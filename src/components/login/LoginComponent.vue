<template>
    <div id="main" class="container-fluid mt-5 shadow border border-2">

        <div id="login" class="container row">

            <div class="container mt-3 p-2 col-sm-12 col-lg-12">
                <h1 class="fw-bold">Login</h1>
                <div class="fw-bold mt-4 p-3">{{ msg }}</div>
            </div>

            <div id="login-form" class="container-fluid p-5 col-sm-12 col-lg-12">
                
                <form>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-12">
                        <input type="email" class="form-control">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-12">
                        <input type="password" class="form-control">
                        </div>
                    </div>

                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-md-2 pt-0">Documento:</legend>
                        <div class="col-md-10">
                            <div id="login-check-btn" class="container p-1">
                                <input class="form-check-input" type="radio" name="gridRadios" value="option1">
                                <label class="form-check-label" for="gridRadios1">CPF</label>
                            </div>
                            <div id="login-check-btn" class="container p-1">
                                <input class="form-check-input" type="radio" name="gridRadios" value="option2">
                                <label class="form-check-label" for="gridRadios2">CNPJ</label>
                            </div>                        
                        </div>
                    </fieldset>
                    
                    <div class="container mt-4">
                    <button id="login-btn-submit" type="submit" class="btn btn-success">Sign in</button>
                    <hr>
                    <a href="#">Faça seu cadastro aqui</a>
                    </div>
                </form>

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