import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

const PartyDetails: React.FC = () => {
  // Function to open Google Maps with exact coordinates
  const handleLocationClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    // Exact coordinates for Calle 10 4, Santo Domingo
    const latitude = 18.479530130042317;
    const longitude = -69.98816533991199;
    const label = "Calle 10 4, Santo Domingo";
    window.open(
      `https://www.google.com/maps?q=${latitude},${longitude}&label=${encodeURIComponent(
        label
      )}`,
      "_blank"
    );
  };

  return (
    <div className="px-6 pt-10 pb-8 mt-10 text-center rounded-lg bg-[#072142]/50">
      <h3 className="text-2xl font-semibold text-[#64e9ff]">
        ¡Únete a la Celebración!
      </h3>

      <div className="grid gap-8 mt-8 md:grid-cols-3">
        <div className="flex flex-col items-center p-4 transition-transform transform rounded-lg bg-[#0a2463]/40 hover:scale-105">
          <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-[#ff6e9c]/30">
            <Calendar className="w-6 h-6 text-[#ff6e9c]" />
          </div>
          <h4 className="mb-1 text-lg font-medium text-[#ffaac1]">Fecha</h4>
          <p className="text-xl font-bold text-white">10 de Mayo, 2025</p>
          <p className="mt-1 text-sm text-[#78c3fb]">Sábado</p>
        </div>

        <div className="flex flex-col items-center p-4 transition-transform transform rounded-lg bg-[#0a2463]/40 hover:scale-105">
          <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-[#64e9ff]/30">
            <Clock className="w-6 h-6 text-[#64e9ff]" />
          </div>
          <h4 className="mb-1 text-lg font-medium text-[#64e9ff]">Hora</h4>
          <p className="text-xl font-bold text-white">3:00 PM</p>
          <p className="mt-1 text-sm text-[#78c3fb]">a 6:00 PM</p>
        </div>

        <div className="flex flex-col items-center p-4 transition-transform transform rounded-lg bg-[#0a2463]/40 hover:scale-105">
          <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-[#ffaac1]/30">
            <MapPin className="w-6 h-6 text-[#ffaac1]" />
          </div>
          <h4 className="mb-1 text-lg font-medium text-[#ffaac1]">Lugar</h4>
          <button
            onClick={handleLocationClick}
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick(e)}
            className="group cursor-pointer focus:outline-none"
            tabIndex={0}
            aria-label="Ver ubicación en Google Maps"
          >
            <p className="text-xl font-bold text-white group-hover:text-[#64e9ff] transition-colors">
              Villa Aura
            </p>
            <p className="mt-1 text-sm text-[#78c3fb] group-hover:text-[#ffaac1] transition-colors">
              Santo Domingo Oeste
            </p>
            <p className="mt-2 text-xs text-[#64e9ff] opacity-80 underline">
              Ver en Google Maps
            </p>
          </button>
        </div>
      </div>

      <div className="p-4 mt-8 text-center rounded-lg bg-[#ff6e9c]/20">
        <p className="text-lg text-[#ffccd5]">
          ¡Por favor traer traje de baño! ¡Tendremos actividades acuáticas para
          los pequeños!
        </p>
      </div>
    </div>
  );
};

export default PartyDetails;
