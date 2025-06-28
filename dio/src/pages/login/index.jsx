import { useState, useEffect, useMemo, useCallback } from 'react'

const Teste = () => {

    /* useState
    const [name, setName] = useState('Endryus');

    const handleChangeName = () => {
        setName(prev => prev === 'Endryus' ? 'José' : 'Endryus')
    }
    */

    /* useEffect
    useEffect(()=>{
        alert('renderizei');
        handleChangeName();
        
    },[])
    */

    /* useMemo
    const calculo = useMemo (() => {
        console.log('calculou')
        return 10 * 26589
    }, [])
    console.log('renderizou', calculo)
    */

    // useMemo = referencia em variaveis(const, var let)
    //useCallback = referencia de função.


    // useCallback
    const [name, setName] = useState('Endryus');
    const [age, setAge] = useState(26);

    const handleChangeName = useCallback(() => {
        console.log('alterou nome')
        setName(prev => prev === 'Endryus' ? 'José' : 'Endryus');
    }, [])

    const handleChangeAge = useCallback(() => {
        const newAge = 10 * age;
        console.log('age atual', age, newAge)
        setAge(prev => prev === 26 ? 32 : 26);
    }, [age])

    const calculo = useMemo (() => {
        console.log('calculou')
        return 10 * 26589
    }, []);


  return (
    <div>
        <p>
            Nome: {name}
        </p>
        <br />
        <p>
            Idade:{age}
        </p>
        <br />
        <button onClick={handleChangeName}>Alterar nome</button>
        <br />
        <button onClick={handleChangeAge}>Alterar idade</button>
    </div>
  )
};

export { Teste }
