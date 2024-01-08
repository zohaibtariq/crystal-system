# Crystal System API

### .env
please create a .env file and add following key

```
NODE_ENV=development
PORT=3000
MONGODB_URL=mongodb://127.0.0.1:27017/crystalsystems
JWT_SECRET=thisisasamplesecret
JWT_ACCESS_EXPIRATION_MINUTES=1
JWT_REFRESH_EXPIRATION_DAYS=1
JWT_RESET_PASSWORD_EXPIRATION_MINUTES=1
JWT_VERIFY_EMAIL_EXPIRATION_MINUTES=1
# For testing, you can use a fake SMTP service like Ethereal: https://ethereal.email/create
SMTP_HOST=smtp.ethereal.email
SMTP_PORT=587
SMTP_USERNAME=eileen.wuckert25@ethereal.email
SMTP_PASSWORD=ew4UjT422FppfJAq82
EMAIL_FROM=support@crystal-system.eu
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
