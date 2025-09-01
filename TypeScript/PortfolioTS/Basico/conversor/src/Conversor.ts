enum Moeda { //define as moedas
  BRL = "BRL", //0
  USD = "USD", //1
  EUR = "EUR", //2
}

const Taxas: Record<Moeda, number> = {
  //mapeia o enum e atribiu valores para a convercao
  [Moeda.BRL]: 1, //real como base
  [Moeda.USD]: 5.44,
  [Moeda.EUR]: 6.35,
};

const converter = (valor: number, de: Moeda, para: Moeda): string => {
  const result = (valor * Taxas[de]) / Taxas[para];
  return result.toFixed(2);
};

const executar = (): void => {
  const valor: number = 89.99; //valor a converter
  const moeda2: string = "EUR"; //moeda a ser convertida
  const moeda1: string = "USD"; //moeda final

  console.log(
    "valor final: " +
      converter(
        valor,
        Moeda[moeda1 as keyof typeof Moeda],
        Moeda[moeda2 as keyof typeof Moeda]
      )
  );
};
executar();
