import { CadastrarCartaoService } from "../core/services/CadastrarCartao.service";
// import inquirer from "inquirer";
const readlineSync = require("readline-sync");

export class CadastrarCartaoView {
  private novoCartao = new CadastrarCartaoService();

  async exibir() {
    //FIXME: Essa lib não funciona UTF8
    const input = readlineSync.question("Novo cartao: ");
    this.novoCartao.executar(input);
  }
}
