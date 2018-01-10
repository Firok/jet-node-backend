const express = require('express');
const router = express.Router();
let Item = require('../model');

//set pagination info variable
let pagination = {
    "totalResults": 0,
    "resultPerPage": 10,
    "currentPage": 1,
    "pages": 1
};

/* ===============================
 ROUTE
 ============================== */

// 1 insert new item.
router.post('/', function (req, res) {
    let id = req.body.id;
    let name = req.body.name;
    let price = req.body.price;
    let brand = req.body.brand;
    Item.create({id: id, name: name, price: price, brand: brand}).then(item => {
        res.status(201);
        res.json({"items": item});
    }).catch((err) => {
        res.status(400);
        res.json({message: err.message});
    });
});

//2 list the items with paging.
router.get('/', (req, res) =>
    Item.count().then(total => {
        let start = 0;
        pagination.totalResults = total;
        pagination.pages = Math.ceil(pagination.totalResults / pagination.resultPerPage);
        if (typeof req.query.page !== 'undefined')
            pagination.currentPage = req.query.page;
        if (pagination.currentPage > 1)
            start = (pagination.currentPage - 1) * pagination.resultPerPage;
        Item.findAll({offset: start, limit: pagination.resultPerPage}).then(items => {
            res.status(200);
            res.json({"items": items, "paginationInfo": pagination});
        }).catch((err) => {
            res.status(404);
            res.json({message: err.message});
        });

    }).catch(err => {
        res.status(404);
        res.json({message: err.message});
    })
);


//3 delete an item by id from the database
router.delete('/:id', function (req, res) {
    Item.findOne({where: {id: req.params.id}}).then(item => {
        item.destroy().then(() => {
            // deleting passed successfully
            res.status(202);
            res.json();
        }).catch((err) => {
            res.status(400);
            res.json({message: err.message});
        });
    }).catch((err) => {
        //item not exist
        res.status(404);
        res.json({message: err.message});
    });
});

//4 patch item by id
router.patch('/:id', function (req, res) {
    Item.findOne({where: {id: req.params.id}}).then(item => {
        // update item name, price and brand
        item.name = req.body.name;
        item.price = req.body.price;
        item.brand = req.body.brand;
        item.reload().then(() => {
            res.status(202);
            res.json({"item": item});
        }).catch((err) => {
            res.status(400);
            res.json({message: err.message});
        });
    }).catch((err) => {
        res.status(404);
        res.json({message: err.message});
    });
});

module.exports = router;
