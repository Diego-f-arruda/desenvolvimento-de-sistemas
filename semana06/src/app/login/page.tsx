'use client'
import Link from "next/link";
import "./styles.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function login(){

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const router = useRouter();


    function handleSubmit(){
         // EXEMPLO REQUISIÇÃO
         // const respose = await fetch("http://meu-dominio/login", {
         //     method: "POST",
         //     body: {
         //         email,
         //         password
         //     }as any,
         // })
 
         router.replace("/");
    }

    return(
        <div className="container">
            <div className="form">
                <h1>LOGIN</h1>
                <input 
                    type="text" 
                    placeholder="Insira o email" 
                    className="input"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Insira o senha" 
                    className="input"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button 
                    onClick={handleSubmit}
                    className="button"
                    disabled={!email || !password}
                    >
                    Entrar
                </button>
            </div>
        </div>
    )
}