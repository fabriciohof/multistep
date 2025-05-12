import { useState } from "react";

// O hook useForm é responsável por gerenciar o estado do formulário, incluindo o passo atual e o componente atual a ser exibido.
export function useForm(steps) {

    const [currentStep, setCurrentStep] = useState(0)  // Primeiro item do array

    function changeStep(i,e) {

        if(e) e.preventDefault() // Previne o comportamento padrão do botão de submit
        if(i < 0 || i >= steps.length) return // Verifica se o índice está dentro do intervalo válido

        setCurrentStep(i) 

    }

    return {
        currentStep,
        currentComponent: steps[currentStep], // Passa o componente atual
        changeStep, // Função para mudar o passo atual
        isLastStep: currentStep === steps.length - 1, // Verifica se é o último passo

    }
}