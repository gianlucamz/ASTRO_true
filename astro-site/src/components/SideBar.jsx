import { useState } from "react";

const menuSections = [
  {
    title: "Explorar",
    items: ["Mais Vendidos", "Novidades na ASTRO", "Produtos em Alta"],
  },
  {
    title: "Categorias",
    items: [
      "Hardware",
      "Periféricos",
      "Computadores",
      "Smartphones",
      "Games",
      "Diversos",
    ],
  },
  {
    title: "Configurações",
    items: ["Sua Conta", "Faça seu Login", "Contato"],
  },
];

export default function AstroSidebar() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col justify-between py-6 px-4 shrink-0">
        <nav className="flex flex-col gap-6">
          {menuSections.map((section) => (
            <div key={section.title} className="border-b border-gray-400 pb-4">
              <p className="text-sm font-semibold text-gray-800 mb-2">
                {section.title}
              </p>
              <ul className="flex flex-col gap-1">
                {section.items.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => setActiveItem(item)}
                      className={`w-full text-left text-sm px-2 py-1 rounded-md transition-colors ${
                        activeItem === item
                          ? " text-gray-700 font-medium"
                          : "text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="bg-gray-700 rounded-xl p-4 text-black">
          <p className="font-semibold text-md mb-1">
            Enfrentando algum problema?
          </p>
          <p className="text-xs text-purple-200 mb-3">
            Entre em contato com nosso suporte especializado!
          </p>
          <button className="w-full bg-white text-purple-700 text-xs font-semibold py-2 rounded-lg hover:bg-purple-50 transition-colors">
            Saiba Mais
          </button>
        </div>
      </aside>

      {/* <main className="flex-1 flex items-center justify-center text-gray-400 text-sm">
        Conteúdo da página aqui
      </main> */}
    </div>
  );
}
