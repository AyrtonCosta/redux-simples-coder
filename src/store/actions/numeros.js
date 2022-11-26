import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from "./actionsType";

export function alterarNumeroMinimo(novoNumero) {
  return {
    type: NUM_MIN_ALTERADO,
    payload: novoNumero,
  };
}

export function alterarNumeroMaximo(novoNumero1) {
  return {
    type: NUM_MAX_ALTERADO,
    payload: novoNumero1,
  };
}
