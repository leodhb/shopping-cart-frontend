import React from 'react';
import './styles.css';
import LoaderIcon from '../../assets/svg-jsx/loaderIcon';

const Preloader = () => {
    return (
       <div className="preloader-container">
           <div className="preloader-inner">
               {LoaderIcon}
           </div>
       </div>
    )
}

export default Preloader; 