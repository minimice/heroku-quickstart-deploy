# heroku-quickstart-deploy
Sample repo with quick start instructions on deploying a Dockerised app into Heroku

```
heroku create cg-hello
heroku container:push web --app cg-hello --arg http_proxy=http://proxyseso.scania.com:8080,https_proxy=http://proxyseso.scania.com:8080
heroku container:release web --app cg-hello
heroku open --app cg-hello
```

App is now visible at https://cg-hello.herokuapp.com/
