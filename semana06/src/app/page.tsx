'use client'
import Link from "next/link";
import "./home.css";

import Person from "@/Components/Person";
import { useState } from "react";

export default function Home() {
  //let contador = 0;
  const [contador, setContador] = useState<number>(0)

  function incrementar(){
    
    setContador(contador + 1)
    console.log(`Contador ${contador}`)
  }

  function resetar(){
    setContador(0);
  }
 
  return (
    <div className="container">
      <h1>Contador {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={resetar}>Resetar</button>
    </div>
  );
}
