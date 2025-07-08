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
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            name
                        </th>
                        <th>
                            url
                        </th>
                        <th>
                            image
                        </th>
                    </tr>
                </thead>
               
                {links.map(link => (
                    <tr key={link.id}>
                        <td>{link.id}</td>
                        <td>{link.name}</td>
                        <td>{link.url}</td>
                        <td>{link.image}</td>
                    </tr>
               

                ))}
            </table>
        </div>
    )
}

export default Item;