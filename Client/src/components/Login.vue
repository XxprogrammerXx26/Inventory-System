<template>
    <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
            <div>
                <label for="username">username</label>
                <input
                type="text"
                id="username"
                v-model="username"
                required
                placeholder="Enter your username"

                />
            </div>
            <div>
                <label for="password">Password</label>
                <input
                type="password"
                id="password"
                v-model="password"
                required
                placeholder="Enter your password"

            />
            </div>
            <button type="submit">Login</button>
        </form>
        <p v-if="errorMessages" class="error">{{ errorMessages }}</p>

    </div>
</template>


<script setup>
import {ref} from 'vue';
import {auth, signInWithEmailAndPassword} from '/src/firebase';

const username = ref('');   //State variables
const password = ref('');
const errorMessages = ref('');



function handleLogin(){  //Function Login


signInWithEmailAndPassword(auth, username.value, password.value)
.then((userCrendential) => {
    alert("Login succesful!");
})
.catch((error)=> {
    errorMessages.value = "Invalid username or password.";

});
}

//     if (username.value === "admin" && password.value === "12345") {
//         alert("Login succesful!");
//     }else{
//         errorMessages.value = "Invalid username or password.";

//     }
// }            

</script>

