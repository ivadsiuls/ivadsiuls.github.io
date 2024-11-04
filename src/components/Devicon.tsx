interface Props {
    posx: string // in percentage
    posy: string // in percentage
    className: string
    title: string
    color?: string
}

export function Devicon(props: Props) {
    return (
        <>
            <i className={props.className.concat(' inter-normal')} style={{
                zIndex: 2,
                fontSize: '1.5em',
                position: 'absolute',
                top: props.posy,
                left: props.posx,
                color: props.color ? props.color : 'blue'
            }}>{props.title}</i>
        </>
    )
}