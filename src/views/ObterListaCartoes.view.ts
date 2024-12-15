import { ObterListaCartoesService } from "../core/services/ObterListaCartoes.service";

export class ObterListaCartoesView {
  exibir() {
    const lista = new ObterListaCartoesService().executar();

    for (const cartao of lista) {
      console.log(cartao);
    }
  }
}
