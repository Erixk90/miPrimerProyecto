import '../style/formulario.css'

function Formulario (){
    return (
        <section className="formulario__container">
            <h2 className="formulario__title">Contacto</h2>
            <form className="formulario__form">
                <fieldset className="formulario__fieldset">
                    <legend className="formulario__legend">Contactanos llenando todos los campos </legend>
                    <div className="formulario__label">
                        <label> Nombre </label>
                        <input type="text" name="nombre" placeholder="Tu Nombre"/>
                    </div>
                    <div className="formulario__label">
                        <label>Teléfono</label>
                        <input type="tel" name="tel" placeholder="Tu teléfono"/>
                    </div>
                    <div className="formulario__label">
                        <label>Correo </label>
                        <input type="email" name="correo" placeholder=" tú email"/>
                    </div>
                    <div className="formulario__label">
                        <label>Mensaje</label>
                        <textarea className="formulario__textarea" name="mensaje"></textarea>
                    </div>
                    <div className="nada">
                        <button className="formulario__btn" type="submit"><span>Enviar</span></button>
                    </div>
                    
                </fieldset>
            </form>
        </section>
    )
}

export default Formulario