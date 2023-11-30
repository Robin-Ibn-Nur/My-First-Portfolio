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
    const truncatedDescription = description.split(' ').slice(0, 20).join(' ');

    return (
        <Card
            shadow={true}
            color="transparent"
            className="max-w-[24rem] border overflow-hidden rounded-lg transition-transform transform hover:scale-105"
        >
            <CardHeader
                floated={false}
                shadow={false}
                className="m-0 rounded-none h-48 relative"

            >
                <img src={img} alt={projectName} className="object-cover w-full h-full" />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 rounded-lg" />
            </CardHeader>
            <CardBody className="relative">
                <Typography variant="h4" color="white" className="mb-4">
                    {projectName}
                </Typography>
                <Typography color="white" className="mb-6">
                    {truncatedDescription}
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
                <div className="flex justify-center gap-5 pt-2">
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
