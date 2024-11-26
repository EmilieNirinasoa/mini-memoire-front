import React, { useState } from 'react';

export default function Header() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openSignupModal = () => setShowSignupModal(true);
  const closeSignupModal = () => setShowSignupModal(false);
  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  return (
    <header className="bg-transparent fixed top-0 w-full shadow-md p-4 flex justify-between items-center z-10">
      {/* Menu de navigation */}
      <nav className="flex space-x-16 ml-auto items-center">
        <a href="/" className="font-bold text-black hover:text-purple-500 m-1">Accueil</a>
        <a href="/apropos" className="font-bold text-black hover:text-purple-500 m-1">A Propos</a>
        <a href="/Contact" className="font-bold text-black hover:text-purple-500 m-1">Contact</a>
        
        {/* Boutons */}
        <div className="flex space-x-4 ml-4">
          <button 
            onClick={openSignupModal} 
            className="bg-[rgba(191,104,190,1)] text-white font-bold py-2 px-4 rounded hover:bg-[rgba(191,104,190,0.8)]">
            Inscription
          </button>
          <button 
            onClick={openLoginModal} 
            className="border border-[rgba(191,104,190,1)] text-[rgba(191,104,190,1)] font-bold py-2 px-4 rounded hover:bg-[rgba(191,104,190,0.1)]">
            Connexion
          </button>
        </div>
      </nav>

      {/* Modal d'inscription */}
      {showSignupModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-8 rounded shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">Inscription</h2>
            <p className="mb-4">Choisissez votre type de compte :</p>
            <button className="w-full bg-[rgba(191,104,190,1)] text-white font-bold py-2 px-4 rounded mb-2 hover:bg-[rgba(191,104,190,0.8)]"> <a href="/Inscription">
            Inscription pour Patient
            </a>
             
            </button>
            <button className="w-full bg-[rgba(191,104,190,1)] text-white font-bold py-2 px-4 rounded hover:bg-[rgba(191,104,190,0.8)]">
              Inscription pour Docteur
            </button>
            <button onClick={closeSignupModal} className="mt-4 text-gray-500 hover:text-gray-700">Fermer</button>
          </div>
        </div>
      )}

      {/* Modal de connexion */}
      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-8 rounded shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">Connexion</h2>
            <p className="mb-4">Choisissez votre type de compte :</p>
            <button className="w-full border border-[rgba(191,104,190,1)] text-[rgba(191,104,190,1)] font-bold py-2 px-4 rounded mb-2 hover:bg-[rgba(191,104,190,0.1)]">
              Connexion pour Patient
            </button>
            <button className="w-full border border-[rgba(191,104,190,1)] text-[rgba(191,104,190,1)] font-bold py-2 px-4 rounded hover:bg-[rgba(191,104,190,0.1)]">
              Connexion pour Docteur
            </button>
            <button onClick={closeLoginModal} className="mt-4 text-gray-500 hover:text-gray-700">Fermer</button>
          </div>
        </div>
      )}
    </header>
  );
}
