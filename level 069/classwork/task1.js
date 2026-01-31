let dataBase =[]
function registrateAcount(){
    const namein =document.getElementById("input name");
    const emilein =document.getElementById("input email");
    const passwordin =document.getElementById("input password")
    const account ={
        name: namein.value,
        emale: emilein.value,
        password: passwordin.value
    };
    dataBase.push(account);
    namein.value ="";
    emilein.value="";
    passwordin.value="";
    console.log("user added acount", account);
    console.log("enter dataBase",dataBase)
} 