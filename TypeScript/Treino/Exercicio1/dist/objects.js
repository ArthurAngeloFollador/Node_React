"use strict";
const user = {
    firstName: 'Jane',
    age: 20,
    email: 'jane@doe.com',
    // password: '12345',
    orders: [{ productId: "1", price: 200 }],
    register() {
        return 'a';
    }
};
const printlog = (message) => { };
printlog(user.password); //a exclamacao garante a existencia do user.password
const author = {
    age: 2,
    books: ['1'],
    email: 'author@gmail.com',
    firstName: 'Felipe',
    orders: [],
    register() {
        return 'a';
    },
};
// emailUser.firstName = 12 //nao pode acontecer pois e read-only
const newAuthor = {
    email: 'author@gmail.com',
    firstName: 'Felipe',
    books: []
};
// type Grade = number | string
// const grade: number | string = 1
