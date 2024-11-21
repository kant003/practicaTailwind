import foto1 from './assets/foto1.jpeg';
import foto2 from './assets/foto2.jpeg';
import foto3 from './assets/foto3.jpeg';
import foto4 from './assets/foto4.jpeg';
import foto5 from './assets/foto5.jpeg';
import foto6 from './assets/foto6.jpeg';

const Selector22 = () => {
  return (
    <div>
      <h1
        className="text-6xl font-bold bg-gradient-to-r from-blue-700 via-blue-400 to-blue-500 bg-clip-text text-transparent"
        style={{
          textShadow: '0px 0px 22px rgba(8, 30, 223, 1)', // Sombra azul claro
        }}
      >
        SELECCIONA TU USUARIO
      </h1>


      <div className="flex flex-wrap p-6 gap-6">
        <img className="object-cover rounded-full h-40 w-40 hover:border-4 border-transparent hover:border-blue-500 transition duration-300" src={foto1} alt="foto" />
        <img className="object-cover rounded-full h-40 w-40 hover:border-4 border-transparent hover:border-blue-500 transition duration-300" src={foto2} alt="foto" />
        <img className="object-cover rounded-full h-40 w-40 hover:border-4 border-transparent hover:border-blue-500 transition duration-300" src={foto3} alt="foto" />
        <img className="object-cover rounded-full h-40 w-40 hover:border-4 border-transparent hover:border-blue-500 transition duration-300" src={foto4} alt="foto" />
        <img className="object-cover rounded-full h-40 w-40 hover:border-4 border-transparent hover:border-blue-500 transition duration-300" src={foto5} alt="foto" />
        <img className="object-cover rounded-full h-40 w-40 hover:border-4 border-transparent hover:border-blue-500 transition duration-300" src={foto6} alt="foto" />
      </div>

    </div>
  )
}
export default Selector22