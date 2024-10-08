import { React, useState, useEffect } from 'react';
import './PortfolioPage.css';
import { portfolioPageData, titlePortfolioPageData } from '@/src/utils/data';
import Image from 'next/image';
import Title from '../Title/Title';
import Link from 'next/link'; 



// Función para generar un slug URL-amigable
function slugify(title) {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}


const PortfolioPage = () => {
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilteredProjects(portfolioPageData.filter(project =>
        filter === 'All' || project.category === filter
      ));
    }, 100); // Ajuste del delay para la animación

    return () => clearTimeout(timeout);
  }, [filter]);

  return (

    <div className="portPage-wrapper">
      <div className="container">
        <div className="portPage-container">

        
            {/* Head */}
            <Title 
                tag={titlePortfolioPageData.tag} 
                title={titlePortfolioPageData.title} 
                description={titlePortfolioPageData.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                /* description={titlePortfolioPageData.description}  */
                className="portPage-title"
            />


            {/* Buttons */}
            <div className="ppfilter-container">
                <button className="portPage-button" onClick={() => setFilter('All')}>All</button>
                <button className="portPage-button" onClick={() => setFilter('Optimum Commercial')}>Commercial</button>
                <button className="portPage-button" onClick={() => setFilter('Optimum Residential')}>Residential</button>
            </div>

            {/* Images */}
            {/* Grid section */}
            <div className='portPage-grid-container'>
                {filteredProjects.map(project => (
                  <Link key={project.id} href={`/portfolio/${project.id}#${slugify(project.title)}`} passHref> {/* el # asegura que no lo tome como param para la ruta dinámica */}
                    <div className="portPage-feature">
                      <Image
                        src={project.image}
                        alt={`${project.title} - Portfolio Optimum stucco services`}
                        className="portPage-project-image"
                        width={300}
                        height={200}
                      />
                      <div className="portPage-project-info">
                        <h3 className="portPage-project-title">{project.title}</h3>
                        {project.category && <p className="portPage-project-desc">{project.category}</p>}
                      </div>
                    </div>
                  </Link>
        



                ))}
            </div>

            {/* <div className="ppprojects-container">
                {filteredProjects.map(project => (
                <div key={project.id} className="ppproject-card animate">
                    <img className="portPage-image" src={project.image} alt={project.title} />
                    <h3>{project.title}</h3>
                </div>
                ))}
            </div> */}
        

        </div>
      </div>
    </div>
    
    
  );
};

export default PortfolioPage;

