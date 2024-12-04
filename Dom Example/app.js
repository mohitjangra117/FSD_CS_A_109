const btn=document.getElementById("addpara");

btn.addEventListener("click",()=>{
    const para=document.createElement("p");
    para.id="para1";
    para.style.color="Red";
    para.style.backgroundColor="Yellow";
    para.innerHTML=" <h3>This is para </h3> ";
    document.body.appendChild(para);
    
})





