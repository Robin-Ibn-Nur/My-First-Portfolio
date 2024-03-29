import { useRef } from "react";
import emailjs from '@emailjs/browser';
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
} from "@material-tailwind/react";
import Title from "../../../Component/Title/Title";
import Swal from "sweetalert2";
import Animation from "../../../Component/Animation/Animation";

const Contact = () => {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_hlplxls',
            'template_mvjnsbz',
            form.current,
            'UFRUC1TXFbRFkGy4l')
            .then((result) => {
                console.log(result.text);
                if (result.text) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Thank you for your valuable time, I will reply you very soon.',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            }, (error) => {
                console.log(error.text);
            });

        form.current.reset()
    };
    return (
        <div id="contactMe" className="flex justify-center p-10 items-center container mx-auto w-full">

            <div>
                <Animation>
                    <Title text="contact with me"></Title>
                </Animation>
                <Card className="text-center" color="transparent" shadow={false}>

                    <Animation>
                        <Typography color="white" className="mt-1 font-bold">
                            Enter your details here.
                        </Typography>
                    </Animation>

                    <Animation>
                        <form ref={form} onSubmit={sendEmail} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
                            <div className="mb-4 flex flex-col gap-6">
                                <Input className="" size="lg" name="user_name" label="Name" />
                                <Input className="" size="lg" name="user_email" label="Email" />
                                <Textarea className="" size="lg" name="message" label="Message" />
                            </div>
                            <Button type="submit" className="mt-6" fullWidth>
                                Register
                            </Button>
                        </form>
                    </Animation>
                </Card>
            </div>
        </div>
    );
};

export default Contact;