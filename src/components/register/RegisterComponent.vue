<template>
    <div id="main" class="container-fluid">

        <div class="container mt-5 mb-5 shadow border border-2 bg-light">

            <div class="container-fluid mt-5 p-5">
                <h3>Novo Cadastro</h3>
                <hr>
                <div class="container mt-5 p-5">
                    
                    <form class="row g-3 fw-bold">

                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Nome Completo</label>
                            <input type="text" class="form-control" placeholder="Seu nome">
                        </div>

                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">E-mail</label>
                            <input type="email" class="form-control">
                        </div>

                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Senha</label>
                            <input type="password" class="form-control">
                        </div>

                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Cpf</label>
                            <input type="email" class="form-control">
                        </div>

                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Cnpj</label>
                            <input type="password" class="form-control">
                        </div>

                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Endereço</label>
                            <input type="text" class="form-control" placeholder="Av, Rua...">
                        </div>

                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Complemento</label>
                            <input type="text" class="form-control" placeholder="Condomínio, Bloco, Apto...">
                        </div>

                        <div class="col-md-1">
                            <label for="inputZip" class="form-label">UF</label>
                            <input type="text" class="form-control">
                        </div>

                        <div class="col-md-5">
                            <label for="inputCity" class="form-label">Cidade</label>
                            <input type="text" class="form-control" >
                        </div>

                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Bairro</label>
                            <input type="text" class="form-control" >
                        </div>

                        <div class="col-md-2 mb-3">
                            <label for="inputZip" class="form-label">Cep</label>
                            <input type="text" class="form-control">
                        </div>
                        <!-- <div class="col-12">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox">
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                            </div>
                        </div> -->
                        <hr>
                        <div class="col-12">
                            <button type="submit" class="btn btn-success">Salvar</button>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    </div>
    
</template>

<script>
export default {
    name: 'RegisterComponent',
}
</script>

<style lang="scss" src="./register.scss" scoped />
