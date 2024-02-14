import './PreLoader.css';
const PreLoader = () => {
    return (
        // <div className="letter-loader">
        //     <h1 className="letter">
        //         RoBiN
        //         <div className="clip">
        //             <h1 className="letter fill">
        //                 RoBiN
        //             </h1>
        //         </div>
        //     </h1>
        // </div>
        <div className="flex items-center justify-center h-screen">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
        </div>

    );
};

export default PreLoader;