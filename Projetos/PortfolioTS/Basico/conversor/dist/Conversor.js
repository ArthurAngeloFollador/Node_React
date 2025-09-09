"use strict";
var Moeda;
(function (Moeda) {
    Moeda["BRL"] = "BRL";
    Moeda["USD"] = "USD";
    Moeda["EUR"] = "EUR"; //2
})(Moeda || (Moeda = {}));
const Taxas = {
    [Moeda.BRL]: 1, //real como base
    [Moeda.USD]: 5.44,
    [Moeda.EUR]: 6.35
};
const converter = (valor, de, para) => {
    const result = (valor * Taxas[de]) / Taxas[para];
    return result.toFixed(2);
};
const executar = () => {
    const valor = 89.99; //valor a converter
    const moeda2 = 'EUR'; //moeda a ser convertida
    const moeda1 = 'USD'; //moeda final
    console.log("valor final: " + converter(valor, Moeda[moeda1], Moeda[moeda2]));
};
executar();
