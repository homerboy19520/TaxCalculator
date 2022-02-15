<template>
  <div class="modal">
    <div class="modal__main">
      <div class="modal__wrapper">
        <h1 class="modal__title">{{ this.modalContent.title }}</h1>
        <p class="modal__description">
          {{ this.modalContent.subtitle }}
        </p>
      </div>
      <div class="modal__container">
        <h2 class="modal__text">{{ this.modalContent.questionSalary }}</h2>
        <Input @send-event="saveSalary" :inputContent="this.inputContent" />
        <ButtonText :content="this.buttonContent.calc" @click="recoupment" />
      </div>
    </div>
    <div class="modal__payments-wrapper" v-if="isCalculation">
      <Payments :deduction="this.deduction" />
    </div>
    <div class="modal__question-wrapper">
      <span class="modal__question">{{
        this.modalContent.questionReduce
      }}</span>
      <div class="modal__box">
        <Tag
          v-for="(item, index) in buttonContent.radio"
          :index="index"
          :key="index"
          :state="item.active"
          :content="item.content"
          @send-event="setButton"
        />
      </div>
    </div>
    <Button :content="this.buttonContent.common" />
    <div class="modal__close-button" @click="closeModal">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.6151 6.00057L11.6514 1.96311C11.7605 1.85778 11.8475 1.73179 11.9073 1.59248C11.9671 1.45318 11.9986 1.30335 12 1.15174C12.0013 1.00013 11.9724 0.849774 11.915 0.709449C11.8576 0.569124 11.7728 0.441638 11.6656 0.33443C11.5584 0.227222 11.4309 0.142438 11.2905 0.0850268C11.1502 0.0276153 10.9999 -0.00127433 10.8483 4.31116e-05C10.6967 0.00136056 10.5468 0.032859 10.4075 0.0927004C10.2682 0.152542 10.1422 0.239527 10.0369 0.348583L5.99943 4.3849L1.96311 0.348583C1.85778 0.239527 1.73179 0.152542 1.59248 0.0927004C1.45318 0.032859 1.30335 0.00136056 1.15174 4.31116e-05C1.00013 -0.00127433 0.849774 0.0276153 0.709449 0.0850268C0.569124 0.142438 0.441638 0.227222 0.33443 0.33443C0.227222 0.441638 0.142438 0.569124 0.0850268 0.709449C0.0276153 0.849774 -0.00127433 1.00013 4.31116e-05 1.15174C0.00136056 1.30335 0.032859 1.45318 0.0927004 1.59248C0.152542 1.73179 0.239527 1.85778 0.348583 1.96311L4.3849 5.99943L0.348583 10.0369C0.239527 10.1422 0.152542 10.2682 0.0927004 10.4075C0.032859 10.5468 0.00136056 10.6967 4.31116e-05 10.8483C-0.00127433 10.9999 0.0276153 11.1502 0.0850268 11.2905C0.142438 11.4309 0.227222 11.5584 0.33443 11.6656C0.441638 11.7728 0.569124 11.8576 0.709449 11.915C0.849774 11.9724 1.00013 12.0013 1.15174 12C1.30335 11.9986 1.45318 11.9671 1.59248 11.9073C1.73179 11.8475 1.85778 11.7605 1.96311 11.6514L5.99943 7.6151L10.0369 11.6514C10.1422 11.7605 10.2682 11.8475 10.4075 11.9073C10.5468 11.9671 10.6967 11.9986 10.8483 12C10.9999 12.0013 11.1502 11.9724 11.2905 11.915C11.4309 11.8576 11.5584 11.7728 11.6656 11.6656C11.7728 11.5584 11.8576 11.4309 11.915 11.2905C11.9724 11.1502 12.0013 10.9999 12 10.8483C11.9986 10.6967 11.9671 10.5468 11.9073 10.4075C11.8475 10.2682 11.7605 10.1422 11.6514 10.0369L7.6151 5.99943V6.00057Z"
          fill="#EA0029"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import Payments from "@/components/Payments";
import Input from "@/components/Input";
import ButtonText from "@/components/ButtonText";
import Tag from "@/components/Tag";
import Button from "@/components/Button";

export default {
  name: "Modal",
  components: {
    Button,
    Tag,
    ButtonText,
    Input,
    Payments,
  },
  props: {
    modalContent: {
      type: Object,
      required: true,
    },

    buttonContent: {
      type: Object,
      required: true,
    },

    deduction: {
      type: Array,
      required: true,
    },

    inputContent: {
      type: Object,
      required: true,
    },

    isCalculation: {
      type: Boolean,
      required: true,
    },
  },

  computed: {},
  methods: {
    saveSalary: function (value) {
      this.$emit("save-value", value);
    },

    recoupment: function () {
      this.$emit("click");
    },

    setButton(index) {
      this.$emit("send-index", index);
    },

    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #fff;
  padding: 32px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: LabGrotesque, Helvetica, Arial, sans-serif;

  @media (min-width: 500px) {
    min-height: 0;
    width: 453px;
    border-radius: 30px;
    height: fit-content;
    padding: 32px;
    margin: 120px 0;
  }

  @media (min-width: 1000px) {
    width: 552px;
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 500px) {
      gap: 17px;
    }
  }

  &__title {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #000000;

    @media (min-width: 500px) {
      font-size: 28px;
      line-height: 40px;
    }
  }

  &__description {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #808080;

    @media (min-width: 500px) {
      font-size: 14px;
      line-height: 24px;
      width: 91%;
    }
  }

  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  &__text {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 7px;
  }

  &__question-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: 500px) {
      flex-direction: row;
      gap: 77px;
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }

    @media (min-width: 1000px) {
      gap: 33px;
    }
  }

  &__box {
    display: flex;
    justify-content: space-between;
    width: fit-content;
    gap: 8px;

    @media (min-width: 500px) {
      gap: 16px;
    }
  }

  &__question {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
  }

  &__close-button {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    right: 0;
    width: 12px;
    height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 22px 22px 0 0;
    cursor: pointer;

    &:hover {
      & svg path {
        fill: #000000;
      }
    }

    & svg path {
      transition: fill 0.2s ease-out;
    }

    & svg {
      width: 100%;
      height: 100%;
    }

    @media (min-width: 500px) {
      width: 18px;
      height: 18px;
      margin: 27px 23px 0 0;
    }

    @media (min-width: 1000px) {
      margin: 27px 27px 0 0;
    }
  }
  &__payments-wrapper {
    display: flex;
  }
}
</style>
