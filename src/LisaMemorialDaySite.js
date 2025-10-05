import { useState } from "react";

export default function LisaMemorialDaySite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about"); // 👈 état pour contrôler l’affichage

  const navItems = [
    { id: "about", label: "À propos" },
    { id: "program", label: "Programme" },
    { id: "speakers", label: "Intervenants" },
    { id: "committees", label: "Comités" },
    { id: "calls", label: "Appels" },
    { id: "info", label: "Infos pratiques" },
    { id: "register", label: "Inscription" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div
      className="min-h-screen text-gray-800"
      style={{
        backgroundImage: "url(/background.gif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo-ensaf.png"
              alt="ENSA Fès"
              className="w-9 h-9 rounded"
              onError={(e) => (e.target.style.display = "none")}
            />
            <div className="leading-5">
              <p className="font-semibold text-sm">Laboratoire LISA – ENSA Fès</p>
              <p className="text-xs text-gray-500">USMBA</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => setActiveSection(n.id)}
                className={`text-sm font-medium hover:text-indigo-600 ${
                  activeSection === n.id ? "text-indigo-600 underline" : ""
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Menu mobile déroulant */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => {
                    setActiveSection(n.id);
                    setMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium w-full text-left ${
                    activeSection === n.id ? "bg-indigo-50 text-indigo-700" : "hover:bg-gray-50"
                  }`}
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ===== SECTIONS ===== */}

      {activeSection === "about" && (
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-indigo-700 mb-4">
            Journée de recherche en hommage au Pr. Mohamed Alfidi
          </h1>
          <p className="text-lg text-gray-700">
            Membre fondateur du Laboratoire LISA (depuis 2015). Une journée scientifique pour
            honorer son héritage académique, humain et institutionnel.
          </p>
        </section>
      )}

      {activeSection === "program" && (
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">📅 Programme</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/ima.jpg"
              alt="Programme de la journée"
              className="rounded-xl shadow-lg w-full"
            />
            <div className="text-gray-700 space-y-4">
              <p>09:00 - Accueil des participants</p>
              <p>09:30 - Discours d'ouverture</p>
              <p>10:00 - Session scientifique 1</p>
              <p>11:30 - Pause café</p>
              <p>12:00 - Session scientifique 2</p>
              <p>13:30 - Déjeuner</p>
              <p>14:30 - Session scientifique 3</p>
              <p>16:00 - Clôture de la journée</p>
            </div>
          </div>
        </section>
      )}

      {activeSection === "committees" && (
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">👥 Comités de la journée</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-indigo-50 rounded-2xl p-6 border">
              <h3 className="text-xl font-semibold mb-4 text-indigo-800">Comité scientifique</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pr. Zakaria CHALH</li>
                <li>Pr. Nabil EL AKCHIOUI</li>
                <li>Pr. Mohamed BENDAOUD</li>
                <li>Pr. El Mehdi MELLOULI</li>
                <li>Pr. Touria HAIDI</li>
                <li>Pr. Amine EL FATHI</li>
                <li>Pr. Abdelmoumen KAABAL</li>
                <li>Pr. Younes FARHAN</li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-2xl p-6 border">
              <h3 className="text-xl font-semibold mb-4 text-indigo-800">Comité d’organisation</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pr. Zakaria CHALH (Président)</li>
                <li>Pr. Nabil EL AKCHIOUI</li>
                <li>Pr. Mohamed BENDAOUD</li>
                <li>Pr. El Mehdi MELLOULI</li>
                <li>Pr. Touria HAIDI</li>
                <li>Pr. Amine EL FATHI</li>
                <li>Pr. Abdelmoumen KAABAL</li>
                <li>Pr. Younes FARHAN</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ➕ Tu peux faire pareil pour les autres sections : calls, info, register, contact... */}
    </div>
  );
}
