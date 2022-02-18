<template>
  <div class="payments">
    <h1 class="payments__title">
      {{ title }}
    </h1>
    <ul class="payments__list">
      <li
        v-for="(item, index) in deduction"
        :key="index"
        class="payments__item"
      >
        <div>
          <Checkbox
            :price="item.price"
            :isChecked="isChecked(index, deduction)"
            :index="index"
            :dataLength="deduction.length"
            @click="click"
          >
            <p class="payments__price">
              {{ formatValue(item.price) }} рублей
              <span class="payments__price payments__price_year">
                в {{ formatEnd(index) }} год</span
              >
            </p>
          </Checkbox>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Checkbox from "@/components/Checkbox";

import { formatEnd, formatValue } from "@/helpers/utils";

export default {
  name: "Payments",

  components: { Checkbox },

  props: {
    deduction: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      title: "Итого можете внести в качестве досрочных:",
    };
  },

  methods: {
    formatEnd,
    formatValue,
    isChecked(index, deduction) {
      return index !== deduction.length - 1;
    },

    click() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.payments {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__title {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    width: 53%;

    @media (min-width: 500px) {
      width: 100%;
    }
  }

  &__list {
    list-style: none;
    max-height: 232px;
    overflow: hidden auto;
  }

  &__item {
    border: 1px solid transparent;
    border-bottom-color: #dfe3e6;
    width: 100%;

    &:last-child input {
      display: none;
    }
  }

  &__input {
    display: none;
    &:checked + .payments__label {
      border-color: transparent;
      background: linear-gradient(
          255.35deg,
          #dc3131 0.83%,
          rgba(255, 79, 79, 0) 108.93%
        ),
        #ff5e56;
    }

    &:checked + .payments__label svg {
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

  &__price {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #000000;

    &_year {
      color: #808080;
    }
  }
}
</style>
