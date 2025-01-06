<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
 
    <div>
      <nav>
        <RouterLink to="/">Login</RouterLink>
        <RouterLink to="/Register">Register</RouterLink>
      </nav>
    </div>
 

  <RouterView />
</template>

