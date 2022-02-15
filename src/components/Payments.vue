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
        <Checkbox :index="index" :dataLength="deduction.length" />
        <div class="payments__wrapper">
          <p class="payments__price">
            {{ item.price }} рублей
            <span class="payments__price payments__price_year">
              в {{ formatYear(index) }} год</span
            >
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Checkbox from "@/components/Checkbox";
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
    formatYear(index) {
      ++index;
      if (index === 2 || index === 6 || index === 7 || index === 8) {
        return `${index}-ой`;
      } else if (index === 3) {
        return `${index}-ий`;
      } else {
        return `${index}-ый`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.payments {
  display: flex;
  flex-direction: column;

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
  }

  &__item {
    display: flex;
    gap: 11px;
    border: 1px solid transparent;
    border-bottom-color: #dfe3e6;
    width: 100%;
    padding: 16px 0;

    &:last-child input {
      display: none;
    }
  }

  &__wrapper {
    display: flex;
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
