import { useState } from "react";

export default function LisaMemorialDaySite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

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
    <div className="min-h-screen text-gray-800" style={{ backgroundImage: 'url(/background.gif)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-ensaf.png" alt="ENSA Fès" className="w-9 h-9 rounded" onError={(e) => (e.target.style.display = "none")} />
            <div className="leading-5">
              <p className="font-semibold text-sm">Laboratoire LISA – ENSA Fès</p>
              <p className="text-xs text-gray-500">USMBA</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <button key={n.id} onClick={() => setActiveSection(n.id)} className={`text-sm font-medium hover:text-indigo-600 transition ${activeSection === n.id ? "text-indigo-600 underline" : ""}`}>
                {n.label}
              </button>
            ))}
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((n) => (
                <button key={n.id} onClick={() => { setActiveSection(n.id); setMenuOpen(false); }} className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 ${activeSection === n.id ? "text-indigo-600" : ""}`}>
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Content Sections */}
      <main>
        {activeSection === "about" && (
          <section className="py-16 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-black text-gray-900">
              Journée de recherche en hommage au <span className="text-indigo-700">Pr. Mohamed Alfidi</span>
            </h1>
            <p className="mt-3 text-base text-gray-600">
              Membre fondateur du Laboratoire LISA (depuis 2015). Une journée scientifique pour honorer son héritage académique, humain et institutionnel.
            </p>
          </section>
        )}

        {activeSection === "program" && (
          <section className="py-14 bg-white/80 backdrop-blur">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Programme</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img src="/ima.jpg" alt="Programme de la journée" className="rounded-xl shadow-lg w-full" onError={(e) => (e.target.style.display = "none")} />
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
            </div>
          </section>
        )}

        {activeSection === "speakers" && (
          <section className="py-14 bg-gradient-to-br from-white to-indigo-50">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-6">Intervenants invités</h2>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li>🎤 Pr. A. Lahlou – Université Hassan II Casablanca</li>
                <li>🎤 Pr. Y. Chaibi – USMBA Fès</li>
                <li>🎤 Pr. Z. Chalh – USMBA Fès</li>
              </ul>
            </div>
          </section>
        )}

        {activeSection === "committees" && (
          <section className="py-14 bg-white border-y">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Comités de la journée</h2>
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
                    <li>Pr. Zakaria CHALH (Président du comité)</li>
                    <li>Pr. Nabil EL AKCHIOUI</li>
                    <li>Pr. Mohamed BENDAOUD</li>
                    <li>Pr. El Mehdi MELLOULI</li>
                    <li>Pr. Touria HAIDI</li>
                    <li>Pr. Amine EL FATHI</li>
                    <li>Pr. Abdelmoumen KAABAL</li>
                    <li>Pr. Younes FARHAN</li>
                    <li>Doctorants & Jeunes enseignants du LISA</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === "calls" && (
          <section className="py-14 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-6">Appels à communications</h2>
              <p className="text-gray-700 mb-4">Les doctorants sont invités à soumettre leurs travaux sous forme de communication orale ou de poster.</p>
              <p className="text-gray-600">📅 Date limite de soumission : <strong>15 novembre 2025</strong></p>
              <p className="text-gray-600 mb-4">📢 Notification d’acceptation : <strong>25 novembre 2025</strong></p>
              <div className="flex gap-4 mt-4">
                <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Soumettre un papier</button>
                <button className="px-5 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700">Soumettre un poster</button>
              </div>
            </div>
          </section>
        )}

        {activeSection === "info" && (
          <section className="py-14 bg-indigo-50">
            <div className="max-w-3xl mx-auto px-4 text-gray-800">
              <h2 className="text-3xl font-bold mb-6">Infos pratiques</h2>
              <p>📍 <strong>Lieu :</strong> École Nationale des Sciences Appliquées de Fès</p>
              <p>📅 <strong>Date :</strong> 10 décembre 2025</p>
              <p>🕘 <strong>Heure :</strong> 9h00 – 17h30</p>
            </div>
          </section>
        )}

        {activeSection === "register" && (
          <section className="py-14 bg-white">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-4">Inscription</h2>
              <p className="text-gray-700 mb-4">L’inscription est gratuite mais obligatoire.</p>
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">S’inscrire à la journée</button>
            </div>
          </section>
        )}

        {activeSection === "contact" && (
          <section className="py-14 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-6">Contact</h2>
              <p className="text-gray-700 mb-2">Pour toute question :</p>
              <a href="mailto:lisa.usmba@gmail.com" className="text-indigo-600 font-semibold hover:underline">lisa.usmba@gmail.com</a>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="py-10 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-semibold">Laboratoire LISA – ENSA Fès</p>
              <p className="text-sm text-gray-500">Journée de recherche en hommage au Pr. Mohamed Alfidi</p>
            </div>
            <div className="text-sm text-gray-500">© {new Date().getFullYear()} LISA – USMBA</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
