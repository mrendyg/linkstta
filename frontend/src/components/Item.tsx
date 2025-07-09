import type { Link } from "../interfaces/Interface";
import { getListLink } from "../api/link";
import { useEffect, useState } from "react";



const Item = () => {
    const [links, setLinks] = useState<Link[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const linksData = await getListLink();
                setLinks(linksData);
            } catch (err) {
                setError('Error al cargar los Links');
                console.error('Error fetching Links: ', err);
            } finally {
                setLoading(false);
            }
        };
        fetchLinks();
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>
    if (links.length === 0) return <div>No se encuentran Links</div>
    return (
  <div className="flex flex-wrap justify-center gap-6 p-4">
    {links.map(link => (
      <div 
        key={link.id}
        className="group relative w-56 h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100"
      >
        {/* Imagen con efecto hover de zoom */}
        <div className="h-40 overflow-hidden">
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <img 
                src={link.image} 
                alt={link.name}
                className="w-full h-full object-contain p-2 bg-gray-50 rounded-t-lg group-hover:scale-[1.03] transition-transform duration-300"
            />
          </a>
        </div>

        {/* Contenido de la tarjeta */}
        <div className="p-4">
          {/* Nombre con efecto hover */}
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 truncate">
              {link.name}
            </h3>
          </a>

          {/* Badge de "Abrir" */}
          <div className="mt-3">
            <a 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-200"
            >
              Visitar
            </a>
          </div>
        </div>

        {/* Efecto de brillo al hacer hover */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    ))}
  </div>
)
}

export default Item;