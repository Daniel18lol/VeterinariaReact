import React, { useState,useEffect,useMemo } from 'react';

const FormContext = React.createContext();

export function FormProvider (props) {
  const [pets,setPets] = useState([]);
  useEffect(() => {
    function loadPets(){
      const petsStorage = window.localStorage.getItem('pets');
      setPets(petsStorage);
    }
    loadPets();
  },[]);
  function handleAddPet(pet) {
    setPets(prevPets => {
      return {...prevPets,...pet}
    })
    window.localStorage.setItem('pets',pets)
  };

  const values = useMemo(() => {
    return({
      pets,
      handleAddPet
    });
  },[pets]);
  const { children } = props;
  return (
    <FormContext.Provider value={values} {...props}>
      { children }
    </FormContext.Provider>
  );
}

export function usePets(){
  const context = React.useContext(FormContext);
  if(!context){
    throw new Error('No hay contexto');
  }
  return context;
}