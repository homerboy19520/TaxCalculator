<template>
  <label class="input" :class="{ 'm-error': inputContent.isError }">
    <input
      class="input"
      placeholder="Введите данные"
      type="text"
      :value="value"
      @input="input($event.target.value)"
    />
    <span class="input__text">{{ inputContent.errorText }}</span>
  </label>
</template>

<script>
export default {
  name: "Input",
  components: {},
  props: {
    inputContent: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      value: "",
      numberValue: 0,
    };
  },
  methods: {
    formatValue(value) {
      if (value)
        return value
          .toString()
          .replace(/\s+/g, "")
          .replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
      return value;
    },
    input(value) {
      this.value = this.formatValue(value);
      console.log(this.toNumber);
    },
  },

  computed: {
    toNumber() {
      return +this.value.split(" ").join("");
    },
  },

  watch: {
    value: function () {
      this.$emit("send-event", this.toNumber);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  margin-bottom: 9px;
  &__text {
    display: none;
    position: absolute;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #ea0029;
    top: 80px;
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
  padding: 7px 10px;
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
