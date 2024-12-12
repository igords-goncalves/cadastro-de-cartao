import { ObterListaCartoesService } from "../core/services/ObterListaCartoes.service";

export class ObterListaCartoesView {
  async exibir() {
    const lista = await new ObterListaCartoesService().executar();

    //FIXME: A lista é exibida antes do prompt
    // O problema é no assincronismo das libs de prompt
    // através do teste abaixo contatei o problema
    // setTimeout(() => {
    //   console.log(lista)
    // }, 2000);

    for (const cartao of lista) {
      console.log(cartao);
    }
  }
}
