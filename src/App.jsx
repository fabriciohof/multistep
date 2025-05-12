//componentes
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
import './App.css'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import Steps from './components/Steps'

//Hooks
import { useForm } from './Hooks/useForm'
import { useState } from 'react'

const formTemplate = {
  name: '',
  email: '',
  review: '',
  comment: '',
  
};

function App() {

  const [ data,setData] = useState(formTemplate)

  const updateFieldHandler = (key,value)=> { 
    setData((prev) => {
      return {
        ...prev,[key]: value // atualiza o valor do campo
      }

  })
}

  const formComponents = [
     <UserForm data={data} updateFieldHandler={updateFieldHandler}/>, //somente esses dois tem input
     <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
     <Thanks data={data}/>
  ]

  const {currentStep, currentComponent,changeStep,isLastStep} = useForm(formComponents)
  

  return (
    <div className="App">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, deixe sua avaliação no formulário abaixo</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        

        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="input-container">{currentComponent}</div>
          <div className="actions">

            <button type="button" onClick={()=> changeStep(currentStep - 1)}>
              <GrFormPrevious />
            <span>Voltar</span>
            </button>

          {!isLastStep ? (
            <button type="submit">
              <span>Avançar</span>
              <GrFormNext />
            </button>
          ) : (
            <button type="submit">
              <span>Enviar</span>
              <FiSend />
            </button>
          )}
            

          </div>
        </form>

      </div>

    </div>
    
  )
}

export default App
