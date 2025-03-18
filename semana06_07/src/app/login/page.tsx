'use client'

import { useState } from "react";
import "./styles.css";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";


export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const disabledButton = (!email || !(password.length > 8));

    const router = useRouter();

    async function handleSubmit() {
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

    return (
        <div className="container">
            <div className="form">
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="E-mail"
                    className="input"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="input"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <button
                    className="button"
                    onClick={handleSubmit}
                    disabled={disabledButton}
                >
                    Entrar
                </button>
            </div>
        </div>
    )
}