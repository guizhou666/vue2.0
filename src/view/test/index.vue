<template>
  <div class="custom-select">
    <div class="select-container" @click="toggleDropdown">
      <div class="selected-value">{{ selectedValue }}</div>
      <div class="dropdown-icon">
        <span v-if="isOpen">&#x25B2;</span>
        <span v-else>&#x25BC;</span>
      </div>
    </div>
    <ul v-show="isOpen" class="dropdown-list">
      <li v-for="option in options" :key="option.value" @click="handleOptionClick(option.value)">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      selectedValue: this.value,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    handleOptionClick(value) {
      this.selectedValue = value;
      this.isOpen = false;
      this.$emit('input', value);
    },
  },
};
</script>

<style scoped>
.custom-select {
  position: relative;
  display: inline-block;
}

.select-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 5px;
}

.selected-value {
  flex: 1;
}

.dropdown-icon {
  margin-left: 5px;
}

.dropdown-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  display: none;
}

.dropdown-list li {
  padding: 5px;
  cursor: pointer;
}

.dropdown-list li:hover {
  background-color: #f5f5f5;
}
</style>
