import { useState } from 'react';
import styles from './Form.module.css'

export const Form = (props) => {
    const [ valueInput, setValueInput ] = useState('')


    function handleChange(event) {
        const cleanInput = event.target.value.trim()
        if (/[^a-zA-Z]/.test(cleanInput))
            return setValueInput(cleanInput)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (!valueInput) {
            console.error('Por favor chequea que la información sea correcta')
        }
        console.log('Enviando el form', valueInput)
        props.valueInput
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Ingresa tu nombre</label>
            <input type="text" className={styles.form} value={valueInput} onChange={handleChange} />
            <hr />

            <label>De cuál región de Colombia es tu café preferido? </label>
            <input type="text" className={styles.form} value={valueInput} onChange={handleChange} />
            <button type='submit'>Enviar</button>
        </form>
    );
}
export default Form;