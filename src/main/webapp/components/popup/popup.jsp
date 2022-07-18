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
    <div class="cd-popup flex-center" role="alert" popup-component>
        <div class="cd-popup-container">
            <p class="message color size" messagePopUp></p>
            <div class="cd-buttons flex-center">
                <button okBtn class="big-txt ok-btn size-button">OK</button>
            </div>
            <div class="cd-popup-close cd-popup-close-position flex-center" closeBtn>
                <p class="txt">
                    Close
                </p>
            </div>
        </div>
    </div>
    <script type="module" src="${pageContext.request.contextPath}/components/popup/script.js"></script>
</body>
</html>