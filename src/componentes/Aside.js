import React from 'react';
import "./Aside.scss";


const Aside = () => {
    return (
        <div className="Aside">
            <aside>
                
                    <h1> Get Notified of and updates </h1>
                    <p> Lorem ipsum dolor sit amet,consectetue adipiscing elit. Suspendisse </p>
                    <p> fringilla fringilla nisi congue congue. Maecenas nef condimentum libero,at </p>
                    <p> elementum mauris. Phasellus eget nisi dapibus,ultiricies nisi at,hendrerit </p>
                    <p> risusuis ormare luctus id sollicitudin ante lobortis at. </p>

                <div className="div_input">
                    <input placeholder="Digite seu email" type="email" name="" id="" ></input>
                    <button> Notify </button>
                </div>
                
        
        </aside>
                    <div className="video">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/oWwBw4gHQcI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
        </div>
    );
}

export default Aside;