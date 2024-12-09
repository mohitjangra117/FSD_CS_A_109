import{useRef} from 'react';
const Refex={}=>{
    let a=5;
    const refcounT=useRef(0);
    console.log("object Redered");
    function handleref(){
        refecount.current++;
        console.logz("refcount=",refcount.current)
        if(refcount.current==a){
            alert("counter: "+ refcount.current)
        }
    }
    return(
       <div>
       <h1>Refcount={refcount.current}</h1>
       <button onClick={handleref}> Increament</button>
       <p>{a}</p>
       </div>
    )
}
