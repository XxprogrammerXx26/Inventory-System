<template>

    <div class="register-container">
        <h2>Register</h2>
        <form @submit.prevent="handleRegister">
            <div>
                <label for="username">Username</label>
                <input
                type="text"
                id="username"
                v-model="username"
                required
                placeholder="Enter your username"
                />
            </div>
            <div>
                <label for="email">Email</label>
                <input
                type="email"
                id="email"
                v-model="email"
                required
                placeholder="Enter your email"
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
            <div>
                <label for="confirPassword">Confirm Password</label>
                <input
                type="password"
                id="confirmPassword"
                v-model="confirmPassword" 
                required
                placeholder="Confirm your password"
                />
            </div>
            <button type="submit">Register</button>
        </form>
        <p v-if="errorMessages" class="error">{{ errorMessages }}</p>
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
       
    </div>

</template>


<script setup >
import { ref  } from 'vue';
import { auth, createUserWithEmailAndPassword } from '/src/firebase';

const username = ref('');     //state variables
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessages = ref('');
const successMessage = ref('');



function handleRegister() {   //Function to Register


    if (!username.value || !email.value || !password.value || !confirmPassword.value) {
        errorMessages.value = "All fields are required.";
        return;
    }

    if (password.value !== confirmPassword.value) {
        errorMessages.value = "Passwords do not match.";
        return;
    }

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Registro exitoso
            successMessage.value = "Registration successful!";
            errorMessages.value = "";
        })
        .catch((error) => {
            // Error al registrar
            errorMessages.value = error.message; // Mostrar el error de Firebase
        });
}



</script>