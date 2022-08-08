<%@page language="java" contentType="text/html" pageEncoding="UTF-8" %>

<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="styles/"
    <title>Document</title>
</head>
<body>
    <%
        String isLocalHost = false ? 'http://localhost:9090/' : 'https://immense-fortress-83540.herokuapp.com/'
        response.sendRedirect(isLocalHost + "projeto_faculdade/pages/loginPage/login.jsp");
    %>
</body>
</html>