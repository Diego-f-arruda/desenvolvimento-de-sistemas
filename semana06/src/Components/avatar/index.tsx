import "./styles.css"

type AvatarProps = {
    src: string
    hasBorder?: boolean
}

export default function avatar({src, hasBorder = false}: AvatarProps){
    return(
        <img src={src} alt={hasBorder ? 'avatar' : 'avatar-without-border'} />
    )
}