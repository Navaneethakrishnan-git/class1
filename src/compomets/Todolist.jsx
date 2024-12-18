const Todolist=({text,iscomplete,todotog,id,todelete})=>{

    return(
    <fieldset>
    
        
        <div className='flex justify-between items-center'>
        <label onClick={()=>todotog(id)}className={`hover:bg-slate-100 flex-1 p-2 cursor-pointer select-none ${iscomplete? "line-through" : "" }`}>{text}</label>
            <div><svg onClick={()=>todelete(id)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
        </div>
    
    </fieldset>

)
}
export default Todolist