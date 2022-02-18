<template>
  <label class="input" :class="{ 'm-error': inputContent.isError }">
    <input
      class="input"
      placeholder="Введите данные"
      type="text"
      :value="valueLocal"
      @input="input($event.target.value)"
      v-on:keydown.enter="keydown"
    />
    <span class="input__text">{{ inputContent.errorText }}</span>
  </label>
</template>

<script>
import { formatValue } from "@/helpers/utils";
export default {
  name: "Input",
  props: {
    inputContent: {
      type: Object,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      valueLocal: "",
    };
  },
  methods: {
    input(value) {
      this.valueLocal = formatValue(value);
    },

    keydown() {
      this.$emit("keydown");
    },
  },

  computed: {
    formatSalary() {
      return this.valueLocal.split(" ").join("");
    },
  },

  mounted() {
    this.valueLocal = formatValue(this.value);
  },

  watch: {
    value() {
      this.valueLocal = formatValue(this.value);
    },
    valueLocal() {
      this.$emit("onInput", this.formatSalary);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  margin-bottom: 9px;
  position: relative;
  &::after {
    content: "₽";
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-17px, -17px);
    font-family: LabGrotesque, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
  }
  &__text {
    display: none;
    position: absolute;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #ea0029;
    top: 45px;
  }

  &.m-error {
    & input {
      border-color: #ea0029;

      &::placeholder {
        color: #ea0029;
      }
    }
    .input__text {
      display: block;
    }
  }
  & input[type="number"]::-webkit-outer-spin-button,
  & input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & input[type="number"] {
    -moz-appearance: textfield;
  }
}

.input input {
  position: relative;
  width: 100%;
  border: 1px solid #dfe3e6;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 7px 40px 7px 10px;
  transition: border-color 0.2s ease-out;
  font-family: LabGrotesque, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: #000000;
  outline: none;

  &:hover {
    border-color: #000000;

    &::placeholder {
      color: #bec5cc;
    }
  }

  &::placeholder {
    font-family: LabGrotesque, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #bec5cc;
    transition: color 0.2s ease-out;
  }

  &:focus {
    border-color: #dfe3e6;

    &::placeholder {
      font-size: 0;
    }
  }
}
</style>
