import Animation from '../../../Component/Animation/Animation';
import SkillImage from '../../../Component/SkillImage/SkillImage';
import Title from '../../../Component/Title/Title';



const SkillSection = () => {


    // Data for expertZone
    const expertZone = [
        {
            name: "HTML",
            image: "https://4.bp.blogspot.com/-ZfBmz06NtiE/UUbya-ilFwI/AAAAAAAABOg/HGn_PkKOTpk/s1600/HTML5-logo-features.png"
        },
        {
            name: "CSS",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.--ywp362auh1cf6YgDBz5gHaDt%26pid%3DApi&f=1&ipt=68f8d3092e495c7294c05eceacc9e4cbec2da40b66c8c6f1d45f71046b5bfbf5&ipo=images"
        },
        {
            name: "JavaScript",
            image: "https://homemadegarbage.com/wp/wp-content/uploads/2017/10/js-logo.png"
        },
        {
            name: "React.JS",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.LAnjAiZcelDVeztGpTduogHaHa%26pid%3DApi&f=1&ipt=d409360d686d021286683b5fb95e7e31f50e3f6ca90b645c393e05fa34887ab6&ipo=images"
        },
        {
            name: "Tailwind CSS",
            image: "https://s3.amazonaws.com/media-p.slid.es/uploads/275559/images/6637674/tailwind.JPG"
        },
        {
            name: "Bootstrap",
            image: "https://cdn.dribbble.com/users/595/screenshots/14417863/bootstrap-new-logo_4x.png"
        },
        {
            name: "daisyUI",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.saashub.com%2Fimages%2Fapp%2Fservice_logos%2F177%2F5calsa790aop%2Flarge.png%3F1677920086&f=1&nofb=1&ipt=25b609e1ec5be588f0bce2491704d91965b6373c7d5804ae43e9219e0d75cde8&ipo=images"
        },
    ]

    // Data for comfortZone
    const comfortZone = [
        {
            name: "Express.JS",
            image: "https://www.technoscore.com/img/expressjs.png"
        },
        {
            name: "Firebase",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IPRdCo-MXJfV_VXFQgGFzgHaHa%26pid%3DApi&f=1&ipt=2367c277f3df15d67ae9018cbf39d1ebd9f19376aeceae67f7bc2b5ec365bc5d&ipo=images"
        },
        {
            name: "AXIOS",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuser-images.githubusercontent.com%2F16843090%2F101181820-f3a63780-3612-11eb-9d3a-05452f2b0ad8.png&f=1&nofb=1&ipt=13d3af0ffde06f511effeb5d14dbadba5abb46964b51837970ec18120213ff26&ipo=images"
        },
        {
            name: "MongoDB",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fflorencefennel.co.in%2Fimage%2Fcache%2Fcatalog%2Fflorencefennel%2FMangoDB-1000x1000.jpg&f=1&nofb=1&ipt=324a82d07f220ef04b668eecb59cdd46ef206c12bc5faa557355eb177d72ef65&ipo=images"
        },
        {
            name: "JWT",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstackjava.com%2Fwp-content%2Fuploads%2F2018%2F03%2Fjwt.jpg&f=1&nofb=1&ipt=f742bd92f6076b9113becd009d6a31bc0db4c11978bd2d2226f482b3cd6d78ff&ipo=images"
        },
        {
            name: "Netlify",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.juev.org%2F2017%2F03%2Fnetlify.jpg&f=1&nofb=1&ipt=949fe5067ea17f2dcd99b6e241011f166cfc5983d9280d3ba524cf626eebc259&ipo=images"
        },
        {
            name: "React Router",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Freactgo.com%2Fimg%2Freactrouter.png&f=1&nofb=1&ipt=ab0dbbd7d43e7c667b266140643951345447a5b1ca5ad8c0551190ac2dd7e900&ipo=images"
        },
        {
            name: "Tanstack Query",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--7s_DLdtK--%2Fc_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000%2Fhttps%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8au58kc7e143c3bqrpz0.png&f=1&nofb=1&ipt=d07f734d2f2b47ac6eca65daf96701a605f1c6ee56e83e97d738f9f3aacb314c&ipo=images"
        }
    ]

    // Data for familiarZone
    const familiarZone = [
        {
            name: "Node.js",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcoralogix.com%2Fwp-content%2Fuploads%2F2018%2F04%2FCoralogix-Nodejs-integration.jpg&f=1&nofb=1&ipt=ddb3bb0ea51e660ad6e19810e5c814cbfd41f809ad57bb0d8d2eefddd3597bd8&ipo=images"
        },
        {
            name: "Nodemailer",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.logrocket.com%2Fwp-content%2Fuploads%2F2021%2F08%2Fsend-emails-nodejs-nodemailer-1.png&f=1&nofb=1&ipt=5232125559593415d5c4f3236ed64d13312f775feef91c741f92eb0534ac67c1&ipo=images"
        },
        {
            name: "Stripe",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffontmeme.com%2Fimages%2FStripe-Logo.jpg&f=1&nofb=1&ipt=373e4f617cd1ec08de325fa2e2ce1a9c049d7e0b769703609af339dca1ebed70&ipo=images"
        },
        {
            name: "Vercel",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogowik.com%2Fcontent%2Fuploads%2Fimages%2Fvercel1868.jpg&f=1&nofb=1&ipt=8f7861304b66ca2c4062b1afc7faf1a8a82059997ba6c4eee1f26b9f89bf6065&ipo=images"
        },
    ]
    return (
        <div id='skills' className="p-10">
            <Animation>
                <Title text="skills" />
            </Animation>
            <div className="grid justify-center container mx-auto gap-y-10 w-full">
                <Animation>
                    <p className="text-2xl font-bold capitalize after:content-['_💪'] my-4">Expert</p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                        {
                            expertZone.map((im, i) => <SkillImage
                                image={im.image}
                                text={im.name}
                                key={i}>
                            </SkillImage>)
                        }
                    </div>
                </Animation>

                <Animation>
                    <p className="text-2xl font-bold capitalize after:content-['_😃'] my-4">Comfortable</p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                        {
                            comfortZone.map((im, i) => <SkillImage
                                image={im.image}
                                text={im.name}
                                key={i}>
                            </SkillImage>)
                        }
                    </div>
                </Animation>

                <Animation>
                    <p className="text-2xl font-bold capitalize after:content-['_🧐'] my-4">Familiar</p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                        {
                            familiarZone.map((im, i) => <SkillImage
                                image={im.image}
                                text={im.name}
                                key={i}>
                            </SkillImage>)
                        }
                    </div>
                </Animation>
            </div>

        </div>


    );
};



export default SkillSection;
