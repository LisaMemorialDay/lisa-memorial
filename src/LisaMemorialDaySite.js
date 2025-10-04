import { useState } from "react";

export default function LisaMemorialDaySite() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo-ensaf.png"
              alt="ENSA Fès"
              className="w-9 h-9 rounded"
              onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
            />
            <div className="leading-5">
              <p className="font-semibold text-sm">Laboratoire LISA – ENSA Fès</p>
              <p className="text-xs text-gray-500">USMBA</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-sm font-medium hover:text-indigo-600">
                {n.label}
              </a>
            ))}
            <a href="#register" className="inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700">
              S'inscrire
            </a>
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
                <a key={n.id} href={`#${n.id}`} className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                  {n.label}
                </a>
              ))}
              <a href="#register" className="block text-center px-3 py-2 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700" onClick={() => setMenuOpen(false)}>
                S'inscrire
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-rose-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-black text-gray-900">
              Journée de recherche en hommage au <span className="text-indigo-700">Pr. Mohamed Alfidi</span>
            </h1>
            <p className="mt-3 text-base text-gray-600">
              Membre fondateur du Laboratoire LISA (depuis 2015). Une journée scientifique pour honorer son héritage académique, humain et institutionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Committees */}
      <section id="committees" className="py-14 bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Comités de la journée</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Comité scientifique */}
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

            {/* Comité d'organisation */}
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
