interface ButtonComponentProps{
    text: string;
    style: string;
    onClick?: () => void;
}
export default function ButtonComponent(props: ButtonComponentProps){
    if(props.onClick){
        <button className={props.style} onClick={props.onClick}>
            {props.text}
        </button>
    }
    return(
        <div className={props.style}>
            {props.text}
        </div>
    );
}