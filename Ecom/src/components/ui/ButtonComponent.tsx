interface ButtonComponentProps{
    text: string;
    style: string;
    onClick?: () => void;
    disabled?: boolean;
}
export default function ButtonComponent(props: ButtonComponentProps){
    return(
        <button
            className={props.style}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.text}
        </button>
    );
}