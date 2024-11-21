import Imagen1 from "../../assets/gato1.jpg";
import Imagen2 from "../../assets/gato2.jfif";
import Imagen3 from "../../assets/gato3.jpg";
import Imagen4 from "../../assets/gato4.jpg";
import Imagen5 from "../../assets/gato5.jpg";
import Imagen6 from "../../assets/gato6.jpg";


interface Gatito {
    id: number;
    nombre: string;
    imagen: string;
}

const PaginaGatitos = () => {

    const gatitos: Gatito[] = [
        { id: 1, nombre: "Gato1", imagen: Imagen1 },
        { id: 2, nombre: "Gato2", imagen: Imagen2 },
        { id: 3, nombre: "Gato3", imagen: Imagen3 },
        { id: 4, nombre: "Gato4", imagen: Imagen4 },
        { id: 5, nombre: "Gato5", imagen: Imagen5 },
        { id: 6, nombre: "Gato6", imagen: Imagen6 },
    ];

    return (
        <div className="bg-gray-100">
            <div id="app" className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-center text-gray-800">
                    Bienvenido a la pagina de gatitos
                </h1>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {gatitos.map((gatito) => (
                        <div key={gatito.id} className="bg-white p-4 rounded-lg shadow-lg">
                            <img
                                src={gatito.imagen}
                                alt={gatito.nombre}
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <h2 className="mt-4 text-xl font-bold text-center">{gatito.nombre}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PaginaGatitos;
