## Setup the app
Open the app in any IDE as webStorm, phpStrorm, IntelliJ, Visual Studio Code, etc..
Configure Mysql Database
Create mysql database named itemdb or import itemdb.sql

### Database setting dbscript.js
       
       {
        "host": 'localhost',
        "user": 'root',
        "password": '',
        "name": 'itemdb',
        "dialect": 'mysql',
        "port": 3306,
        "pool": {
            "max": 5,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        }
    };

## Run App

In the project directory, you can run:

### npm install
To install all the dependencies

### open a terminal and type node app.js forrunning the server
This command starts the server
Server started. listening to 3000 
1. POST  [http://localhost:3000/items](http://localhost:3000/items) Create an API that insert new Item, and respond the inserted record.
2. GET  [http://localhost:3000/items](http://localhost:3000/items) list the items with paging.
3. DELETE  [http://localhost:3000/items/:id](http://localhost:3000/items/123) Create an API that delete an item.
4. PATCH  [http://localhost:3000/items/:id](http://localhost:3000/items/124) Create an API that patch an item..

