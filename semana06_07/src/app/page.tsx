'use client'

import { useState } from "react";
import "./home.css";

export default function Home() {
  const [contador, setContador] = useState<number>(0)

  function incrementar() {
    setContador(contador + 1);
  }

  function resetar() {
    setContador(0);
  }

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>INCREMENTAR</button>
      <button onClick={resetar}>RESETAR</button>
    </div>
  );
}
