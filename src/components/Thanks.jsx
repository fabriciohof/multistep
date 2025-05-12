import React from 'react'
import './Thanks.css'
import { BsFillEmojiHeartEyesFill,BsFillEmojiSmileFill,BsFillEmojiNeutralFill,BsFillEmojiFrownFill} from 'react-icons/bs'


const emojiData ={
  'unsatisfied': <BsFillEmojiFrownFill/>,
  'neutral': <BsFillEmojiNeutralFill/>,
  'satisfied': <BsFillEmojiSmileFill/>,
  'very-satisfied': <BsFillEmojiHeartEyesFill/>

};

const Thanks = ({data}) => {
  return (
    <div className='thanks-container'>
      <h1>Falta pouco...</h1>
      <p>A sua opinião é muito importante.</p>
      <p>Para concluir sua avaliação, clique no botão de Enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação {data.name} </h3>

      <p className="review-data">
        <span>Satisfação com o produto: {emojiData[data.review]} </span>
      </p>

      <p className="review-data">
        <span>Comentário: {data.comment}</span>
      </p>
    </div>
  )
}

export default Thanks