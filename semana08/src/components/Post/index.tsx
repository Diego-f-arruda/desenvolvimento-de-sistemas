'use client'

import { v4 as uuid } from 'uuid'
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Avatar from "../Avatar";
import "./styles.css";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import TextareaCustom from "../TextareaCustom";
import ButtonCustom from "../ButtonCustom";
import axios from "axios";
import Comment from "../Comment";

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}

type Comment = {
    id: string;
    like: number;
    author: Author;
    comment: string;
    publishedAt: Date
}

type Post = {
    id: string;
    author: Author;
    publishedAt: Date;
    content: string;
    comments: Comment[]
}

type PostProps = {
    setPost: Dispatch<SetStateAction<Post[]>>,
    post: Post
}

export default function Post({ post, setPost }: PostProps) {
    const [newComment, setNewComment] = useState<string>('');

    async function loadPost() {
        const response = await axios.get(`http://localhost:3001/posts/${post.id}`);

        // ATUALIZA POSIÇÃO ESPECIFICA DO ESTADO
        setPost((prev: Post[]) =>
            prev.map(atual => (
                atual.id == post.id ? response.data : atual
            ))
        )
    }

    async function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        const comment = {
            id: uuid(),
            comment: newComment,
            publishedAt: new Date().toISOString(),
            like: 0,
            author: {
                name: "Diego Arruda",
                role: "Desenvolvedor",
                avatarUrl: "http://github.com/diego-f-arruda.png"
            }
        }

        const comments = post.comments?.length ? [...post.comments, comment] : [comment]

        await axios.patch(`http://localhost:3001/posts/${post.id}`, {
            "comments": comments
        })

        loadPost();
        setNewComment('');
    }

    async function handleDeleteComment(event: MouseEvent, id:string){
        event.preventDefault();

        const commentsFilter = post.comments.filter(comment => comment.id !== id)
        await axios.patch(`http://localhost:3001/posts/${post.id}`, {
            "comments": commentsFilter
        })
    }

    async function handleLikeComment(event: MouseEvent, id:string){
        event.preventDefault();

        const commentUpdated = post.comments.map(comment => {
            if(comment.id === id){
                return{...comment, like: comment.like +1}; /*os tres pontos mantem as informações ja existentes, altera apenas as infos passadas aposa virgula*/
            }
            return comment
        })

        await axios.patch(`http://localhost:3001/posts/${post.id}`, {
            "comments": commentUpdated
        })
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
                <TextareaCustom
                    message={newComment}
                    setMessage={setNewComment}
                    title="Deixe um comentários..."
                />

                <footer>
                    <ButtonCustom />
                </footer>
            </form>

            {post.comments?.length && post.comments.map(itemComment => (
                <Comment  key={itemComment.id} 
                comment={itemComment} 
                handleDelete={handleDeleteComment} 
                handleLike={handleLikeComment} />
                
            ))}


        </article>
    )
}