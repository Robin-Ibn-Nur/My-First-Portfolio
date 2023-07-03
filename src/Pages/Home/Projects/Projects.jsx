import Title from '../../../Component/Title/Title';
import './Projects.css'
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
import { GoLinkExternal } from "react-icons/go";
import { AiOutlineGithub } from "react-icons/ai";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button,
} from "@material-tailwind/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Projects = () => {

    const projects = [
        {
            projectName: "TalkWorld",
            img: img1,
            description: "TalkWorld is a dynamic MERN Stack language learning platform that revolutionizes the way you learn languages. With an intuitive interface and comprehensive features, it provides a seamless learning experience. Immerse yourself in interactive lessons, connect with passionate instructors, and practice speaking with fellow language enthusiasts. From beginner to advanced levels, TalkWorld empowers you to master languages and explore new cultures. Join TalkWorld today and embark on an exciting journey of linguistic discovery.",
            liveLink: "https://talkworld-6-2023.web.app/",
            clientCode: "https://github.com/saifsammy/talkworld-client-side",
            serverCode: "https://github.com/saifsammy/talkworld-server-side"
        },
        {
            projectName: "Phone Resale Market",
            img: img6,
            description: "Phone Resale Market: Simplifying Phone Resale. Powered by MERN Stack, Phone Resale Market is a convenient platform designed for buying and selling pre-owned phones. Easily browse through a wide selection of quality devices, connect with trustworthy sellers, and secure great deals on your favorite brands. With Phone Resale Market, you can confidently sell your used phone or find an affordable upgrade, all while enjoying a seamless and secure transaction process. Simplify your phone resale experience and join the Phone Resale Market community today.",
            liveLink: "https://phone-resale-7158f.web.app/",
            clientCode: "https://github.com/saifsammy/PhoneResaleMarket-clients-side",
            serverCode: "https://github.com/saifsammy/PhoneResaleMarket-server-side"
        },
        {
            projectName: "ToyToPia",
            img: img2,
            description: "Welcome to ToyTopia, the ultimate online destination for kids' toys! Discover a vast collection of high-quality, fun-filled toys that spark imagination and bring joy to little ones. With our MERN Stack platform, explore and shop for the perfect toys that will create unforgettable playtime adventures for children of all ages. Get ready to step into a world of excitement and wonder at ToyTopia!",
            liveLink: "https://toytopia-999.web.app/",
            clientCode: "https://github.com/saifsammy/toytopia-client-side",
            serverCode: "https://github.com/saifsammy/toytopia-server-side"
        },
        {
            projectName: "Flavor-Fusion",
            img: img3,
            description: "Flavor Fusion is your go-to online destination for culinary inspiration and delightful recipes. Powered by the robust MERN Stack technology, this chef's recipe website offers a treasure trove of delectable dishes from around the world. Unleash your inner chef, explore diverse flavors, and bring gourmet creations to your kitchen with Flavor Fusion. Elevate your cooking skills and embark on a flavorful journey with our carefully curated collection of recipes, tips, and techniques. Get ready to ignite your taste buds and let your culinary imagination run wild with Flavor Fusion.",
            liveLink: "https://flavor-fusion-f1.web.app/",
            clientCode: "https://github.com/saifsammy/flavor-fusion-client-side",
            serverCode: "https://github.com/saifsammy/flavor-fusion-server-side"
        },
        {
            projectName: "DraGoMan",
            img: img4,
            description: "DraGoMan: Your Gateway to Multilingual Communication. Powered by MERN Stack, DraGoMan is an innovative interpreter website that breaks down language barriers. Seamlessly connect with professional interpreters who can assist you in real-time communication across multiple languages. With DraGoMan, achieve effective and efficient cross-cultural understanding, whether for business meetings, personal interactions, or travel. Experience smooth communication and bridge language gaps effortlessly with DraGoMan's reliable interpretation services. Connect, communicate, and conquer language barriers with DraGoMan.",
            liveLink: "https://my-project-d0fe6.web.app/",
            clientCode: "https://github.com/saifsammy/DraGoMan-client-side",
            serverCode: "https://github.com/saifsammy/DraGoMan-server-side"
        },
        {
            projectName: "BackPacker",
            img: img5,
            description: "BackPacker: Your Ultimate Travel Companion. Powered by MERN Stack, BackPacker is a comprehensive travel lover guide website that caters to your wanderlust. Discover hidden gems, plan unforgettable adventures, and access insider tips from experienced globetrotters. With BackPacker, explore breathtaking destinations, find the best accommodations, and immerse yourself in diverse cultures around the world. Whether you're a solo traveler or a group explorer, BackPacker equips you with the tools and inspiration to create lifelong memories. Embark on your next travel escapade with BackPacker, your trusted travel companion.",
            liveLink: "https://client-side-e5819.web.app/",
            clientCode: "https://github.com/saifsammy/BackPacker--client-side",
            serverCode: "https://github.com/saifsammy/BackPacker-server-side"
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
            description: "Panda E-commerce: Your One-Stop Shop. Panda E-commerce is a simple bootstrap landing page that brings you a delightful online shopping experience. ",
            liveLink: "https://saifsammy.github.io/panda-ecommerce/",
            clientCode: "https://github.com/saifsammy/panda-ecommerce",
        },
        {
            projectName: "Robin's Ed-Tech",
            img: img9,
            description: "Robin's Ed-Tech: Empowering Education with Technology. Robin's Ed-Tech is a simple bootstrap landing page that showcases the transformative power of educational technology. Designed with a clean and modern interface, it introduces innovative solutions to enhance learning experiences. Explore a range of educational tools, interactive resources, and personalized learning platforms that foster engagement and knowledge retention. With Robin's Ed-Tech, educators and learners can unlock new possibilities and embrace the digital era of education. Join us in shaping the future of learning with Robin's Ed-Tech.",
            liveLink: "https://saifsammy.github.io/A-3-Bootstrap/",
            clientCode: "https://github.com/saifsammy/A-3-Bootstrap",
        },
        {
            projectName: "Pin Matcher",
            img: img10,
            description: "Pin Matcher: Generate and Secure Your PINs. Pin Matcher is a JavaScript-powered tool that allows you to generate random PINs effortlessly. With its robust algorithm, Pin Matcher ensures the creation of unique and secure PIN combinations. Whether you need a PIN for personal use, online accounts, or secure access, Pin Matcher has you covered. Generate PINs instantly, and rest assured that your information stays protected. Simplify your PIN generation process and enhance your security with Pin Matcher's reliable JavaScript functionality.",
            liveLink: "https://saifsammy.github.io/pin-matcher-solution/",
            clientCode: "https://github.com/saifsammy/pin-matcher-solution",
        },
    ]

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div id='myPortfolio' className='h-auto'>
            <Title text="my projects"></Title>
            <div className="container mx-auto lg:px-10">
                <>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: false,
                        }}
                        pagination={pagination}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            projects.map((project, i) => <SwiperSlide key={i}
                            >
                                <Card className="w-auto backdrop-blur-sm bg-white/10 border-none">
                                    <CardHeader floated={false} className="h-auto">
                                        <img src={project?.img} alt="project-image" />
                                    </CardHeader>
                                    <CardBody className="text-center">
                                        <Typography variant="h4" color="white" className="mb-2">
                                            {project?.projectName}
                                        </Typography>
                                        <Typography color="blue" className="font-bold" textGradient>
                                            {project?.description}
                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="flex justify-center gap-5 pt-2">
                                        <Tooltip content="Live Site">
                                            <a href={project?.liveLink} target='_blank' rel="noopener noreferrer">
                                                <Button className='flex items-center gap-2' variant="outlined"><GoLinkExternal />Live</Button>
                                            </a>
                                        </Tooltip>
                                        <Tooltip content="Client Code">
                                            <a href={project?.clientCode} target='_blank' rel="noopener noreferrer">
                                                <Button className='flex items-center gap-2' variant="outlined"><AiOutlineGithub />Client</Button>
                                            </a>
                                        </Tooltip>
                                        {
                                            project?.serverCode && <Tooltip content="Server Code">
                                                <a href={project?.serverCode} target='_blank' rel="noopener noreferrer">
                                                    <Button className='flex items-center gap-2' variant="outlined"><AiOutlineGithub />Server</Button>
                                                </a>
                                            </Tooltip>
                                        }
                                    </CardFooter>
                                </Card>

                            </SwiperSlide>)
                        }
                    </Swiper>
                </>
            </div>
        </div>

    );

};

export default Projects;