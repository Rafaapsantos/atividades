function verificandoNumeroFibonacci (numero) {
  let numero1 = 0
  let numero2 = 1
  while (numero2 <= numero) {
    if (numero2 == numero) {
      return `O número ${numero} pertence à sequência de Fibonacci.`
    }
    let proximoNumero = numero1 + numero2
    numero1 = numero2
    numero2 = proximoNumero
  }
  return `O número ${numero} não pertence à sequência de Fibonacci.`
}
console.log(verificandoNumeroFibonacci(2))
