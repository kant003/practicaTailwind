

import "flyonui";


function UhInput() {
        
    return(
                
        
   
            <div>
            
                <label className="label-text" htmlFor="number-input-label">Quantity:</label>

                <div className="input-group max-w-sm" data-input-number>
                    <input className="input" id="number-input-label" type="text" defaultValue="0" data-input-number-input />
                    <span className="input-group-text gap-3">
                        <button type="button" className="btn btn-primary btn-soft size-[22px] rounded min-h-0 p-0" aria-label="Decrement button" data-input-number-decrement>
                            <span className="icon-[tabler--minus] size-3.5 flex-shrink-0"></span>
                        </button>
                        <button type="button" className="btn btn-primary btn-soft size-[22px] rounded min-h-0 p-0" aria-label="Increment button" data-input-number-increment>
                            <span className="icon-[tabler--plus] size-3.5 flex-shrink-0"></span>
                        </button>
                    </span>
                </div>    
                
            </div>
            
        
   );      
 
    
}

export default UhInput;