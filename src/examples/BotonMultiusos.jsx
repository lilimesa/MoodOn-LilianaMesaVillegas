//En este archivo escribimos la función del nuestro boton

//Declaración de función flecha
const BotonMultiusos = (props) => {

    console.log(props, 'props')

    return(
        <button
        style={{backgroundColor:props.color, padding:'10px 12px', border:'none', color:'white', cursor:'pointer'}}
        onClick={props.onClickFunction}    
        >{props.texto}</button>
    )

}

export default BotonMultiusos