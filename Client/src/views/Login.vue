<template>
    <div class="container">
      <div class="card">
        <h2>LOGIN</h2>
        <div class="avatar"></div>
        <form>
          <div class="input-group">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <button type="button" class="btn">LOGIN</button>
          <a href="#" class="link">Forgot Username / Password?</a>  
          
           <!-- Usar <router-link> en lugar de <a> -->
        <RouterLink to="/register" class="link">Don't have an account? Sign up here</RouterLink>
        </form>
      </div>
    </div>
  </template>
  










  <script>
  export default {
    name: "Login",
  };
  </script>









  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f4f8;
    height: 100vh;
    padding: 0 20px;
  }
  .card {
    background-color: #e7edf3;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
  }
  .avatar {
    width: 60px;
    height: 60px;
    background-color: #d9d9d9;
    border-radius: 50%;
    margin: 0 auto 20px auto;
  }
  h2 {
    color: #5a6c75;
    margin-bottom: 20px;
  }
  .input-group {
    margin-bottom: 15px;
    text-align: left;
  }
  label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
    color: #5a6c75;
  }
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #d1d9e0;
    border-radius: 5px;
    outline: none;
    box-sizing: border-box;
  }
  .checkbox-group {
    text-align: left;
    font-size: 14px;
    color: #5a6c75;
    margin-bottom: 15px;
  }
  .btn {
    background-color: #00bfff;
    color: #ffffff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
    font-size: 16px;
  }
  .btn:hover {
    background-color: #009ace;
  }
  .link {
    display: block;
    margin-top: 10px;
    font-size: 14px;
    color: #00bfff;
    text-decoration: none;
  }
  .link:hover {
    text-decoration: underline;
  }
  </style>
  