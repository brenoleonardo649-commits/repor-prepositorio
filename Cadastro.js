let aluno ={
    nome:"Camila Rocha",
    idade:"19",
    curso:"Trilha JavaScript",
    ativo:"true"
}
console.log("Nome", aluno.nome)
console.log("Idade", aluno.idade)
console.log("Curso", aluno.curso)
if(aluno.ativo){
    console.log("Situação: Aluno ativo")
}else{
    console.log("Situação: Aluno inativo")
}
if(aluno.idade >= 18)
{
    console.log("maior de idade: Sim")
}