const checkboxlist = document.querySelectorAll(".custom-checkbox");
const inputfields = document.querySelectorAll(".input-field")
const errormsg = document.querySelector(".error-msg");
const progressbar = document.querySelector(".progressbar")

checkboxlist.forEach((checkbox)=>{
    checkbox.addEventListener('click' , (e)=>{
        const allfieldsfilled = [...inputfields].every((e) =>{
            return e.value;
        })
        if(allfieldsfilled){
            checkbox.parentElement.classList.toggle('completed');
        }else{
            progressbar.classList.add("errorcaught");
        }
    })
})

inputfields.forEach((e=>{
    e.addEventListener('focus' , (e)=>{
        progressbar.classList.remove("errorcaught");
    })
}))
