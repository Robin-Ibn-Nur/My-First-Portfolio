import Title from '../../../Component/Title/Title';
import './Projects.css'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import img1 from './New folder/talkworld.png';
import img2 from './New folder/toytopia.png';
import img3 from './New folder/flavorFusion.png';
import img4 from './New folder/dragoman.png';
import img5 from './New folder/backpacker.png';
import img6 from './New folder/phoneResaleMarket.png';
import img7 from './New folder/crazyprogrammer.png';
import img8 from './New folder/panda.png';
import img9 from './New folder/RobinsEdTech.png';
import img10 from './New folder/pinMatcher.png';

const Projects = () => {

    const projects = [
        {
            projectName: "TalkWorld",
            img: img1,
            description: "TalkWorld is an Online Language Learning Platform",
            liveLink: "https://talkworld-6-2023.web.app/",
            clientCode: "https://github.com/saifsammy/talkworld-client-side",
            serverCode: "https://github.com/saifsammy/talkworld-server-side"
        },
        {
            projectName: "ToyToPia",
            img: img2,
            description: "ToyTopia is an online kids toys selling Platform.",
            liveLink: "https://toytopia-999.web.app/",
            clientCode: "https://github.com/saifsammy/toytopia-client-side",
            serverCode: "https://github.com/saifsammy/toytopia-server-side"
        },
        {
            projectName: "Flavor-Fusion",
            img: img3,
            description: "Flavor Fusion: A Chef's Recipes Website.",
            liveLink: "https://flavor-fusion-f1.web.app/",
            clientCode: "https://github.com/saifsammy/flavor-fusion-client-side",
            serverCode: "https://github.com/saifsammy/flavor-fusion-server-side"
        },
        {
            projectName: "DraGoMan",
            img: img4,
            description: "DraGoMan is an interpreter.",
            liveLink: "https://my-project-d0fe6.web.app/",
            clientCode: "https://github.com/saifsammy/DraGoMan-client-side",
            serverCode: "https://github.com/saifsammy/DraGoMan-server-side"
        },
        {
            projectName: "BackPacker",
            img: img5,
            description: "BackPacker is a Travel Lover Guide.",
            liveLink: "https://client-side-e5819.web.app/",
            clientCode: "https://github.com/saifsammy/BackPacker--client-side",
            serverCode: "https://github.com/saifsammy/BackPacker-server-side"
        },
        {
            projectName: "Phone Resale Market",
            img: img6,
            description: "Where technology finds new homes and value continues to ring.",
            liveLink: "https://phone-resale-7158f.web.app/",
            clientCode: "https://github.com/saifsammy/PhoneResaleMarket-clients-side",
            serverCode: "https://github.com/saifsammy/PhoneResaleMarket-server-side"
        },
        {
            projectName: "Crazy Programmer",
            img: img7,
            description: "The playful path to knowledge, where curiosity meets entertainment.",
            liveLink: "https://crazy-programmer.netlify.app/",
            clientCode: "https://github.com/saifsammy/Quiz-crackerz",
        },
        {
            projectName: "Panda E-commerce",
            img: img8,
            description: "Simple Bootstrap Landing Page.",
            liveLink: "https://saifsammy.github.io/panda-ecommerce/",
            clientCode: "https://github.com/saifsammy/panda-ecommerce",
        },
        {
            projectName: "Robin's Ed-Tech",
            img: img9,
            description: "Simple Bootstrap Landing Page.",
            liveLink: "https://saifsammy.github.io/A-3-Bootstrap/",
            clientCode: "https://github.com/saifsammy/A-3-Bootstrap",
        },
        {
            projectName: "Pin Matcher",
            img: img10,
            description: "Random Pin Generate with JavaScript.",
            liveLink: "https://saifsammy.github.io/pin-matcher-solution/",
            clientCode: "https://github.com/saifsammy/pin-matcher-solution",
        },
    ]

    return (
        <div id='myPortfolio' className='px-5 h-auto'>
            <Title text="my projects"></Title>
            <Carousel transition={{ duration: 2 }} className="rounded-xl h-auto">
                {
                    projects.map((pro, i) => <div className="relative w-full" key={i}>
                        <img
                            src={pro?.img}
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                            <div className="w-3/4 text-center md:w-2/4">
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                >
                                    {pro?.projectName}
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-12 opacity-80"
                                >
                                    {pro?.description}
                                </Typography>
                                <div className="flex justify-center gap-1">
                                    <a className='w-full' href={pro?.liveLink} target="_blank" rel="noopener noreferrer">
                                        <Button size='lg' color="white">
                                            Live
                                        </Button>
                                    </a>
                                    <a className='w-full' href={pro?.clientCode} target="_blank" rel="noopener noreferrer">
                                        <Button size='lg' color="white">
                                            Cline
                                        </Button>
                                    </a>
                                    <a className='w-full' href={pro?.serverCode} target="_blank" rel="noopener noreferrer">
                                        <Button size='lg' color="white">
                                            server
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
                {/* <div className="relative w-full">
                    <img
                        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                The Beauty of Nature
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                It is not so much for its beauty that the forest makes a claim
                                upon men&apos;s hearts, as for that subtle something, that
                                quality of air that emanation from old trees, that so
                                wonderfully changes and renews a weary spirit.
                            </Typography>
                            <div className="flex justify-center gap-2">
                                <Button size="lg" color="white">
                                    Explore
                                </Button>
                                <Button size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full">
                    <img
                        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                The Beauty of Nature
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                It is not so much for its beauty that the forest makes a claim
                                upon men&apos;s hearts, as for that subtle something, that
                                quality of air that emanation from old trees, that so
                                wonderfully changes and renews a weary spirit.
                            </Typography>
                            <div className="flex justify-center gap-2">
                                <Button size="lg" color="white">
                                    Explore
                                </Button>
                                <Button size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </Carousel>
        </div>

    );

};

export default Projects;