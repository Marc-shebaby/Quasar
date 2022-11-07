
window.onload=() => {
    const s=document.getElementById("sign")
    const first_div=document.getElementById("white")
    const sec_div=document.getElementById("pic2")
    const switch_img=(e) =>{
        first_div.classList.remove("white")
        first_div.innerHTML=""
        sec_div.classList.remove("pic2")
        sec_div.classList.add("white")
        sec_div.innerHTML="""<h1>Match up with the energy with tons of people! </h1> <h2> Sign up now</h2>  <input autofocus placeholder='Username' id="name"><br>""
        <input type="password" id="pass" class="form__input" autofocus placeholder="Password">
        <br>
        <button class="form__button" type="submit">Continue</button>" 
        first_div.classList.add("pic2")
    }
    s.addEventListener("click",switch_img)
}