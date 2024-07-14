<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="register" class="register-form">
      <div class="form-group">
        <label for="first_name">First Name:</label>
        <input type="text" v-model="first_name" required class="form-input" />
      </div>
      <div class="form-group">
        <label for="last_name">Last Name:</label>
        <input type="text" v-model="last_name" required class="form-input" />
      </div>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" v-model="username" required class="form-input" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" required class="form-input" />
      </div>
      <button type="submit" class="submit-button">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first_name: '',
      last_name: '',
      username: '',
      password: '',
    };
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch('register', {
          first_name: this.first_name,
          last_name: this.last_name,
          username: this.username,
          password: this.password,
        });
        this.$router.push('/login');
      } catch (error) {
        alert('Registration failed');
      }
    },
  },
};
</script>

<style scoped>
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #f5f5f5;
}

h1 {
  color: #42b983;
  margin-bottom: 1rem;
}

.register-form {
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem;
}

label {
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: bold;
}

.form-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.submit-button {
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #42b983;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #369e72;
}
</style>
