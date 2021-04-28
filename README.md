# Introduction 

To run the server:

- npm install
- npm run start

App will start the server on http://localhost:3000

You can test responses with the usage of postman collection that is included in test/postman folder (of course you must replace the url endpoint with corresponding bug id in order to update and get by id request)

# TODO list
Due to lack of time the following points could be improved/implemented:

- add tests to increase covergage
- add coverage reporter to monitor code coverage
- add e2e test
- add api tests
- implement persistance (MongoDb, fileStorage) via some strategy pattern
- improve logging, introduce log levels, add configurable logging
- think about some Audit Logs mechanism to monitor requests
- add config service to enable different configurations (dev, stage, prod, local etc.)
- add better error handling
- add some middleware for token validation etc.