import React, { useState } from 'react'
import './Tictac.css'
import useTictoc from './Hooks/useTictoc'


function Tictactoe() {
    const {borad,calculatewinner,handleclick,reset,getstsusmsg}=useTictoc()
    

    return(<div className='game'>
        <div className='status'>
            {getstsusmsg()}
            <button className='reset' onClick={reset}>reset game</button>
        </div>
        <div className='borad'>
            {
             borad.map((b,index)=>{
                return <button className='cell' 
                key={index} onClick={()=>handleclick(index)}
                disabled={b!==null}>{b}</button>
             })   
            }
        </div>

    </div>

    )
        
    
}

export default Tictactoe
