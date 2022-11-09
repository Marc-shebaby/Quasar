
window.onload=() => {
    const s=document.getElementById("sign")
    const first_div=document.getElementById("white")
    const img_sec=document.getElementById("tohid")
    const f_img=document.getElementById("img1")
    const rev=document.getElementById("torev")
    const login=document.getElementById("sign_2")
   
    const switch_img=(e) =>{
        first_div.style.display='none'
        f_img.style.display='block'
        
        img_sec.style.display='none'
        rev.style.display='block'
       
        
        
    
    }
    const switch_login=(e)=>{
        first_div.style.display='block'
        f_img.style.display='none'
       
        img_sec.style.display='block'
        rev.style.display='none'
        
    }
    s.addEventListener("click",switch_img)
    login.addEventListener("click",switch_login)

}
