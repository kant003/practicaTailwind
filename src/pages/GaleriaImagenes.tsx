import React from "react";

const images = [
  { src: "https://i.pinimg.com/474x/1d/1c/78/1d1c781069522f54b90f602fad6226d1.jpg", alt: "Imagen 1", title: "Breakfast At Tifanny's" },
  { src: "https://i.pinimg.com/474x/53/44/ed/5344edf499e179b8aabfeb29954e1731.jpg", alt: "Imagen 2", title: "Roman Hollyday" },
  { src: "https://i.pinimg.com/474x/9f/2d/c2/9f2dc2fc61f1a6393edbc66d14125723.jpg", alt: "Imagen 3", title: "Charade" },
  { src: "https://i.pinimg.com/474x/5f/fc/60/5ffc6042921f5d2ecea721256c91e38a.jpg", alt: "Imagen 4", title: "Gilda" },
  { src: "https://i.pinimg.com/474x/83/65/1c/83651c3cab15f80bb7b56920d3f51d6f.jpg", alt: "Imagen ", title: "Reservoir dogs" },
  { src: "https://i.pinimg.com/enabled_lo_mid/474x/ab/b0/d2/abb0d2d3b97bd584804a4f0d6f0b569b.jpg", alt: "Imagen 2", title: "Dead poets society" },
  { src: "https://i.pinimg.com/enabled_lo_mid/474x/8b/5d/81/8b5d81307a347808b87d0a1a729acb4e.jpg", alt: "Imagen 3", title: "Castle in the sky" },
  { src: "https://i.pinimg.com/474x/3a/be/ce/3abece75c49ff2637c4fcccae19ae677.jpg", alt: "Imagen 4", title: "Pretty Woman" },
];

const Gallery: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="text-center py-8 bg-gradient-to-r from-[#D7B89E] via-[#E9D6C1] to-[#F5EAE0] text-black font-serif">
        <h1 className="text-3xl font-bold shadow-md">CARTELERA</h1>
        <p className="text-gray-600 mt-2 font-serif">escoge la película perfecta</p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="text-center py-6 bg-gradient-to-r from-[#D7B89E] via-[#E9D6C1] to-[#F5EAE0] text-black font-serif">
        <p className="text-sm">Página creada por Laura</p>
      </footer>
    </div>
  );
};

export default Gallery;