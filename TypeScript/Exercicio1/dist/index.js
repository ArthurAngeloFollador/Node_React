"use strict";
// tipos básicos
let age = 5;
const firstName = 'Felipe';
const isValid = true;
let idk = 5;
idk = '12';
idk = true;
const ids = [1, 2, 3, 4, 5];
const bool = [true, false, true, false];
const names = ['Felipe', 'James'];
// tupla
const person = [1, 'Jane'];
// lista de tuplas
const people = [
    [1, 'Jane'],
    [2, 'Doe']
];
// intersections
const profuctId = false;
// enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Up;
// Type Assertions
const productName = 'Bone';
// let itemId = productName as string
let itemId = productName;
console.log(age);
