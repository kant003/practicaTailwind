function Uh20() {

    const changeBackgroundColor = (color:string) => {
        document.body.className = `bg-${color}-500`;
    };

    return (
        <div>
            <title>Botones de Colores pulsables</title>
            <div className="space-x-4">
                <button onClick={() => changeBackgroundColor('red')} id="Rojo" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                    Rojo
                </button>
                <button onClick={() => changeBackgroundColor('purple')} id="Morado" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                    Morado
                </button>
                <button onClick={() => changeBackgroundColor('blue')} id="Azul" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Azul
                </button>
            </div>
        </div>

    )
}

export default Uh20
