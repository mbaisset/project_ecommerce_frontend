

function ButtonTemplate (props){


    return (
        <button onClick={props.onClick}>{props.description}</button>
    )

}

export default ButtonTemplate