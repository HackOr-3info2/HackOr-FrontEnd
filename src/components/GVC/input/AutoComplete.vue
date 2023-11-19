<template>
  <div class="inputGroup">
    <input
      autocomplete="off"
      required=""
      type="text"
      id="autocompleteInput"
      @input="handleInput"
      v-model="inputValue"
    />
    <label for="autocompleteInput">Autocomplete</label>
    <ul v-if="showSuggestions" class="suggestions">
      <li
        v-for="(suggestion, index) in filteredSuggestions"
        :key="index"
        @click="selectSuggestion(suggestion)"
      >
        {{ suggestion }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      suggestions: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
      showSuggestions: false
    }
  },
  computed: {
    filteredSuggestions() {
      return this.suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(this.inputValue.toLowerCase())
      )
    }
  },
  methods: {
    handleInput() {
      this.showSuggestions = true
    },
    selectSuggestion(suggestion) {
      this.inputValue = suggestion
      this.showSuggestions = false
    }
  }
}
</script>

<style scoped>
.inputGroup {
  max-width: 100%;
  position: relative;
}

.inputGroup input {
  font-size: 100%;
  padding: 0.8em;
  outline: none;
  border: 2px solid rgb(200, 200, 200);
  background-color: transparent;
  border-radius: 160px;
  width: 100%;
}

.inputGroup label {
  position: absolute;
  left: 0;
  padding: 0.8em;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  color: rgb(100, 100, 100);
}
.suggestions li.active {
  background-color: #007bff; /* Change this to the desired background color for the active suggestion */
  color: #fff; /* Change this to the desired text color for the active suggestion */
}
.inputGroup :is(input:focus, input:valid) ~ label {
  transform: translateY(-50%) scale(0.9);
  margin: 0em;
  margin-left: 1.3em;
  padding: 0.4em;
  background-color: var(--bg-light);
}

.inputGroup :is(input:focus, input:valid) {
  border-color: var(--text-color-lg);
}

.suggestions {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.suggestions li {
  padding: 8px;
  cursor: pointer;
}

.suggestions li:hover {
  background-color: #f0f0f0;
}
</style>
