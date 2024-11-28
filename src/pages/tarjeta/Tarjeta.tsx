const Tarjeta = ({title='Red Dead Redemption 2'}) => {
    return (
        <div className="flex flex-col border: 1px solid black bg-red-900 rounded shadow-lg shadow-red-400">
            <div className="flex max-w-40 max-h-60 self-center p-2 m-2 ">
                <img src="./src/assets/rdr2.jpg" alt="random" />
            </div>
            <div className="pr-4 pt-4 flex flex-col">
                <h3 className="font-bold text-xl">{title}</h3>
                <p className="m-3">Videojuego ambientado en el oeste de Rockstar Games</p>
                <button className="text-white align-bottom m-10">Comprar</button>
            </div>
        </div>
        
    )
  }
  
  export default Tarjeta