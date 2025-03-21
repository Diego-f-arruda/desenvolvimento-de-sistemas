import "./styles.css"

type TextAreaProps = {
    message: string;
    setMessage: (value: string) => void
    placeHolder: string
}

export default function TextArea({message, setMessage, placeHolder}: TextAreaProps){
    return(
        <textarea
            placeholder={placeHolder}
            value={message}
            //onChange={e => setNewComment(e.target.value)}
            onChange={(e) => setMessage(e.target.value)}
        />
    )
}