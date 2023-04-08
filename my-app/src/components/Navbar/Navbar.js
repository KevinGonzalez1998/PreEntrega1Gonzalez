import CardWidget from "../CartWidget/CartWidget"
import logo from "../../logo.svg"
import '../../App.css';

const NavBar = () => {
    return (     
        <nav> 
            <div class = "eslogan">
                <div class="logoSearchNav">
                <img class = "logo" src={logo}  alt="Logo del sitio web" /> 
            </div>
                <h3>TODO EL HARDWARE QUE NECESITAS PARA CREAR TU PROXIMA MASTER RACE</h3>
            </div>
             
           <div class= "buttonContainer">
           
            <button class="buttonNav">PRODUCTOS</button>
            <button class="buttonNav">ARMADO DE PC</button>
            <button class="buttonNav">MARCAS</button>
            <button class="buttonNav">AYUDA</button> 
            <CardWidget/>
           </div> 
        </nav>
       
    )
}
export default NavBar