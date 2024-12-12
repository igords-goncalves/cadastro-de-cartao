import { CartaoModel } from "../../infra/Cartao.model";
import { Cartao } from "../modules/Cartao";

// Caso de uso / Serviço
export class CadastrarCartaoService {
  executar(cartao: string) {
    CartaoModel.salvar(this.criarCartao(cartao));
  }

  private criarCartao(cartao: string) {
    return new Cartao(cartao);
  }
}
