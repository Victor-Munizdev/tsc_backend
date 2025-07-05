// const victor = {
//     nomeCompleto: "Victor Muniz",
//     idade: 17,
//     conhecimentos: {
//         linguagem: "PHP",
//         framework: "Laravel",
//         bancoDeDados: "SQL"
//     },
//     estudando: {
//         linguagem: "TypeScript",
//         framework: "NodeJS",
//         bancoDeDados: "MongoDB"
//     }
// }
// console.log(victor);
// console.log(victor.conhecimentos);


// export class Pessoa {
//     nome: string
//     idade: number
//     constructor(nome: string, idade: number) {
//         this.nome = nome;
//         this.idade = idade;
//     }

// }

// const pessoa1 = new Pessoa("Victor Muniz", 17);
// console.log(pessoa1);

// const pessoa2 = new Pessoa();
// pessoa2.nomeCompleto = "Victor Muniz";
// pessoa2.idade = 17;
// pessoa2.conhecimentos = {
//     linguagem: "PHP",
//     framework: "Laravel",
//     bancoDeDados: "SQL"
// };
// pessoa2.estudando = {
//     linguagem: "TypeScript",
//     framework: "NodeJS",
//     bancoDeDados: "MongoDB"
// };
// console.log(pessoa2);
// console.log(pessoa2.conhecimentos);


// export class Funcionario {
//     nome: string;
//     cargo: string;
//     salario: number;

//     constructor(nome: string, cargo: string, salario: number) {
//         this.nome = nome;
//         this.cargo = cargo;
//         this.salario = salario;
//     }
//     public resumo(): string {
//         return `O funcionário ${this.nome} trabalha como ${this.cargo} e tem um salário de R$ ${this.salario} `;
//     }
// }

// const funcionario1 = new Funcionario("Victor Muniz", "Desenvolvedor", 3000);
// console.log(funcionario1.resumo());

interface Shape{
    getArea(): number;
}

class triangle implements Shape {
   public constructor(protected readonly width: number, protected readonly height: number){

   }
    public getArea(): number {
        return (this.width * this.height) / 2;
    }
}

const triangle1 = new triangle(4, 5);
console.log(`A area do triangulo é: ${triangle1.getArea()}`);