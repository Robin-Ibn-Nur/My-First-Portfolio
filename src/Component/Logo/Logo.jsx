import { useTrail, animated } from '@react-spring/web';

const Logo = ({text}) => {
    const logoText = `${text}`; // logo text
    const letters = logoText.split('');

    // making logo floating animation
    const trail = useTrail(letters.length, {
        from: { opacity: 0, transform: 'scale(0.5)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { tension: 200, friction: 10 },
        delay: 200 // Adjust the delay between each letter animation
    });


    return (
        <div>
            {trail.map((animation, index) => (
                <animated.span
                    key={index}
                    style={animation}
                    className="uppercase font-serif"
                >
                    {letters[index]}
                </animated.span>
            ))}
        </div>
    );
};

export default Logo;