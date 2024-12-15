import type { Cartao } from "../core/modules/Cartao";

export class CartaoModel {
  private static lista: Cartao[] = [];

  static salvar(cartao: Cartao): void {
    //FIXME: Salva 1 cartão e o outro é apagado
    this.lista.push(cartao);
  }

  static obter(): Cartao[] {
    return this.lista;
  }

  static obterPorId(id: string): void {}
}
