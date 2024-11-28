export default function Carousel(){
    return(
      <div id="carousel-5" data-carousel='{ "loadingclasses": "opacity-0" }' className="relative w-full">
    <div className="carousel h-96">
      <div className="carousel-body h-3/4 opacity-0">
  
        <div className="carousel-slide">
          <div className="flex size-full justify-center">
            <img src="https://concepto.de/wp-content/uploads/2018/08/monta%C3%B1as-e1533762807687-800x400.jpg" className="size-full " alt="Montaña" width="600" height="200" />
          </div>
        </div>
     
        <div className="carousel-slide">
          <div className="flex size-full justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Barbados_beach.jpg" className="size-full " alt="Playa" width="600" height="200" />
          </div>
        </div>
  
        <div className="carousel-slide">
          <div className="flex size-full justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Selva_tropical_en_la_biosfera_de_el_rio_pl%C3%A1tano_Honduras.jpg/800px-Selva_tropical_en_la_biosfera_de_el_rio_pl%C3%A1tano_Honduras.jpg" className="size-full" alt="Selva" width="600" height="200"/>
          </div>
        </div>
      </div>
      <div className="carousel-pagination bg-base-100 bottom-0 z-[1] h-1/4 justify-between gap-2 space-x-0 pt-2 overflow-y-auto">
        <img
          src="https://concepto.de/wp-content/uploads/2018/08/monta%C3%B1as-e1533762807687-800x400.jpg"
          className="carousel-active:opacity-100 grow object-cover opacity-30"
          alt="Montaña"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/96/Barbados_beach.jpg"
          className="carousel-active:opacity-100 grow object-cover opacity-30"
          alt="Playa"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Selva_tropical_en_la_biosfera_de_el_rio_pl%C3%A1tano_Honduras.jpg/800px-Selva_tropical_en_la_biosfera_de_el_rio_pl%C3%A1tano_Honduras.jpg"
          className="carousel-active:opacity-100 grow object-cover opacity-30"
          alt="Selva"
        />
      </div>
    </div>
  
  
    <button type="button" className="carousel-prev">
      <span className="mb-15" aria-hidden="true">
        <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
          <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
        </span>
      </span>
      <span className="sr-only">Previous</span>
    </button>
  
  
    <button type="button" className="carousel-next">
      <span className="sr-only">Next</span>
      <span className="mb-15" aria-hidden="true">
        <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
          <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
        </span>
      </span>
    </button>
  </div>   );
   
  }