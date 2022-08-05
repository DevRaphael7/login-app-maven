# LOGIN APP MAVEN

Simple FRONTEND project with Maven.

This is a simple project created with JSP, using TypeScript, SCSS and Browserify. 

You log in, a TOKEN will be returned by the backend, this token from your storage stored until the end of its validity. After the token expires, a new one will be generated, returned by the API.

API [backend repository]('https://github.com/DevRaphael7/login-node')

## How to run
    
    mvn jetty:run
    