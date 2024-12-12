import { CadastrarCartaoService } from "../core/services/CadastrarCartao.service";
// import inquirer from "inquirer";
const readlineSync = require('readline-sync');

export class CadastrarCartaoView {
  private novoCartao = new CadastrarCartaoService();

  // FIXME: Vai gerar um problema de assincronismo
  // na exibição da lista se usar o readline nativo do node
  async exibir() {
    // FIXME: Não funciona UTF8
    const input = readlineSync.question("Novo cartao: ")
    this.novoCartao.executar(input);

    // inquirer
    //   .prompt({
    //     type: "input",
    //     name: "action",
    //     message: "Novo Cartão",
    //   })
    //   .then((resp) => {
    //     const action = resp["action"];

    //     this.novoCartao.executar(action);
    //   });
  }
}
