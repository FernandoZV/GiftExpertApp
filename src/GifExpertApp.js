import { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState([]);

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={ setCategorias }></AddCategory>
            <hr></hr>

            <div className="row">
                {
                    categorias.map( category => 
                    <GifGrid
                     category={ category }
                     key={ category }
                      /> 
                    )
                }
            </div>
        </>
    );
};

export default GifExpertApp;