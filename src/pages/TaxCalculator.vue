<template>
  <div
    class="taxCalculator"
    @keydown.esc="closeCalc"
    @mousedown.self="closeCalc"
  >
    <transition name="hide">
      <div v-show="!isShow" class="modal-wrapper">
        <Modal
          :modalContent="this.MODAL_CONTENT"
          :buttonContent="this.BUTTON_CONTENT"
          :deduction="this.deduction"
          :inputContent="this.INPUT_CONTENT"
          :isCalculation="this.isCalculation"
          :value="salary"
          @onInput="saveSalary"
          @onCalc="calcDeduction"
          @onModal="closeCalc"
          @onSwitch="switchButtons"
        />
      </div>
    </transition>
    <transition name="hide">
      <div class="taxCalculator__hero" v-show="isShow">
        <div @click="hideHero">
          <Button :content="this.BUTTON_CONTENT.hero" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Modal from "@/components/modals/Modal";
import Button from "@/components/Button";
import { INPUT_CONTENT, BUTTON_CONTENT, MODAL_CONTENT } from "@/helpers/const";

export default {
  name: "TaxCalculator",
  components: {
    Button,
    Modal,
  },

  data() {
    return {
      MODAL_CONTENT,
      BUTTON_CONTENT,
      INPUT_CONTENT,
      isShow: true,
      isCalculation: false,
      deduction: [],
      salary: "",
    };
  },

  methods: {
    hideHero() {
      this.isShow = false;
    },

    closeCalc() {
      this.isShow = true;
      this.isCalculation = false;
      this.INPUT_CONTENT.isError = false;
      this.INPUT_CONTENT.errorText = "";
      this.salary = "";
    },

    resetDeduction() {
      this.deduction = [];
    },

    calcDeduction() {
      if (this.salary >= 12700) {
        this.resetDeduction();
        if (this.salary >= 260000) {
          this.deduction.push({ price: 260000 });
          this.showPayments();
        } else {
          let sumOfValue = 0;
          while (this.calcSalary) {
            sumOfValue += this.calcSalary;

            if (sumOfValue > 260000) {
              this.deduction.push({
                price: (this.calcSalary + 260000 - sumOfValue).toFixed(),
              });
              break;
            }
            this.deduction.push({ price: this.calcSalary.toFixed() });
            this.showPayments();
          }
        }
      } else if (this.salary === "" || this.salary === 0) {
        this.variantError("Поле обязательно для заполнения");
      } else if (isNaN(this.salary)) {
        this.variantError("Введите число");
      } else {
        this.variantError("Минимальная заработноя плата 12700");
      }
    },

    variantError(text) {
      this.INPUT_CONTENT.errorText = text;
      this.INPUT_CONTENT.isError = true;
    },

    saveSalary(value) {
      this.salary = value;
    },

    switchButtons(index) {
      this.BUTTON_CONTENT.radio.forEach(
        (item, i) => (item.active = i === index)
      );
    },

    showPayments() {
      this.INPUT_CONTENT.isError = false;
      this.isCalculation = true;
    },
  },

  computed: {
    calcSalary() {
      return this.salary * 12 * 0.13;
    },
  },
};
</script>

<style lang="scss" scoped>
.taxCalculator {
  position: relative;
  min-height: 100vh;
  background-color: #b3b3b3;
  display: flex;
  justify-content: center;
  align-items: center;

  &__hero {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    max-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
        255.35deg,
        #dc3131 0.83%,
        rgba(255, 79, 79, 0) 108.93%
      ),
      #ff5e56;
    box-shadow: 0px -0.11px 16.9495px rgba(183, 187, 225, 0.33);
  }

  &__button {
    font-family: LabGrotesque, Helvetica, Arial, sans-serif;
    font-weight: 500;
    color: #fff;
    padding: 12px 24px;
    display: flex;
    flex-direction: row;
    background-color: transparent;
    align-items: center;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    filter: drop-shadow(0px 0px 44px #cfdae7);
    border-radius: 6px;
    transition: background-color 0.2s ease-out, color 0.2s ease-out;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: #000000;
    }
  }
}
.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (min-width: 500px) {
    align-items: flex-start;
  }
}

.hide-enter-active {
  transition: all 0.3s ease;
}
.hide-leave-active {
  transition: all 0.8s ease;
}
.hide-enter,
.hide-leave-to {
  transform: translateY(-1000px);
}
</style>
