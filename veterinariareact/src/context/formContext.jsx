import React, { Component} from 'react';

const FormContext = React.createContext();

class FormProvider extends Component {
  state = {
    pets: window.localStorage.getItem('pets') !== null ? window.localStorage.getItem('pets') : []
  }
  componentDidMount() {
    if(this.state.pets.length < 0) {
      this.setState({pets:[]})
    }
  }

   handleAddPet = newPet =>{
     this.setState(prevState =>({
      pets: [...prevState.pets,newPet]
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