import CardSimple from '../components/CardSimple'
import foto1 from '../assets/foto1.jpeg'
import foto2 from '../assets/foto2.jpeg'
import foto3 from '../assets/foto3.jpeg'
import foto4 from '../assets/foto4.jpeg'
import foto5 from '../assets/foto5.jpeg'
import foto6 from '../assets/foto6.jpeg'
const Eje07 = () => {
  return (
    <div>
      <h1>Ejercicio 07</h1>
      <img class="img-collapse" src="/src/assets/screen/07.png"></img>
      
      <div className="mb-4">
        <p>Corrige las imagenes para:</p>
        <p>que tengan un ancho y alto 3rem</p>
        <p>Sean completamente redondas</p>
        <p>Se el contenido (foto) se escale para que cubra el contenedor (cover)</p>
        <p>Como es muy tedioso repetir los mismos estilos en cada img, crea una clase reutilizable</p>
        <p>Pista: https://tailwindcss.com/docs/object-fit</p>
        <p>Pista: https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply</p>
      </div>
      <div className='flex flex-wrap'>
        <img className="object-cover rounded-full h-12 w-12" src={foto1} alt="foto" />
        <img className="object-cover rounded-full h-12 w-12" src={foto2} alt="foto" />
        <img className="object-cover rounded-full h-12 w-12" src={foto3} alt="foto" />
        <img className="object-cover rounded-full h-12 w-12" src={foto4} alt="foto" />
        <img className="object-cover rounded-full h-12 w-12" src={foto5} alt="foto" />
        <img className="object-cover rounded-full h-12 w-12" src={foto6} alt="foto" />
      </div>
    </div>
  )
}

export default Eje07
