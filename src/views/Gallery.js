import React from 'react';


import { ImageViewer } from "react-image-viewer-dv"
import img from 'assets/img/header1.jpg';

function GalleryView () {

    return (
        <> 

        <div>
          <ImageViewer>
            <img src={img} width="200px" height="200px"  alt="Super Market" />
            <img src={img} width="200px" height="200px" alt="Super Market" />
          </ImageViewer>
        </div>
        
        </>
    )
}

export {
    GalleryView
}
