import React, { useRef } from 'react'
import Todolist from './Todolist'
import { useState } from 'react'

function Todis() {
    const inputref = useRef()
    const [list, setlist] = useState([])

    const add = () => {
        const inputtext = inputref.current.value.trim()
        if (inputtext === "") {
            return null
        }
        const todo = {
            id: Date.now(),
            text: inputtext,
            iscomplete: false

        }
        setlist((prev) => [...prev, todo])
        inputref.current.value = ""



    }
    const todotogle = (id) => {
        setlist((prev) => {
            return prev.map((todo) => {
                if (id == todo.id) {
                    return { ...todo, iscomplete: !todo.iscomplete }
                }
                return todo
            })
        })

    }
    const todelete = (id) => {
        setlist((prev) => {
           return prev.filter((todo) => todo.id !== id)
            
        })

    }



    const enterkey = (e) => {
     if (e.key === 'Enter') {
        add()}}


    return (<><div className='w-[30-rem]'>
        <h1 className='text-lg my-2 font-medium text-amber-500'>to do list</h1>
        <div className=' flex gap-2'>
            <div className='flex-1'>
                <input ref={inputref} className='py-3 px-4 w-full' type="text" name="" id="" />

            </div>
            <button onKeyDown={enterkey} onClick={add} className='py-3 px-4 bg-blue-600 text-white font-medium text-sm'>add task</button>
        </div>
        <p className='my-3 text-sm text-white'>task design</p>
    </div>
        <div className='w-[30-rem] bg-white shadow py-6 px-4'>
            <legend>list of task</legend>

            {list.map((tex) => {
                return <Todolist todelete={todelete} id={tex.id} text={tex.text} iscomplete={tex.iscomplete} todotog={todotogle} />
            })}
        </div>




    </>

    )
}

export default Todis
