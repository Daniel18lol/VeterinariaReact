import React, { Component} from 'react';

const FormContext = React.createContext();

class FormProvider extends Component {
  state = {
    pets: JSON.parse(window.localStorage.getItem('pets'))?JSON.parse(window.localStorage.getItem('pets')):[]
  }
   handleAddPet = newPet =>{
     this.setState(prevState => ({
      pets: prevState.pets.concat([newPet])
     }))
    window.localStorage.setItem('pets',JSON.stringify(this.state.pets))
  }
  render(){
    const {children} = this.props;
    return (
      <FormContext.Provider value={{
          ...this.state,
          addPet: this.handleAddPet
        }}>
          { children }
      </FormContext.Provider>
    );
  }
}
const FormConsumer = FormContext.Consumer;
export {FormContext,FormProvider,FormConsumer}