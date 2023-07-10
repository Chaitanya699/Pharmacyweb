import navbar from "../components/navbar.js"
import footer from "../components/footer.js"

let Over_V_nav=document.getElementById("Form_Navabr");
Over_V_nav.innerHTML=navbar()

let Over_V_Foot=document.getElementById("Form_Footer");
Over_V_Foot.innerHTML=footer()

let create_btn = document.getElementById("submit");

create_btn.addEventListener("click",()=>{
    addPost();
})

const addPost = async ()=>{
    try{
     event.preventDefault();
    let pincode = document.getElementById("pincode").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let address = document.getElementById("address").value;
    let number = document.getElementById("number").value;
    let locality = document.getElementById("locality").value;

    if(pincode == "" ||
       city == ""  ||
       state == ""  ||
       firstName == ""  ||
       lastName == ""  ||
       address == ""  ||
       number == ""  ||
       locality == ""
       ){
        alert("Please Fill All The Required Fields");
        return;
       }

    let address_Obj = {
        firstName : firstName,
        lastName : lastName,
        number : number,
        pincode : pincode,
        address :address,
        city : city,
        state : state,
        locality : locality    
    }

   let response = await fetch(" http://localhost:3000/address",{
    method:"POST",
    body: JSON.stringify(address_Obj),
    headers:{
        "Content-Type" : "application/json"
    }
   });

   let data = await response.json();
   location.href = "./address.html"
   console.log(data);

    }
    catch(err){
        console.log(err);
    }
}

// let add_btn =  document.getElementById("submit");

// add_btn.addEventListener("click",function(){
//     location.href = "./address.html";
// })



if(user){
    document.getElementById('login').textContent=user;
  }else{
    document.getElementById('login').textContent="Login";
  }