import React, {useState} from 'react'



function Collapse(props) {

    const [isOpen, setIsOpen] = useState(false); //

    const conteneur = () => {
        setIsOpen(!isOpen);
      };

  return (
    <div onClick={conteneur} className='collapse-conteneur'>
      <div className='collapse-titre'>
        <h2>{props.title}</h2>
        <p><i class="fa-solid fa-chevron-up"></i> </p>
      </div>
        <div >
           {isOpen && <p className='collapse_p'>{props.content}</p> } 
        </div>
    </div>
  )
}

export default Collapse
