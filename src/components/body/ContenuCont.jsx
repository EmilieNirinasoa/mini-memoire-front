import React from 'react';
import chuImage from '../../image/chu.jpg';

export default function ContenuCont() {
  return (
    <div className="flex my-16 py-8 ml-24 space-x-8 w-full h-full">
      {/* Info Box */}
      <div className="relative bg-gray-100 text-gray-700 p-8 rounded-lg shadow-lg w-1/3 h-full text-center my-48 mr-64">
        {/* Decorative circles */}
        <div className="absolute -top-5 -left-5 bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center">
          <div className="bg-black rounded-full w-6 h-6"></div>
        </div>
        <div className="absolute -bottom-5 -right-5 bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center">
          <div className="bg-black rounded-full w-6 h-6"></div>
        </div>
        
        <p className="text-lg">
          <span className="font-bold text-purple-400">Email:</span> chuft@gmail.com
          
        </p>
        
        <p className="mt-4">
          <span className="font-bold text-blue-700">Numéro Téléphone:</span> 0347789655
        </p>
      </div>
      
      {/* Vertical Bars */}
      <div className="flex space-x-4 h-full">
  <div className="w-1/6 h-[400px] bg-purple-900 flex items-center justify-center text-white text-lg my-24" style={{ backgroundColor: 'rgba(119, 37, 118, 1)' }}>
    
  </div>
  <div style={{ backgroundColor: 'rgba(191, 104, 190, 1)' }} className="w-1/6 h-[500px] bg-purple-500 flex items-center justify-center text-white text-lg my-16">
    
  </div>
  <div  className="w-1/6 h-[600px] overflow-hidden rounded-lg flex items-center justify-center">
    <img src={chuImage} alt="CHU TAMBOHOBE" className="w-full h-full object-cover" />
  </div>
</div>

    </div>
  );
}
