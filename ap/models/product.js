class Product {
    constructor(id, name, descr, price, creationDate) {
        this.id = id;
        this.name = name;
        this.descr = descr;
        this.price = price;
        this.creationDate = creationDate;
    }
}

// arreglo para manejo de productos en memoria
const products = [];

module.exports = {
    Product,
    products
};
