import './SkillImage.css'

const SkillImage = ({image, text}) => {
    const imageStyle = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };
    return (
        <div className="image-container--circle" style={imageStyle}>
            <div className="content">
                <div className="text">
                    <p>{text}</p>
                </div>
            </div>
        </div>

    );
};

export default SkillImage;