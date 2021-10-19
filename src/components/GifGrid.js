// import { useState, useEffect } from 'react'
// import getGifts from '../helpers/getGifts';
import GifGridItem from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';


const GifGrid = ({ category }) => {

    const { data, loading} = useFetchGifs( category );

    return (
        <div className="col-md-12 card animate__animated animate__fadeInUp">
            {
            loading && <p className="animate__animated animate__flash">Cargando...</p>
            }
            <div className="card-header">
                { category }
            </div>
            <div className="card-body">
                <div className="row">
                {
                    data.map( img => 
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    )
                }
                </div>
            </div>
        </div>
    )
};

export default GifGrid;
