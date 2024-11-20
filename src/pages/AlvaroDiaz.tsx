import { useState } from "react";

function KieneresTU() {
    const [personajeSeleccionado, setPersonajeSeleccionado] = useState("");
    const [bloqueado, setBloqueado] = useState(null);
    const [personajeBloqueado, setPErsonajeBloqueado] = useState(personajeSeleccionado);
    const lockPersonaje = (personaje , event) => {
        setPersonajeSeleccionado(personaje);
        setPErsonajeBloqueado(personaje)    
        setBloqueado(event.currentTarget.id);
    };

    return (
        <section>
            <h1 className="bg-gradient-to-r from-teal-100 via-blue-300 to-red-400 inline-block text-transparent bg-clip-text font-bold">
                ELIGE UN PERSONAJE
            </h1>
            <div className="flex flex-row m-8">
                <div id="roberto" className="mx-3">
                    <img
                        id="roberto"
                        className={`w-40 h-55 border-black border-4 saturate-0 ${bloqueado === "roberto" ? "mt-5 border-pink-300 border-b-pink-500 saturate-100 bg-pink-200" : "hover:mt-5 hover:border-pink-200 hover:border-b-pink-500 hover:saturate-100"}`}
                        src="./src/assets/roberto.png"
                        alt="Roberto"
                        onClick={(e) => lockPersonaje("Roberto", e)}
                        onMouseEnter={() => setPersonajeSeleccionado("Roberto")}
                        onMouseLeave={() => setPersonajeSeleccionado(bloqueado ? personajeBloqueado : "")}
                    />
                </div>

                <div id="jinx" className="mx-3">
                    <img
                        id="jinx"
                        className={`w-40 h-55 border-black border-4 saturate-0 ${bloqueado === "jinx" ? "mt-5 border-pink-300 border-b-pink-500 saturate-100 bg-pink-200" : "hover:mt-5 hover:border-pink-200 hover:border-b-pink-500 hover:saturate-100"}`}
                        src="./src/assets/jinx.png"
                        alt="Jinx"
                        onClick={(e) => lockPersonaje("Jinx", e)}
                        onMouseEnter={() => setPersonajeSeleccionado("Jinx")}
                        onMouseLeave={() => setPersonajeSeleccionado(bloqueado ? personajeBloqueado : "")}
                    />
                </div>

                <div id="jordi-wild" className="mx-3">
                    <img
                        id="jordi-wild"
                        className={`w-40 h-55 border-black border-4 saturate-0 ${bloqueado === "jordi-wild" ? "mt-5 border-pink-300 border-b-pink-500 saturate-100 bg-pink-200" : "hover:mt-5 hover:border-pink-200 hover:border-b-pink-500 hover:saturate-100"}`}
                        src="./src/assets/jordi.png"
                        alt="Jordi"
                        onClick={(e) => lockPersonaje("Jordi Wild", e)}
                        onMouseEnter={() => setPersonajeSeleccionado("Jordi Wild")}
                        onMouseLeave={() => setPersonajeSeleccionado(bloqueado ? personajeBloqueado : "")}
                    />
                </div>
            </div>

            <div id="seleccionado" className="text-2xl text-pink-500 ">
                {personajeSeleccionado}
            </div>
        </section>
    );
}

export default KieneresTU;
