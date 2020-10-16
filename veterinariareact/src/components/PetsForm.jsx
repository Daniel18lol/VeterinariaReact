import React, {useState} from 'react';
import {usePets} from '../context/formContext'

const PetsForm = function(props){
    const {handleAddPet} = usePets;
    const sex = ['Macho','Hembra'];
    const types = ['Perro','Gato','Hámster','Ave'];
    const services = ['Valoración','Urgencias','Hospitalización'];
    const [petName,setPetName] = useState();
    const [petSex,setPetSex] = useState();
    const [petAge,setPetAge] = useState();
    const [petType,setPetType] = useState();
    const [petService,setPetService] = useState();
    const handleChange = e => {
        e.preventDefault();
        const {value,name} = e.target;
        console.log(usePets)
        console.log(handleAddPet)
        switch(name){
            case 'petName':
                setPetName(value);
            break;
            case 'petSex':
                setPetSex(value);
            break;
            case 'petAge':
                setPetAge(value);
            break;
            case 'petType':
                setPetType(value);
            break;
            case 'petService':
                setPetService(value);
            break;
            default:
            break;
        }

    }
    return(
        <>
        <form className='form-group w-75 mx-auto' onSubmit={handleAddPet}>
            <label className='text-primary mb-2 mt-3' htmlFor="petName">Nombre de la mascota:</label>
            <input className='form-control text-center' type="text" name="petName" onChange={handleChange}/>
            <label className='text-primary mb-2 mt-3' htmlFor="petSex">Sexo de la mascota</label>
            <select className='form-control text-center' name="petSex" id="petSex" onChange={handleChange}>
                {sex.map(sex => {
                    return <option key={sex} value={sex}>{sex}</option>
                })}
            </select>
            <label className='text-primary mb-2 mt-3' htmlFor="petAge">Edad de la mascota:</label>
            <input className='form-control text-center' type="text" name="petAge" onChange={handleChange}/>
            <label className='text-primary mb-2 mt-3' htmlFor="petType">Tipo de mascota:</label>
            <select className='form-control text-center' name="petType" id="petType" onChange={handleChange}>
                {types.map(type => {
                    return <option key={type} value={type}>{type}</option>
                })}
            </select>
            <label className='text-primary mb-2 mt-3' htmlFor="petService">Servicio actual de mascota:</label>
            <select className='form-control text-center' name="petService" id="petService" onChange={handleChange}>
                {services.map(service => {
                    return <option key={service} value={service}>{service}</option>
                })}
            </select>
            <button type='button' className='btn btn-primary w-25 mx-auto mt-3'>Guardar Mascota</button>
        </form>
        </>
    )
}

export {PetsForm}