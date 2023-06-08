import { useState } from "react";

export function dollarBrl(){
  const [result, setResult] = useState()
  fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
  .then((response) => response.json())
  .then((response) => {
    setResult(response.USDBRL.bid)
  });
  return result
}