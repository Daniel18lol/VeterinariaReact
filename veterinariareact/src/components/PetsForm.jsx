import React, {useState,useContext,useRef} from 'react';
import {FormContext} from '../context/formContext'
import '../css/PetsForm.css'

export default function PetsForm(){
    //Variables de estado del formulario para los campos
    const [petName,setPetName] = useState('');
    const [petAge,setPetAge] = useState('');
    //Variables referencia para los select
    const inputSex = useRef()
    const inputType = useRef()
    const inputService = useRef()
    //Constantes de nombres para llenar selects
    const sex = ['Macho','Hembra'];
    const types = ['Perro','Gato','Hámster','Ave'];
    const services = ['Valoración','Urgencias','Hospitalización'];
    //Contexto del formulario para obtener la función de añadir mascota
    const {addPet} = useContext(FormContext);
    
    function cleanForm(){
        setPetName('');
        setPetAge('');
    }

    const handleAddPet = e => {
        e.preventDefault();
        const newPet = {
            petName,
            petSex:inputSex.current.value
            ,petAge
            ,petType:inputType.current.value
            ,petService:inputService.current.value
        };
        addPet(newPet);
        cleanForm();
    }
    
    const handleChange = function(e){
        const {value,name} = e.target;
        switch(name){
          case 'petName':
              setPetName(value);
          break;
          case 'petAge':
              setPetAge(value);
          break;
          default:
          break;
        }
      }
    return(
        <>
        <form className='form-group mb-5 w-75 mx-auto' onSubmit={handleAddPet}>
            <label className='text-primary mb-2 mt-3' htmlFor="petName">Nombre de la mascota:</label>
            <input className='form-control text-center' value={petName} type="text" name="petName" onInput={handleChange}/>
            <label className='text-primary mb-2 mt-3' htmlFor="petSex">Sexo de la mascota</label>
            <select className='form-control text-center' name="petSex" id="petSex" ref={inputSex}>
                {sex.map(sex => {
                    return <option key={sex} value={sex}>{sex}</option>
                })}
            </select>
            <label className='text-primary mb-2 mt-3' htmlFor="petAge">Edad de la mascota:</label>
            <input className='form-control text-center' value = {petAge} type="text" name="petAge" onInput={handleChange}/>
            <label className='text-primary mb-2 mt-3' htmlFor="petType">Tipo de mascota:</label>
            <select className='form-control text-center' name="petType" id="petType" ref={inputType}>
                {types.map(type => {
                    return <option key={type} value={type}>{type}</option>
                })}
            </select>
            <label className='text-primary mb-2 mt-3' htmlFor="petService">Servicio actual de mascota:</label>
            <select className='form-control text-center' name="petService" id="petService" ref={inputService}>
                {services.map(service => {
                    return <option key={service} value={service}>{service}</option>
                })}
            </select>
            <button type='submit' className='btn btn-lg btn-primary mx-auto mt-3'>Guardar Mascota</button>
        </form>
        </>
    )
}