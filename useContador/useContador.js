import React, { useState } from 'react'

export const useContador = (inicial=10) => {
  
    const [state, setstate] = useState(inicial);

    const reset =() =>{ 
        setstate(inicial)
    }

    const incremento =() =>{ 
        setstate(state+1)
    }

    const restar =() =>{ 
        setstate(state -1)
    }


    return {
        state,
        incremento,
        restar,
        reset
    }
    
}
