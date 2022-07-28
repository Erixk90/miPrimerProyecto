import { TbPalette, TbBrandAndroid, TbCreditCard } from "react-icons/tb";
import '../style/sectionServicio.css'
import Servicios from '../components/Servicios'

function SectionServicio ({title , parrafo, icono}){


    return (
        <div className="section">
        <div className="container__servicio">
            <Servicios
            title= 'Diseño web'
            parrafo= 'Creación de paginas web por medio de la tecnologia de HTML,CSS, Javascript para la consecusión de buenas paginas web que sean dinamicas y creativas para el cliente.'
            icono= {<TbPalette/>} />
            <Servicios 
            title= 'Aplicaciones moviles'
            parrafo= 'Creación de aplicaciciones web que se ven de forma responsive para tener mayor interacción con los usuarios. Todo basado en ReactJs, para tener mayor interactividad en el sitio'
            icono= {<TbBrandAndroid/>}
            />
            <Servicios
            title= 'E commerce '
            parrafo= 'Creación Ecommerce, para realizar cualquier tipo de tienda virtual, desarrollando secciones como tienda, carrito, y forma de pago, dejando al usuario elegir y adaptable al tema responsive para visualizar en telefonos de toda clase.'
            icono={<TbCreditCard/>}/>
        </div>
        </div>
        /*<div className="container__servicio">
            <section className="servicio__section1">
                <h3> Diseño web </h3>
                <TbPalette/>
                <p> Creación de paginas web por medio de la tecnologia de HTML,
                    CSS, Javascript para la consecusión de buenas paginas web
                    que sean dinamicas y creativas para el cliente.</p>
            </section>

            <section className="servicio__section2">
            <h3> Aplicaciones moviles </h3>
            <TbBrandAndroid/>
            <TbBrandApple/>
            <p> Creación de paginas web por medio de la tecnologia de HTML,
                CSS, Javascript para la consecusión de buenas paginas web
                que sean dinamicas y creativas para el cliente.</p>
            </section>

            <section className="servicio__section3">
            <h3> E commerce </h3>
            <TbCreditCard/>
            <p> Creación de paginas web por medio de la tecnologia de HTML,
                CSS, Javascript para la consecusión de buenas paginas web
                que sean dinamicas y creativas para el cliente.</p>
            </section>
        </div>*/
    )

}

export default SectionServicio