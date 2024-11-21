import React from 'react';

const Boton: React.FC = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">Pagina con boton</h1>
        <button
          className="px-6 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
          onClick={() => alert('El botón no hace nada, como tu')}
        >
          Clica para no hacer nada
        </button>
      </div>
    </div>
  );
};

export default Boton;
