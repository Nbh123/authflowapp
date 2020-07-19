# Auth Flow Service

## Before using

- Please make sure that you have:
 - node.js installed (https://nodejs.org/)
 - have mongodb installed and running locally (https://www.mongodb.com/)
   - Using Windows, just open the terminal at where you installed mongo and run `mongod.exe`
 - run npm install in your root project folder

## Usage

To run the project, please use a command line the following:
 *-* npm start
    - It will run the server at port 3600.
Or
If you are familiar with docker and have it istalled in your machine, please run as follows:
 - docker-compose build
 - docker-compose up
 - This will run the mongodb at port 27017.
 - This will run the server at port 3600.

Note:
- Using mongoose as a common service.
- Using Dockerfile and docker-compose configuration.

For detailed understanding of CRUD operations please see- Operations_guide.txt