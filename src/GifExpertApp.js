import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ()=>{
    const [categories, setCategories] = useState(['One Punch']);
    // const handleAdd=() =>{
    //     setCategories(cats => [...cats,"HunterxHunter"]);

    // };
    return (<> 
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr></hr>       
        <ol>
            {
                categories.map(cat => <GifGrid key={cat} category={cat}/>)
            }
        </ol>
    </>);
}

export default GifExpertApp;