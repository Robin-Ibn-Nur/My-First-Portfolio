import { useSpring, animated } from '@react-spring/web'
import { useEffect, useState } from 'react';

const TimeCounter = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const timeAnimation = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(-20px)' },
    });

    const formatTime = (value) => {
        return value.toString().padStart(2, '0');
    };

    const hours = formatTime(time.getHours());
    const minutes = formatTime(time.getMinutes());
    const seconds = formatTime(time.getSeconds());
    return (
        <div>
            <animated.div className="text-2xl text-white flex flex-row-reverse font-bold" style={timeAnimation}>
                {hours} : {minutes} : {seconds}
            </animated.div>
        </div>
    );
};

export default TimeCounter