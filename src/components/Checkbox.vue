<template>
  <div class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      :id="this.id"
      :checked="isChecked"
    />
    <label class="checkbox__label" :for="this.id"
      ><svg
        width="14"
        height="11"
        viewBox="0 0 14 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.45455 8.70149L1.11364 5.25373L0 6.40299L4.45455 11L14 1.14925L12.8864 0L4.45455 8.70149Z"
          fill="white"
        />
      </svg>
    </label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    index: {
      type: Number,
      required: true,
    },
    dataLength: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      id: this.index,
    };
  },

  computed: {
    isChecked() {
      return this.index !== this.dataLength - 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  &__input {
    display: none;
    &:checked + .checkbox__label {
      border-color: transparent;
      background: linear-gradient(
          255.35deg,
          #dc3131 0.83%,
          rgba(255, 79, 79, 0) 108.93%
        ),
        #ff5e56;
    }

    &:checked + .checkbox__label svg {
      display: block;
    }
  }

  &__label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border: 1px solid #dfe3e6;
    border-radius: 6px;
    transition: border-color 0.2s ease-out;
    cursor: pointer;

    &:hover {
      border-color: #000000;
    }

    &_disabled {
      background-color: #bec5cc;
      cursor: not-allowed;
    }
  }
}
</style>
