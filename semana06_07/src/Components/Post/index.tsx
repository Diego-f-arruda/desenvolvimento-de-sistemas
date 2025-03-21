'use client'

import { FormEvent, useState } from "react";
import Avatar from "../Avatar";
import "./styles.css";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import TextArea from "../TextArea";
import ButtonCuston from "../ButtonCustom";

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}

type PostProps = {
    post: {
        author: Author;
        publishedAt: Date;
        content: string;
    }
}

export default function Post({ post }: PostProps) {
    const [newComment, setNewComment] = useState<string>('');

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        alert(newComment)
    }

    const dateFormat = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className="post">
            <header>
                <div className="author">
                    <Avatar src={post.author.avatarUrl} hasBorder />
                    <div className="author-info">
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time>
                    {dateFormat}
                </time>
            </header>

            <div className="content">
                <p>{post.content}</p>
            </div>

            <form className="form" onSubmit={handleCreateNewComment}>
                <strong>Deixe um comentário</strong>
                <TextArea message={newComment} setMessage={setNewComment} placeHolder="Deixe um comentario"/>

                <footer>
                    <ButtonCuston />
                </footer>
            </form>

        </article>
    )
}