Django frontend, for the helm `hello-chart` in
https://github.com/edgarsvitolins/hello_world_app_chart

Django web app on port 8000, with a single `'\'` endpoint.
Makes a (server side) call to URI in env variable `REACT_APP_BE_URI`,
wraps the return in a message:

>Django FE presents: {return from REACT_APP_BE_URI}

CI workflow creates `edgarsvitolins/hello_world_app_fe:main` image on dockerhub
https://hub.docker.com/r/edgarsvitolins/hello_world_app_fe