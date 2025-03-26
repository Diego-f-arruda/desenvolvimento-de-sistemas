
import { GrLike } from "react-icons/gr";
import Avatar from "../Avatar";
import "./styles.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

type Author = {
  name: string;
  role: string;
  avatarUrl: string;
};

type CommentProps = {
  comment: {
    id: string;
    like: number;
    author: Author;
    comment: string;
    publishedAt: Date;
  };
};

export default function Comment({ comment }: CommentProps) {

    const dateFormat = formatDistanceToNow(comment.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

  return (
    <div className="comment">
      <Avatar src={comment.author.avatarUrl} hasBorder={false} />
      <div className="comment-box">
        <div className="comment-content">
          <header>
            <div className="author-and-time">
              <strong>{comment.author.name}</strong>
              <time>{dateFormat}</time>
            </div>
            <button title="Deletar Comentario">
              <RiDeleteBin6Line size={24} />
            </button>
          </header>
          <p>{comment.comment}</p>
        </div>
        <footer>
          <button>
            <GrLike />
            Aplaudir <span>{comment.like}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
