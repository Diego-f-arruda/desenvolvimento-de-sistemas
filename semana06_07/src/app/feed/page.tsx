'use client'

import Header from "../../Components/Header"
import "./styles.css"
import Image from "next/image";

import cover from '@/assets/cover.avif';
import Avatar from "../../Components/Avatar";
import { PiPencilLineBold } from "react-icons/pi";
import Post from "../../Components/Post";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import TextArea from "@/Components/TextArea";
import ButtonCuston from "@/Components/ButtonCustom";

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}

type Post = {
    id: number;
    author: Author;
    publishedAt: Date;
    content: string;
}

export default function Feed() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        loadPost();
    }, [])

    async function loadPost() {
        const response = await axios.get("http://localhost:3001/posts", {
            params:{
                _sort: "publishedAt",
                _order: "desc"
            }
        });

        // const postSort = response.data.sort((a: any, b: any) => ((new Date(b.publishedAt)).getTime()) - ((new Date(a.publishedAt).getTime())
        // ))

        // setPosts(postSort)
        setPosts(response.data.reverse())
        //PODE SE TROCAR POR ESTE PROXIMO COMANDO QUANDO FOR SOMENTE INVERTER A LISTA//
        //setPosts(response.data.reverse())
    }

    async function handleCreatePost(event: FormEvent) {
        event.preventDefault()
        const post = {
            id: posts.length + 1,
            content: content,
            publishedAt: new Date().toISOString(),
            author: {
                name: "Diego Arruda",
                role: "Desenvolvedor",
                avatarUrl: "https://github.com/diego-f-arruda.png"
            }
        }
        await axios.post("http://localhost:3001/posts", post);
        await loadPost();
        setContent('');
    }


    return (
        <div>
            <Header />
            <div className="container">
                <aside className="sidebar">
                    <Image src={cover} alt="cover" className="cover" />

                    <div className="cardProfile">
                        <Avatar src="https://github.com/diego-f-arruda.png" hasBorder />
                        <strong>Diego Arruda</strong>
                        <span>Desenvolvedor</span>

                        <footer>
                            <button className="button-edit-profile">
                                <PiPencilLineBold />
                                Editar seu perfil
                            </button>
                        </footer>
                    </div>
                </aside>

                <main className="main">
                    <form onSubmit={handleCreatePost} className="form-post">
                        <TextArea message={content} setMessage={setContent} placeHolder="No que você esta pensando agora? "/>

                        <ButtonCuston />
                    </form>

                    {posts.map(item => (
                        <Post post={item} key={item.id} />
                    ))}
                </main>
            </div>
        </div>
    )
}