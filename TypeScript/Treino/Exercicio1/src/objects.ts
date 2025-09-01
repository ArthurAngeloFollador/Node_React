// type
type Order = {
    productId: string
    price: number
}

type User = {
    firstName: string
    age: number
    email?: string //opcional
    password?: string //opcional
    orders: Order[]
    register(): string
}

const user: User = {
    firstName:'Jane',
    age: 20,
    email: 'jane@doe.com',
    // password: '12345',
    orders: [{productId: "1", price: 200}],
    register() {
        return 'a'
    }
}

const printlog = (message: string) => {}

printlog(user.password!) //a exclamacao garante a existencia do user.password
                         //assim nao retorna undefined

// unions
type Author = {
    books: string[]
}

const author: Author & User = {
    age: 2,
    books: ['1'],
    email: 'author@gmail.com',
    firstName: 'Felipe',
    orders: [],
    register() {
        return 'a'
    },
}

// interfaces
interface UserInterface {
    readonly firstName: string //nao deixa alterar o valor
    email: string
}

interface AuthorInterface {
    books: string[]
}

// emailUser.firstName = 12 //nao pode acontecer pois e read-only

const newAuthor: UserInterface & AuthorInterface = {
    email: 'author@gmail.com',
    firstName: 'Felipe',
    books: []
}

// type Grade = number | string
// const grade: number | string = 1

