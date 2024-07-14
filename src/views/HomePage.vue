<template>
    <div class="home">
      <h1>Welcome to the Home Page</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    background-color: #f5f5f5;
  }
  
  h1 {
    color: #42b983;
  }
  </style>
  