import type { Cartao } from "../core/modules/Cartao";

export class CartaoModel {
  private static lista: Cartao[] = [];
  
  static salvar(cartao: Cartao): void {
    this.lista.push(cartao);
  }

  static obter(): Cartao[] {
    return this.lista;
  }

  static obterPorId(id: string): void {}
}
