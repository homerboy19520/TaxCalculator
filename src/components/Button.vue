<template>
  <button
    class="button"
    :class="{ 'm-hero': this.content.modifier === 'hero' }"
  >
    {{ this.content.content }}
  </button>
</template>

<script>
export default {
  name: "Button",
  components: {},
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.button {
  box-sizing: border-box;
  border: 1px solid transparent;
  width: 100%;
  padding: 12px 0;
  margin-top: auto;
  background-color: #ff5e56;
  box-shadow: 0 0 24px rgba(234, 0, 41, 0.33);
  border-radius: 6px;
  font-family: LabGrotesque, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out,
    opacity 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background-color: #ea0029;
  }

  &_disabled {
    background-color: #bec5cc;
    cursor: not-allowed;
  }

  &.m-hero {
    padding: 12px 24px;
    display: flex;
    flex-direction: row;
    background-color: transparent;
    align-items: center;
    border: 1px solid #ffffff;
    filter: drop-shadow(0px 0px 44px #cfdae7);
    font-size: 12px;
    line-height: 16px;
    width: auto;
    margin: 0;

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

  @media (min-width: 500px) {
    font-size: 16px;
    line-height: 24px;
    padding: 16px 0;
  }
}
</style>
