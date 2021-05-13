import React, { useState } from 'react'

export const useForm = (inicialstate={}) => {
   

    const [values, setvalues] = useState(inicialstate)

    const reset =() =>{
        setvalues(inicialstate)
    }

    const manejadorInputChange=({target})=>{
        setvalues({
            ...values,
            [target.name]: target.value
        })
    }

    return [
        values,
        manejadorInputChange,
        reset,
    ]
}
