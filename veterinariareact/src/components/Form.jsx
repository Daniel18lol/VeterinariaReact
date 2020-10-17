import React from 'react';
import { FormProvider } from '../context/formContext';
import PetsForm from './PetsForm';
import PetsList from './PetsList';

export default function Form(props) {
    return (
        <FormProvider>
          <PetsForm />
          <PetsList />
        </FormProvider>
    );
}