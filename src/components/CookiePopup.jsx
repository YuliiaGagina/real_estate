import React, { useState, useEffect } from "react";

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (!cookieAccepted) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-100 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-md">
            <p className="text-lg">
              Questo sito utilizza i cookie per migliorare la tua esperienza.
              Per favore accettali per continuare.
            </p>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-primary-300 text-white rounded hover:bg-primary-500"
                onClick={handleAccept}
              >
                Accettare
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookiePopup;
