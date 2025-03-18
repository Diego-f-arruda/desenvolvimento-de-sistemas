import Avatar from "../avatar";
import "./styles.css"
type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}

// type Comment = {
//     message: string;
//     publishedAt: Date;
//     like: number;
//     author: Author
// }

type PostProps= {
    post:{
        author: Author;
        publishedAt: Date;
        content: string;
        //comments: Comment[]
    }
}

export default function Post({post}: PostProps){
    return(
        <article className="post">
            <header>
                <div className="author">
                    <Avatar src={"https://github.com/diego-f-arruda.png"} hasBorder />
                    <div className="author-info">
                        <strong>Diego Arruda</strong>
                        <span>Desenvolvedor</span>
                    </div>
                </div>
                <time>Públicado há 2 horas</time>
            </header>

            <div className="content">
                <p>
                <strong>O que é Lorem Ipsum?</strong>
                <i>Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto modelo padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galera de tipos e os embaralhou para fazer um livro de espécimes de tipos. Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento das folhas Letraset contendo passagens do Lorem Ipsum e, mais recentemente, com softwares de editoração eletrônica como o Aldus PageMaker, incluindo versões do Lorem Ipsum.</i>
                </p>
            </div>

            <form>
                <strong>Deixe um comentário</strong>
                <textarea placeholder="Deixe seu comentário" ></textarea>
                <footer>
                    <button>Publicar</button>
                </footer>
            </form>
        </article>
    )
}