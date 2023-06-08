import { useEffect, useState } from "react";

export function dollarEur(){
    const [result, setResult] = useState()
    fetch("https://economia.awesomeapi.com.br/last/USD-EUR")
    .then((response) => response.json())
    .then((response) => {
      setResult(response.USDEUR.bid)
    });
    return result
}

