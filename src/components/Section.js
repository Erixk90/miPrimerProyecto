import { TbMapPin } from "react-icons/tb";
import '../style/section.css'


function Section (){
    return (
        <section className="section__container"> 
        <div className="section__container__background">
            <div>
                <h2 className='section__titulo'> Diseño y Desarrollo Web Freelancer</h2>
            </div>
            <div className='section__ubicacion'>
                <TbMapPin className='section__ubicacion__pin'/>
                <p className='section__ubicacion__lugar' > Barranquilla, Colombia </p>
            </div> 
            <div className='section__btn'>
                <a className='section__btn__enlace' href='#'>Contactar</a>
            </div>
        </div>
        </section>
    )
}

export default Section