/*!

true ---AND--true =true
false---AND--true = false
true---AND----false = false
false---AND-----false = false


 */
 
 var username = "Julia"
 var contraseña = "123456"
 var username = "Maitena"
 var contraseña = "67890"
 var username = "Pablo"
 var contraseña = "908070"


const usernameReal = "Julia"
const contraseñaReal = "123456"
const usernameReal = "Maitena"
const contraseñaReal = "67890"
const usernameReal = "Pablo"
 // biome-ignore lint/suspicious/noRedeclare: <explanation>
 const contraseñaReal = "908070"


if(username==usernameReal && contraseña==contraseñaReal){
  console.log("El username y  password correcta")
}else{
    console.log("El username o contraseña esta incorrecto")
}