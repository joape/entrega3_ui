import instagram from '../../assets/images/ig_2.png'
import whatsapp from '../../assets/images/whatsapp.png'

export function HeaderSeccion(){
    return(
        <section className="cabezal-main">
                <h2>Decoupage Online</h2>
                <div>
                    <img src={instagram} alt="Encontranos en Instagram"></img>
                    <img src={whatsapp} alt="Encontranos en whatsapp"></img>                    
                </div>                
        </section>
    );
}