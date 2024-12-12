import { Id } from "../util/Id";

export class Cartao {
  constructor(readonly nome: string, readonly id = Id.novo()) {}
}
