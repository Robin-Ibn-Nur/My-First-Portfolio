import { useState } from "react";
import classNames from "classnames";
import { AiOutlineCloseCircle, AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const Skills = () => {
    const images = [
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://plus.unsplash.com/premium_photo-1678297269980-16f4be3a15a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1578&q=80",
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [galleryVisible, setGalleryVisible] = useState(false);

    const showGallery = (index) => {
        setCurrentIndex(index);
        setGalleryVisible(true);
    };

    const hideGallery = () => {
        setGalleryVisible(false);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <div className="flex h-screen bg-gray-200">
            <div className="container mx-auto  flex sm:flex-wrap justify-between items-center">
                {images.map((imageUrl, index) => (
                    <div
                        key={index}
                        className="image w-1/5 h-48 overflow-hidden m-2 cursor-pointer rounded-md"
                        onClick={() => showGallery(index)}
                    >
                        <img
                            src={imageUrl}
                            alt=""
                            className="w-full h-full object-cover object-center transition-transform duration-250 transform-gpu hover:scale-125"
                        />
                    </div>
                ))}
            </div>
            <div
                className={classNames(
                    "gallery fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-10 transition-opacity duration-250",
                    { "opacity-100 pointer-events-auto": galleryVisible },
                    { "opacity-0 pointer-events-none": !galleryVisible }
                )}
            >
                <span
                    className="control absolute text-white text-4xl top-1/2 transform -translate-y-1/2 left-4 cursor-pointer"
                    onClick={goToPrevious}
                >
                    <AiOutlineDoubleLeft></AiOutlineDoubleLeft>
                </span>
                <span
                    className="control absolute text-white text-4xl top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
                    onClick={goToNext}
                >
                    <AiOutlineDoubleRight></AiOutlineDoubleRight>
                </span>
                <div className="gallery-inner w-3/5 h-3/5 mx-auto">
                    <img
                        src={images[currentIndex]}
                        alt=""
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                <AiOutlineCloseCircle
                    className="fas fa-times absolute text-white text-3xl top-4 right-6 cursor-pointer"
                    onClick={hideGallery}></AiOutlineCloseCircle>
            </div>
        </div>
    );
};

export default Skills;