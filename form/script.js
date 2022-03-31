// const clearInput = () =>{
//     let input = document.querySelectorAll(".textbox");
//     input.forEach(element =>{
//         element.value ="";
//     });
// }

// const send = () =>{
//     let name = document.querySelector("#name").value;
//     let email = document.querySelector("#email").value;
//     let mobile = document.querySelector("#phone_number").value;
//     let message = document.querySelector("#message").value;

//     if(name === "" || email ==="" || mobile === "" || message === ""){
//         window.alert("All input must be filled");
//     }
//     if(name !== "" && email !=="" && mobile !== "" && message !== ""){
//         if(isNaN(mobile)){
//             alert("phone number field must contain only numbers");
//         }else if(message.length > 100){
//             alert("message field cannot have more than 100 characters")
//         }
//         else{
//             alert("welcome user");
//         }
//     }
// }

// function increment(){
//     let counter1 = document.querySelector("#counter").innerHTML
//     let increment2 = Number(counter1) + 3;
//     window.alert(increment2);

//   }
