<template>
    <div class="container">
      <div class="card">
        <h2>SIGN UP</h2>
        <form>
          <div class="input-group">
            <label for="signup-username">Username</label>
            <input type="text" id="signup-username" placeholder="Enter your username" />
          </div>
          <div class="input-group">
            <label for="email">E-mail</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div class="input-group">
            <label for="signup-password">Password</label>
            <input type="password" id="signup-password" placeholder="Enter your password" />
          </div>
          <div class="input-group">
            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" />
          </div>
          <button type="button" class="btn">CREATE ACCOUNT</button>
       <!--   <a href="#" class="link">Already have an account? Login here</a>-->
           <!-- Usar <router-link> en lugar de <a> -->
        <RouterLink to="/login" class="link">Already have an account? Login here</RouterLink>
        </form>
      </div>
    </div>
  </template>
  



  <script>
  export default {
    name: "Register",
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
  