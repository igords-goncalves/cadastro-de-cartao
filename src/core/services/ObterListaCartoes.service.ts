import { CartaoModel } from "../../infra/Cartao.model";
import type { Cartao } from "../modules/Cartao";

export class ObterListaCartoesService {
  
  executar(): Cartao[] {
    const lista = CartaoModel.obter();
    return lista;
  }
}
