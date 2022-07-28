import '../style/servicios.css'

function Servicios (props){
    return (

        <div className="container__servicio">
            <section className="servicio__section">
                <h3 className="servicio__section__title"> {props.title}</h3>
                <i className="servicio__section__icono">{props.icono}</i>
                <p className="servicio__section__parrafo">{props.parrafo}</p>
            </section>

        </div>

    )
}

export default Servicios