import { useState, useEffect } from 'react'

const Teste = () => {

    //useState
    const [name, setName] = useState('Endryus');

    const handleChangeName = () => {
        setName(prev => prev === 'Endryus' ? 'José' : 'Endryus')
    }

    //useEffect
    useEffect(()=>{
        alert('renderizei')
    },[name])

  return (
    <div>
        <p>
            {name}
        </p>
        <button onClick={handleChangeName}>Alterar</button>
    </div>
  )
}

export { Teste }
