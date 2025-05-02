import React from "react";
import { Send } from "lucide-react";

const RSVP: React.FC = () => {
  // Phone number in international format for WhatsApp API
  const phoneNumber = "18499255780";

  // Pre-filled message
  const message = "¡Hola! Confirmo mi asistencia a la fiesta de Antonella. ";

  const handleWhatsAppClick = () => {
    // WhatsApp API URL with phone number and pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="px-6 py-8 mt-10 rounded-lg bg-[#072142]/50">
      <h3 className="mb-6 text-2xl font-semibold text-center text-[#64e9ff]">
        Confirmar Asistencia
      </h3>

      <div className="max-w-md mx-auto text-center">
        <p className="mb-6 text-lg text-[#78c3fb]">
          Para confirmar tu asistencia, simplemente haz clic en el botón y envía
          un mensaje por WhatsApp.
        </p>

        <button
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center w-full px-6 py-4 mx-auto font-bold text-white transition-all rounded-md gap-2 bg-[#25D366] hover:bg-[#20BD5C] transform hover:scale-105 active:scale-95 shadow-lg"
        >
          <Send className="w-5 h-5" />
          <span>Confirmar por WhatsApp</span>
        </button>

        <p className="mt-4 text-sm text-[#ffaac1]">
          Por favor, indícanos cuántas personas asistirán y cualquier
          información adicional importante.
        </p>
      </div>
    </div>
  );
};

export default RSVP;
