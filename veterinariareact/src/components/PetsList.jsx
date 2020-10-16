import React,{useEffect} from 'react';
const usePets = require('../context/formContext');

const PetsList = function(props){
    const {pets} = usePets;
    return(
        <div className="card-deck">
            {pets
            ? (pets.map((pet,index) => {
                    return <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{pet.petName}</h5>
                            <p className="card-text">Sexo: {pet.petSex}</p>
                            <p className="card-text">Edad: {pet.petAge}</p>
                            <p className="card-text">Tipo: {pet.petType}</p>
                            <p className="card-text">Servicio: {pet.petService}</p>
                        </div>
                    </div>
                }))
                : (<div className='card-body text-center'>
                    <h3 className='text-danger'>No hay mascotas aún.</h3>
                   </div>)
            }
        </div>
    );
}
export {PetsList}