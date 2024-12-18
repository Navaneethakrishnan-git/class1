import { useState } from "react"

const intailborad=()=>Array(9).fill(null)
function useTictoc() {
    const [borad,setborad]=useState(intailborad())
    const [isNext,setisNext]=useState(true)

    const winner_patterns=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    const calculatewinner=(currentborad)=>{
        for(let i=0;i<winner_patterns.length; i++){
            const[a,b,c]=winner_patterns[i]
            if(currentborad[a]&& currentborad[a]===currentborad[b]&& currentborad[b]===currentborad[c]){
                return currentborad[a]
            }


        }
        return null

    }

    const handleclick=(index)=>{
        const winner=calculatewinner(borad)
        if(winner || borad[index]) return;

        const newborad=[...borad]
        newborad[index]=isNext? "x":"o"
        setborad(newborad)
        setisNext(!isNext)

    }

    const reset=()=>{
        setborad(intailborad())
        setisNext(true)
    }

    const getstsusmsg=()=>{
        const winner=calculatewinner(borad)
        if(winner) return `player ${winner} wins`
         if (!borad.includes(null)) return 'its a drwa'
         return `player ${isNext? "x":"o"} turn`

    }


    



    return {borad,handleclick,reset,getstsusmsg}
}

export default useTictoc
