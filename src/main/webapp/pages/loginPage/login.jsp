<%@page language="java" contentType="text/html" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style-login.css">
    <title>Document</title>
</head>
<body>
    <section class="flex-center full-h">
        <div class="card-login bg shadow size padd-10p relative" card-login>
            <h2>Login</h2>
            <form class="form" formLogin>
                <div class="fields-form fields-form-txt mag-top-10p">
                    <label>Nome: </label>
                    <input 
                        type="text" 
                        class="padd-5p" 
                        placeholder="Seu nome" 
                        usuario>
                </div>
                <div class="fields-form fields-form-txt mag-top-10p">
                    <label>Senha: </label>
                    <input 
                        type="text" 
                        class="padd-5p" 
                        placeholder="Sua senha" 
                        senha
                    >
                </div>
                <div class="mag-top-10p flex-center">
                    <button type="submit" class="btn-primary bg cl padd-5p full-w" id="btn-login">
                        Login
                    </button>
                </div>
            </form>
            <p errorMessage class="mag-top-10p error-message"></p>
            <span class="full-h flex-end"></span>
            <button class="absolute end padd-5p btn-secondary bg cl">
                Cadastrar
            </button>
        </div>
        <div class="hide" loading> 
            <%@include file="../../components/spinner-component/spinner.jsp" %>
        </div>
    </section>
    <script type="module" src="./scripts/login-page.script.js"></script>
</body>
</html>