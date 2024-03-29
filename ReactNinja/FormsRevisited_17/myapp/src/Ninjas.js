import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {
        const ninjaList = ninjas.map(ninja => {
            return ninja.age < 100 ? (
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={()=>{deleteNinja(ninja.id)}}>delete</button>
                </div>
            ) : null;
        })
        
        return (
           <div className="ninja-list">
               {ninjaList}
           </div>
        )
}

export default Ninjas

