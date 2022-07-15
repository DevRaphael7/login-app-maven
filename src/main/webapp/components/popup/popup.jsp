<%@page language="java" contentType="text/html" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/components/popup/style.css">
    <title>Popup Component</title>
</head>
<body>  
    <div class="cd-popup" role="alert" popup-component>
        <div class="cd-popup-container">
            <p messagePopUp></p>
            <ul class="cd-buttons">
                <li okBtn><a href="#0">OK</a></li>
            </ul>
            <h1 class="cd-popup-close">Close</h1>
        </div>
    </div>
    <script type="module" src="${pageContext.request.contextPath}/components/popup/script.js"></script>
</body>
</html>