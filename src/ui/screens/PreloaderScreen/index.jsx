import React from 'react';
import './styles.css';
import LoaderIcon from '../../../assets/svg-jsx/loaderIcon';

const PreloaderScreen = () => {
    return (
       <div className="preloader-container">
           <div className="preloader-inner">
               <LoaderIcon></LoaderIcon>
           </div>
       </div>
    )
}

export default PreloaderScreen; 