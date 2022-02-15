<template>
  <button class="ButtonText" @click="click">{{ content }}</button>
</template>

<script>
export default {
  name: "ButtonText",
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {},

  methods: {
    click: function () {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.ButtonText {
  padding: 0;
  font-family: LabGrotesque, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #ea0029;
  background-color: transparent;
  border: none;
  width: fit-content;
  transition: color 0.2s ease-out, opacity 0.2s ease-out;
  cursor: pointer;

  &:hover {
    color: #f53a31;
  }

  &:active {
    color: #ea0029;
  }

  &.m-disabled {
    color: #bec5cc;
  }
}
</style>
