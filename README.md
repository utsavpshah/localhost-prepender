A very simple Chrome Extension which just prepends localhost before opening the URL(port) entered.
# Background
I am one of those developers who run many applications (i.e. Swagger-UI for couple of Java application, Keycloak, Jenkins, UI application etc.) on local machine. 
Now, if I have to open any of the application, either I will have to open any bookmark or type the complete URL i.e. ``` localhost:8080 ```
# Solution
Although Chrome has Bookmarks and Search History, I am too lazy to type ```localhost``` and take my hands off the Keyboard. I know it's pretty dumb solution, but that helped me solve my problem. This extension, which can be invoked via couple of ways.
* Press ``` Ctrl+Shift+F ``` (Configurable via manifest.json )
* Click on the icon
# Enhancements
* I also refer Swagger-UI for the API documentation. So, extend this to append URL for swagger-ui (swagger-ui.html)
* Take input from user to configure the shortcut to invoke this.