# Crystal System API

### .env
please create a .env file and add following key

```
JWT_SECRET=randomstringidswillbeusedtoencryptdecrypt
```

### DOCKER COMMANDS

#### to build docker container
````
docker compose build
````

#### to start docker container
````
docker compose up -d
````

#### to stop docker container
````
docker compose down
````

#### to navigate inside a docker container
````
docker exec -it CONTAINER_NAME_OR_ID bash
````

#### to see all active docker containers
````
docker ps
````

#### to see all active/inactive docker containers
````
docker ps -a
````

#### to check logs of a docker container
````
docker logs CONTAINER_NAME_OR_ID
````

### API ENDPOINT
````
http://localhost:3000/v1/
````

### NOTE
#### you need to register first from mentioned below endpoint of this REPO (please import postman file)
````
Register

POST /v1/auth/register
````

### POST MAN COLLECTION

[POSTMAN COLLECTION FILE](https://github.com/zohaibtariq/crystal-system/blob/main/postman/Crystal-Systems.postman_collection.json)

[POSTMAN ENVIRONMENT FILE](https://github.com/zohaibtariq/crystal-system/blob/main/postman/Crystal-Systems_ENV.postman_environment.json)
