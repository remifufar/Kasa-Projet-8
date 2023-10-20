import React from 'react'
import Data from '../../data/data.json';
import { NavLink, useParams } from 'react-router-dom';
import Collapse from '../Collapse/Collapse';
import Rating from'./Rating';
import Carrousel from "./Carrousel";




function ContentAppartements() {

    const { id } = useParams();
    const item = Data.find(data => data.id === id)
    if (item === undefined) { 
        return <section className="error_page">
            <p className="error_page_subtitle">Malheureusement, le logement que vous recherchez n'est plus disponible ou n'existe pas.</p>
            <NavLink title='Accueil' end to='/' className="error_page_link">Retourner sur la page d'accueil</NavLink> 
        </section>
    }
    return (
        <section key={id}>
            <Carrousel images={item.pictures}/>
            <div className='Appartement_header'>

                <div className='Appartement_header_titre'>
                    <h1>{item.title}</h1>
                    <h2>{item.location}</h2>
                    <div className='tags'>
            {item.tags.map((tag, i) => (
            <p className='tag' key={i} >{tag}</p> ))}
                </div>
                </div>
                
                <div className='tags-content'>
                
                
                <div className='Appartement_header_people'>
                    <h3>{item.host.name}</h3>
                    <img src={item.host.picture} alt="photo" />
                </div>
                    <Rating scaleValue={item.rating} />
                </div>
            
                
            </div>
            <article className='Collapse-Content'>
            <div className='Collapse'>
                    <Collapse 
                        title='Description'
                        content={item.description}
                    />
                </div>
                <div className='Collapse'>
                    <Collapse
                        title='Équipements'
                        content={item.equipments.map((equipment, i) => (
                            <ul key={i}>
                                <li>{equipment}</li>
                            </ul>
                        ))}
                    />
                </div>
                </article>
        </section>
  )
}

export default ContentAppartements
