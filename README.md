# heroku-quickstart-deploy

Author: [Lim Chooi Guan](https://www.linkedin.com/in/cgl88/) (Team Cloud Lead @ Scania AB, Senior Software Engineer)

Sample repo with quick start instructions on deploying a Dockerised app into Heroku.
Install the [CLI](https://devcenter.heroku.com/articles/heroku-cli) first.

```
heroku login
heroku plugins:install @heroku-cli/plugin-container-registry  
heroku container:login
```
Now create the app, here's the fun part!  TARGET and NAME are environment variables referenced in server.js
```
heroku create cg-hello
heroku config:set "TARGET=Cool Guy" "NAME=Amazing Person" --app cg-hello
heroku container:push web --app cg-hello --arg http_proxy=http://PROXY.IF.NEEDED.COM:8080,https_proxy=http://PROXY.IF.NEEDED.COM:8080
heroku container:release web --app cg-hello
heroku open --app cg-hello
heroku logs -t --app cg-hello
```

App is now visible at https://cg-hello.herokuapp.com/  

## Heroku container registry and runtime for Docker deploys  
https://devcenter.heroku.com/articles/container-registry-and-runtime

## Other useful links
https://github.com/heroku/heroku-container-registry  
https://medium.com/travis-on-docker/how-to-run-dockerized-apps-on-heroku-and-its-pretty-great-76e07e610e22
