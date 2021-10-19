import React from 'react'

const GifGridItem = ({ id, title, url }) => {
    return (
        <div className="col-md-2">
            <div className="card animate__animated animate__fadeInUp">
                <img src={ url } className="card-img-top" alt={ title } />
                <div className="card-body">
                    <p className="card-text">{ title }</p>
                </div>
            </div>
        </div>
    )
}

export default GifGridItem;
