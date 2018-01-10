const Sequelize = require('sequelize');
const connection = require('./dbscript');
let sequelize = new Sequelize(connection.name, connection.user, connection.password, {
    host: connection.host,
    port: connection.port,
    dialect: connection.dialect,
    pool: {
        max: connection.pool.max,
        min: connection.pool.min,
        acquire: connection.pool.acquire,
        idle: connection.pool.idle
    }
});

//Verifying connectivity
sequelize
    .authenticate()
    .then(() => {
        console.log('Database connection successfully.');
    })
    .catch(err => {
        console.error('Database connection failed:', err.message);
    });

//Set item table
const Item = sequelize.define('item', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: Sequelize.STRING,
    price: Sequelize.STRING,
    brand: Sequelize.STRING
}, {
    timestamps: false
});

//Add item table to the database
sequelize.sync()
    .then(() => {
        console.log('item table added successfully.');
    })
    .catch(err => {
        console.error('Problem occur while creating table:', err.message);
    });

module.exports = Item;
