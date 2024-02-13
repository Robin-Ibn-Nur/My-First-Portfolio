import Animation from '../../../Component/Animation/Animation';
// import SkillImage from '../../../Component/SkillImage/SkillImage';
import Title from '../../../Component/Title/Title';
import { Badge } from "@material-tailwind/react";
import './index.css'

const SkillSection = () => {


    // Data for expertZone
    const expertZone = ["HTML", "CSS", "JavaScript", "React.JS", "Tailwind CSS", "Bootstrap", "daisyUI", "NextUI", "Material UI", "Material Tailwind"
    ]

    // Data for comfortZone
    const comfortZone = ["Express.JS", "Firebase", "AXIOS", "MongoDB", "JWT Token", "Netlify", "React Router", "Tanstack Query", "React Native",
    ]

    // Data for familiarZone
    const familiarZone = ["Node.js",
        "Nodemailer", "Stripe", "Vercel", "Typescript"
    ]
    return (
        <div id='skills' className="p-10">
            <Animation>
                <Title text="skills" />
            </Animation>
            <div className="grid justify-center container mx-auto gap-y-10 w-full">
                <Animation>
                    <p className="text-2xl font-bold capitalize after:content-['_💪'] my-4">Expert</p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
                        {
                            expertZone.map((im, i) => (<Badge content={i + 1} withBorder key={i}>
                                <button className='skill-btn'>{im}</button>
                            </Badge>))
                        }
                    </div>
                </Animation>

                <Animation>
                    <p className="text-2xl font-bold capitalize after:content-['_😃'] my-4">Comfortable</p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                        {
                            comfortZone.map((im, i) => (<Badge content={i + 1} withBorder key={i}>
                                <button className='skill-btn'>{im}</button>
                            </Badge>))
                        }
                    </div>
                </Animation>

                <Animation>
                    <p className="text-2xl font-bold capitalize after:content-['_🧐'] my-4">Familiar</p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                        {
                            familiarZone.map((im, i) => (<Badge content={i + 1} withBorder key={i}>
                                <button className='skill-btn'>{im}</button>
                            </Badge>))
                        }
                    </div>
                </Animation>
            </div>

        </div>


    );
};



export default SkillSection;
