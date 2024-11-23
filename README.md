# Swagger Petstore Sample

## Overview
This is the pet store sample hosted at https://petstore3.swagger.io. For other versions, check the branches.
We welcome suggestion both the code and the API design.
To make changes to the design itself, take a look at https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml.

This is a java project to build a stand-alone server which implements the OpenAPI 3 Spec.  You can find out
more about both the spec and the framework at http://swagger.io.

This sample is based on [swagger-inflector](https://github.com/swagger-api/swagger-inflector), and provides an example of swagger / OpenAPI 3 petstore.

### To run (with Maven)
To run the server, run this task:

```
mvn package jetty:run
```

This will start Jetty embedded on port 8080.

### To run (via Docker)

Expose port 8080 from the image and access petstore via the exposed port. You can then add and delete pets as you see fit.


*Example*:

```
docker build -t swaggerapi/petstore3:unstable .
```

```
docker pull swaggerapi/petstore3:unstable
docker run  --name swaggerapi-petstore3 -d -p 8080:8080 swaggerapi/petstore3:unstable
```
# Playwright tests

### Run API-Playwright tests using Docker
Build the Playwright Test Docker Image
``` 
docker build -t playwright-tests -f Dockerfile-playwright . 
```
Execute Playwright Tests in a Containerized Environment
```
docker run --rm --name playwright-tests playwright-tests
```

### Install & run playwright tests without using docker ( optional )
Change your Directory to `swagger-petstore` then `tests`
```
 cd Pet_API/swagger-petstore
 ```
 install the dependencies
 ```
 npm install
```
 install necessary browser binaries required by Playwright to run the tests
```
npx playwright install
```
Running the Playwright Tests
```
npx playwright test
```
### Test Results
![Screenshot 2024-11-23 154912](https://github.com/user-attachments/assets/6cae91e8-b4ec-435d-ab4e-74805a4f0295)

### Testing the server
Once started, you can navigate to http://localhost:8080/api/v3/openapi.json to view the Swagger Resource Listing.
This tells you that the server is up and ready to demonstrate Swagger.

### Using the UI
There is an HTML5-based API tool bundled in this sample--you can view it it at [http://localhost:8080](http://localhost:8080). This lets you inspect the API using an interactive UI.  You can access the source of this code from [here](https://github.com/swagger-api/swagger-ui)

