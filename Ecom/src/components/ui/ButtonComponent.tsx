interface ButtonComponentProps{
    text: string;
    style: string;
    action?: () => void;
}
export default function ButtonComponent(props: ButtonComponentProps){
    if(props.action){
        return(
            <button className={props.style} onClick={props.action}>
                {props.text}
            </button>
        );
    }
    return(
        <div className={props.style}>
            {props.text}
        </div>
    );
}