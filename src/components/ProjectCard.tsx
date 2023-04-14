export interface IProjectCard {
    title: string,
    description: string,
    imgUrl: string,
    tags: string[]
}

const ProjectCard: React.FC<IProjectCard> = ({ title, description, imgUrl, tags }) => {
    return (
        <>
            <div>

            </div>
        </>
    )
}

export default ProjectCard;