<template>
  <div class="tag" :class="{ 'm-active': state }" @click="click">
    {{ content }}
  </div>
</template>

<script>
export default {
  name: "Tag",
  components: {},
  props: {
    content: {
      type: String,
      required: true,
    },
    state: {
      type: Boolean,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  methods: {
    click() {
      this.$emit("send-index", this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
  box-sizing: border-box;
  padding: 6px 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  background-color: #eef0f2;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.2s ease-out, color 0.1s ease-out;

  &:hover {
    background-color: #dfe3e6;
  }

  &.m-active {
    background-color: #ff5e56;
    color: #fff;
  }
}
</style>
