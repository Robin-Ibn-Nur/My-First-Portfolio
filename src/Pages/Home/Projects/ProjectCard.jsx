import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button,
} from "@material-tailwind/react";

const ProjectCard = ({ project }) => {
    const {
        projectName,
        img,
        description,
        liveLink,
        clientCode,
        serverCode,
    } = project;

    // Limit description to 20 words
    const truncatedDescription = description.split(' ').slice(0, 15).join(' ');

    return (
        <Card
            shadow={true}
            color="transparent"
            className="w-100 border overflow-hidden rounded-lg transition-transform transform hover:scale-105"
        >
            <CardHeader
                floated={false}
                shadow={false}
                className="m-0 relative p-2"

            >
                <img src={img} alt={projectName} className="object-cover w-full h-full" />

            </CardHeader>
            <CardBody className="relative">
                <Typography variant="h4" color="white" className="mb-4">
                    {projectName}
                </Typography>
                <Typography color="white" className="mb-6">
                    {truncatedDescription}
                    {/* {description} */}
                </Typography>
            </CardBody>
            <CardFooter className="mt-auto">
                <div className="flex items-center gap-5">
                    <Tooltip content="Live Site">
                        <a href={liveLink} target='_blank' rel="noopener noreferrer">
                            <Button className='flex items-center gap-2' variant="outlined">Live</Button>
                        </a>
                    </Tooltip>
                    <Tooltip content="Client Code">
                        <a href={clientCode} target='_blank' rel="noopener noreferrer">
                            <Button className='flex items-center gap-2' variant="outlined">Client</Button>
                        </a>
                    </Tooltip>
                    {serverCode && (
                        <Tooltip content="Server Code">
                            <a href={serverCode} target='_blank' rel="noopener noreferrer">
                                <Button className='flex items-center gap-2' variant="outlined">Server</Button>
                            </a>
                        </Tooltip>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
