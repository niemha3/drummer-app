import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

const options = {
    buttons: {
      backgroundColor: 'rgba(30,30,36,0.8)',
      iconColor: 'rgba(255, 255, 255, 0.8)',
      iconPadding: '10px',
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: true,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false,
      size: '40px'
    }
};

const Card = ({name, band, born, image}) => {

    return (
        <div className='card tc dib br3 pa3 ma3 grow bw2 shadow-5'>
            <SRLWrapper options={options}>
            <a href={image}><img alt={name} height="300" width="300" src={image}/></a>
            </SRLWrapper>
            <div>
                
                <h2>{name}</h2>
                <p>{band}</p>
                <p>Born: {born}</p>
                
            </div>
           

        </div>


    );
}

export default Card;