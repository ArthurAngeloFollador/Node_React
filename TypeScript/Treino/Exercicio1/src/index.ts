// tipos básicos

let age: number = 5;
const firstName: string = 'Felipe'
const isValid: boolean = true
let idk: any = 5

idk = '12'
idk = true

const ids: number[] = [1, 2, 3, 4, 5]
const bool: boolean[] = [true, false, true, false]
const names: string[] = ['Felipe', 'James'];

// tupla
const person: [number, string] = [1, 'Jane']

// lista de tuplas
const people: [number, string][] = [
    [1, 'Jane'],
    [2, 'Doe']
]

// intersections
const profuctId: string | number | boolean = false

// enum
enum Direction {
    Up = 1,
    Down = 2,
    Left = 'Esquerda'
}

const direction = Direction.Up

// Type Assertions
const productName: any = 'Bone'

// let itemId = productName as string

let itemId = <string>productName

console.log(age);