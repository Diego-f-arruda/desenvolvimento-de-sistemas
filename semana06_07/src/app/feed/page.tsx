import Header from "../../Components/Header";
import "./styles.css"
import Image from "next/image";

import cover from '@/assets/cover.avif';
import Avatar from "../../Components/avatar";
import { PiPencilLineFill } from "react-icons/pi";
import Post from "@/Components/Post";

export default function Feed() {
    return (
        <div>
            <Header />
            <div className="container">
                <aside className="sidebar">
                    <Image src={cover} alt="cover" className="cover" />

                    <div className="cardProfile">
                        <Avatar src="https://github.com/Diego-f-arruda.png" hasBorder />
                        <strong>Diego Arruda</strong>
                        <span>Desenvolvedor</span>

                        <footer>
                            <button className="button-edit-profile">
                                <PiPencilLineFill />
                                Editar perfil
                            </button>
                        </footer>
                    </div>

                </aside>

                <main className="main">
                    <Post post={{} as any} />
                </main>
            </div>
        </div>
    )
}

