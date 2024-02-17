let numeroPrimo = 0;

while (numeroPrimo <= 100) {
    let divisor = 2;
    let ehPrimo = true;

    while (divisor * divisor <= numeroPrimo) {
        if (numeroPrimo % divisor === 0) {
            ehPrimo = false;
            break;
        }
        divisor++;
    }

    if (ehPrimo) {
        console.log(numeroPrimo);
    }

    numeroPrimo++;
}
