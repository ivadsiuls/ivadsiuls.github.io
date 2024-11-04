interface Props {
    title: string
    posx: string // percentage
    posy: string // percentage
    color?: string
    fontSize?: string
    className?: string
}

export function H1(props: Props) {
    const className = 'radial-text-gradient header'
    return (
        <>
            <h1 className={className.concat(' '.concat(props.className ? props.className : 'inter-bold'))} style={{
                zIndex: 2,
                fontSize: props.fontSize ? props.fontSize : '3rem',
                position: 'absolute',
                top: props.posy,
                left: props.posx,
                color: props.color ? props.color : 'white'
            }}>{props.title}</h1>
        </>
    )
}