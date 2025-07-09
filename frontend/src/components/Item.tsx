import type { Link } from "../interfaces/Interface";
import { getListLink } from "../api/link";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Item = () => {
    const navigate = useNavigate();
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
    return( 
        <div className="inline-flex">
           
                {links.map(link => (
                    <div key={link.id}>
                        <div className="flex-block">
                        <p>{link.name}</p>
                        <div className="w-[10rem]">
                        <a href={link.url} target="_blank">
                            <img src={link.image}/>
                        </a> 
                        </div>
                        </div>
                        
                    </div>
               

                ))}
            
        </div>
    )
}

export default Item;