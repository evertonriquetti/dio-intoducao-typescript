/* Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";
*/

//Ajuste 

let employee : {code:number, name:string} = {
    code : 10,
    name : "John"
}