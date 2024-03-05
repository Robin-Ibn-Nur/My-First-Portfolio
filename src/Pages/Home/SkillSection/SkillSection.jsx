import Animation from '../../../Component/Animation/Animation';
import Title from '../../../Component/Title/Title';
import './index.css'
import { comfortZone, expertZone, familiarZone } from './data';


const SkillSection = () => {

    return (
        <div id='skills' className="p-10">
            <div className="container-fluid mt-5">
                <Animation>
                    <Title text="skills" />
                    <div className="flex flex-wrap items-center justify-center gap-14">
                        {expertZone.map((expert, index) => (
                            <div key={index} className="h-52 w-52 flex flex-col items-center justify-center">
                                <img className='h-44 w-48 rounded-r-full bg-white' src={expert?.image} alt={expert?.labal} />
                                <h3 className='text-center font-bold mx-auto mt-5'>{expert?.labal}</h3>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-14 mt-20">
                        {comfortZone.map((expert, index) => (
                            <div key={index} className="h-52 w-52 flex flex-col items-center justify-center">
                                <img className='h-44 w-48 rounded-r-full bg-white' src={expert?.image} alt={expert?.labal} />
                                <h3 className='text-center font-bold mx-auto mt-5'>{expert?.labal}</h3>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-14 mt-20">
                        {familiarZone.map((expert, index) => (
                            <div key={index} className="h-52 w-52 flex flex-col items-center justify-center">
                                <img className='h-44 w-48 rounded-r-full bg-white' src={expert?.image} alt={expert?.labal} />
                                <h3 className='text-center font-bold mx-auto mt-5'>{expert?.labal}</h3>
                            </div>
                        ))}
                    </div>
                </Animation>

            </div>

        </div>


    );
};



export default SkillSection;
