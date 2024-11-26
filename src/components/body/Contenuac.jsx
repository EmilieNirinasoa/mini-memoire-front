import React from 'react';
import circle from '../../image/circle-deco.png';
import circle2 from '../../image/circle-deco2.png';
import imageMain from '../../image/Image.png';

export default function ContenuAc() {
  return (
    <main className="mt-20 flex flex-col items-center w-full h-screen">
      <div className="relative w-full max-w-screen-xl mx-auto p-8 flex flex-col items-center h-full">
        
        {/* Décorations en haut */}
        <div className="absolute top-0 left-0 flex space-x-2">
          <img src={circle} alt="Décoration" className="w-64 h-16" />
        </div>
        
        {/* Titre et Image */}
        <section className="flex items-center justify-between w-full h-[65%]">
          <div className="text-left">
            <h2 className="text-8xl font-bold mb-4" style={{ color: 'rgba(119, 37, 118, 1)' }}>Allô Doc</h2>
            <p className="text-lg text-gray-600">
              Bienvenu sur la <span className="text-purple-700 font-semibold">plateforme de communication</span> entre les docteurs et les patients.
            </p>
          </div>
          <img src={imageMain} alt="Personne au téléphone" className="w-[600.42px] h-[439px] object-cover" />
        </section>
        
        {/* Texte de bas de page et décoration */}
        <div className="mt-12 flex items-center space-between w-full ml-[80%]">
          <p className="text-4xl font-bold text-purple-700">Simple - rapide - Efficace</p>
          <img src={circle2} alt="Décoration" className="w-32 h-16 ml-[15%]" />
        </div>
      </div>
    </main>
  );
}
