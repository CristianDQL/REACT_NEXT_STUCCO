import Image from "next/image";
import { individualPortfolioPageData } from '@/src/utils/data';

export async function generateStaticParams() {
    // Generates static parameters for dynamic routes
    return individualPortfolioPageData.map(project => ({
        params: { id: project.id.toString() },
    }));
}

// This function directly accesses the local data array by ID, assuming it's already imported and available
function getProject(id){
    // Directly return the project data without fetching from an external source
    return individualPortfolioPageData.find(project => project.id.toString() === id);
}

// This component fetches the project data using the ID from the URL parameters
export default function Project({ params }) {
    const project = getProject(params.id);

    // Check if the project exists before attempting to render it
    if (!project) {
        return <div>Project not found.</div>;
    }

    return (
        <div className="ipp-wrapper">
            <div className="container">
                <div className="ipp-container">
                    <h1>{project.title}</h1>
                    {/* <Image
                        src={project.image}
                        alt={`${project.title} - Portfolio Optimum stucco services`} {project.title}
                        <h3>{project.title}</h3>
                        className="portPage-project-image"
                        width={300}
                        height={200}
                      /> */}
                    {project.images.map((image, index) => (
                        <div key={index}>
                            <Image src={image} alt={`${project.title} - image ${index + 1}`} width={800} height={600} />
                        </div>
                    ))}
                    <p>{project.description}</p>
                    <p>Category: {project.category}</p>
                </div>
            </div>
        </div>
    );
}
