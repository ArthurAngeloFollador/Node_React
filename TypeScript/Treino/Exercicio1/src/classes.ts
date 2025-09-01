interface IPerson {
    id: number
    sayMyName():string
}

class Person implements IPerson{
    readonly id: number
    protected name: string //acessada apenas dentro da sua classe
    private age: number

    constructor(id: number, name: string, age: number){
        this.id = id
        this.name = name
        this.age = age
    }

    sayMyName(): string {
        return this.name
    }
}

// mesma coisa que acima
class PersonReFact {
    constructor(
        readonly id: number,
        protected name: string,
        private age: number
    ) {}
}

class Employee extends Person {
    constructor(id:number, name: string, age: number){
        super(id, name, age)
    }

    whoAmI(){
        return this.name
    }
}

const felipe = new Person(1, "Felipe", 21)