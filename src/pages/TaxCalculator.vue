<template>
  <div class="taxCalculator">
    <div class="modal-wrapper" @mousedown.self="close">
      <Modal
        @save-value="saveValue"
        @click="recoupment"
        @closeModal="close"
        @send-index="setButton"
        :modalContent="this.modalContent"
        :buttonContent="this.buttonContent"
        :deduction="this.deduction"
        :inputContent="this.inputContent"
        :isCalculation="this.isCalculation"
      />
      <transition name="hide">
        <div class="taxCalculator__hero" v-show="isShow">
          <div @click="open">
            <Button :content="this.buttonContent.hero" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/modals/Modal";
import Button from "@/components/Button";

import { INPUT__CONTENT } from "@/helpers/const";
import { BUTTON__CONTENT } from "@/helpers/const";
import { MODAL__CONTENT } from "@/helpers/const";

export default {
  name: "TaxCalculator",
  components: {
    Button,
    Modal,
  },

  data() {
    return {
      modalContent: MODAL__CONTENT,
      buttonContent: BUTTON__CONTENT,
      inputContent: INPUT__CONTENT,
      isShow: true,
      isCalculation: false,
      deduction: [],
      salary: "",
    };
  },

  methods: {
    open: function () {
      this.isShow = false;
    },

    close() {
      this.isShow = true;
      this.isCalculation = false;
    },

    resetDeduction() {
      this.deduction = [];
    },

    recoupment: function () {
      if (this.salary > 12700) {
        this.resetDeduction();
        if (this.salary > 270000) {
          this.deduction.push({ price: 270000 });
          this.closeModals();
        } else {
          let sumOfValue = 0;
          while (this.formatSalary) {
            sumOfValue += this.formatSalary;
            if (sumOfValue > 270000) {
              this.deduction.push({ price: sumOfValue - 270000 });
              break;
            }
            this.deduction.push({ price: this.formatSalary });
            this.closeModals();
          }
        }
      } else if (this.salary === "" || this.salary === 0) {
        this.inputContent.isError = true;
        this.inputContent.errorText = "Поле обязательно для заполнения";
      } else {
        this.inputContent.isError = true;
        this.inputContent.errorText = "Минимальная заработноя плата 12800";
      }
    },

    saveValue: function (value) {
      this.salary = value;
    },

    setButton(index) {
      this.buttonContent.radio.forEach((item, indexOfButton) => {
        item.active = indexOfButton === index;
      });
    },

    closeModals() {
      this.inputContent.isError = false;
      this.isCalculation = true;
    },
  },

  computed: {
    formatSalary() {
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
  &__hero {
    position: absolute;
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
