const connection = {
    //set properties
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

module.exports = connection;
