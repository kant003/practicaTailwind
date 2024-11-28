import React from "react";

const Avatares: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-red-300 to-gray-300 flex flex-col justify-center items-center p-4">
            <h1 className="text-5xl font-extrabold text-white mb-6 text-center max-w-2xl">
                Galería de Avatares
            </h1>
            <p className="text-xl text-white mb-12 text-center max-w-xl">
            </p>

            <div className="flex justify-center gap-10">
                <div className="flex items-center gap-6">
                    <img
                        src="https://cdn.dribbble.com/userupload/3396433/file/original-a7938da0f7cbc7a5a75d4237da6d2d02.png?resize=752x&vertical=center"
                        alt="Avatar 1"
                        className="w-20 h-20 rounded-full border-4 border-pink-100 shadow-lg transform hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src="https://cdn.dribbble.com/userupload/3396434/file/original-bb0363985b8dc8bac7b37fc2493cedfe.png?resize=752x&vertical=center"
                        alt="Avatar 2"
                        className="w-20 h-20 rounded-full border-4 border-pink-100 shadow-lg transform hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src="https://cdn.dribbble.com/userupload/3396435/file/original-f0e26cddd4ccfa1f0ada14958c3e8ead.png?resize=752x&vertical=center"
                        alt="Avatar 3"
                        className="w-20 h-20 rounded-full border-4 border-pink-100 shadow-lg transform hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
    );
};

export default Avatares;
