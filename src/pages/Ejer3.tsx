import { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import "../index2.css"


function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        
        <div className="group relative perspective-1000">
          
          <div
            className={`relative preserve-3d duration-500 ease-out ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
          >
            
            <div className="absolute w-full backface-hidden">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-indigo-50">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-indigo-900">:v</h2>
                  <button
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="p-2 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-colors"
                  >
                    <ArrowLeftRight className="w-5 h-5 text-indigo-600" />
                  </button>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Clickea y da la vuelta 
                  </p>
                  <div className="h-32 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-800 font-semibold">GIRA</span>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="absolute w-full backface-hidden rotate-y-180">
              <div className="bg-indigo-600 rounded-2xl shadow-xl p-6 border border-indigo-500 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">:V</h2>
                  <button
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="p-2 rounded-full bg-indigo-500 hover:bg-indigo-400 transition-colors"
                  >
                    <ArrowLeftRight className="w-5 h-5 text-white" />
                  </button>
                </div>
                <div className="space-y-4">
                  <p className="text-indigo-100">
                  Clickea y da la vuelta 
                  </p>
                  <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold">VOLVER?</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;