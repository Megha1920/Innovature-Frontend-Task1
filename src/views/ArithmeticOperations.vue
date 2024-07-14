<template>
  <div class="arithmetic-operations">
    <h1>Arithmetic Operations</h1>

    <!-- Operation Buttons Section -->
    <div class="operation-buttons">
      <button @click="setOperation('add')" class="operation-button">Addition</button>
      <button @click="setOperation('subtract')" class="operation-button">Subtraction</button>
      <button @click="setOperation('multiply')" class="operation-button">Multiplication</button>
      <button @click="setOperation('divide')" class="operation-button">Division</button>
    </div>

    <!-- Operation Inputs Section -->
    <div class="operation-inputs">
      <input type="number" v-model.number="num1" placeholder="Enter number 1" class="operation-input" />
      <input type="number" v-model.number="num2" placeholder="Enter number 2" class="operation-input" />
      <button @click="calculate" class="calculate-button">Calculate</button>
    </div>

    <!-- Result Display Section -->
    <div v-if="result !== null" class="result-container">
      <p class="result-text">Result: {{ result }}</p>
    </div>

    <!-- Error Display Section -->
    <div v-if="error" class="error-container">
      <p class="error-text">Error: {{ error }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ArithmeticOperations',

  data() {
    return {
      num1: null,
      num2: null,
    };
  },

  methods: {
    ...mapActions(['performOperation']),
    setOperation(operation) {
      this.$store.commit('setOperation', operation); // Commit operation mutation
    },
    async calculate() {
      const { num1, num2 } = this;
      await this.performOperation({ num1, num2, operation: this.$store.state.operation }); // Pass 'operation'
    },
  },

  computed: {
    ...mapGetters(['result', 'error']),
  },
};
</script>

<style scoped>
.arithmetic-operations {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px; /* Limiting width for better readability */
  margin: 0 auto; /* Center align horizontally */
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.operation-buttons {
  margin-bottom: 20px;
}

.operation-buttons .operation-button {
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.operation-buttons .operation-button:hover {
  background-color: #3a956f;
}

.operation-inputs {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.operation-input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 120px;
}

.operation-inputs button.calculate-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.operation-inputs button.calculate-button:hover {
  background-color: #0056b3;
}

.result-container {
  margin-top: 20px;
  padding: 10px;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 5px;
}

.result-text {
  font-size: 18px;
  color: #155724;
}

.error-container {
  margin-top: 20px;
  padding: 10px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
}

.error-text {
  font-size: 18px;
  color: #721c24;
}
</style>
