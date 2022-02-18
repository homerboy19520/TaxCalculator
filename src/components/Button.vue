<template>
  <button class="button" :class="[`m-${this.content.variant}`]" @click="click">
    {{ this.content.content }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  box-sizing: border-box;
  width: 100%;
  cursor: pointer;
  font-family: LabGrotesque, Helvetica, Arial, sans-serif;

  &.m-secondary {
    padding: 12px 24px;
    display: flex;
    flex-direction: row;
    background-color: transparent;
    align-items: center;
    border: 1px solid #ffffff;
    border-radius: 6px;
    filter: drop-shadow(0px 0px 44px #cfdae7);
    font-size: 12px;
    line-height: 16px;
    color: #fff;
    width: auto;
    margin: 0;
    transition: background-color 0.2s ease-out, color 0.2s ease-out;

    &:hover {
      background-color: #fff;
      color: #000000;
    }

    @media (min-width: 500px) {
      font-size: 16px;
      line-height: 24px;
      padding: 16px 32px;
    }
  }

  &.m-primary {
    border: 1px solid transparent;
    padding: 12px 0;
    background-color: #ff5e56;
    margin-top: auto;
    box-shadow: 0 0 24px rgba(234, 0, 41, 0.33);
    border-radius: 6px;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
    transition: background-color 0.2s ease-out;

    &_disabled {
      background-color: #bec5cc;
      cursor: not-allowed;
    }

    &:hover {
      background-color: #ea0029;
    }

    @media (min-width: 500px) {
      font-size: 16px;
      line-height: 24px;
      padding: 16px 0;
    }
  }
}
</style>
