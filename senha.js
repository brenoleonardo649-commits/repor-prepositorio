
import PromptSync from "prompt-sync"
const prompt = PromptSync()
let senhaCorreta = "lions2024"
let senhaDigitada ="lions2024"
if(senhaCorreta === senhaDigitada)
{
    console.log("Acesso Liberado")
}else{
    console.log("Acesso negado")
}