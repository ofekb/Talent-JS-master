

const loginUser=(userName,password)=>({
    type:"LOGIN",
    payload:{userName,password}
});


const logotUser=()=>({
    type:"LOGOUT"
});


export let userActions={
    loginUser,
    logotUser
};