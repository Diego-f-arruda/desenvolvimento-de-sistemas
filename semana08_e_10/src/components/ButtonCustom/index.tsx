import "./styles.css"

export default function ButtonCustom() {
    return (
        <button type="submit" className="button-custom" onClick={handle}>
            Publicar
        </button>
    )
}