let assinatura = {
    cliente: "Beatriz",
    plano: "Premium",
    messesAtivo: "14"
}
console.log(`Cliente: ${assinatura.cliente}`)
console.log(`Plano: ${assinatura.plano}`)
console.log(`Meses Ativo: ${assinatura.messesAtivo}`)
if(assinatura.messesAtivo <6)
{
    console.log("Classificação: Cliente Novo")
}else if(assinatura.messesAtivo <= 23)
{
    console.log("Classificação: Cliente fiel")
}else
{
    console.log("Classificação: Cliente Veterano")
}
if(assinatura.plano &&  "Premium")
{
    console.log("Prioridade no supote: Sim")
}else{
    console.log("Prioridade no supote: Não")
}