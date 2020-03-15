<template>
  <div class="playing-field">
    <div class="playing-field__row">
      <div
        v-for="(item, index) in lettersRandom"
        :key="item.id"
        :ref="index"
        class="letter letter_task"
        :class="{'letter_correct': (item === lettersTrue[index]) && tip}"
        @click="pickLetter(index, $event)"
      >
        {{ item }}
      </div>
    </div>

    <div
      v-if="answer"
      class="playing-field__row"
    >
      <div
        v-for="item in lettersTrue"
        :key="item.id"
        class="letter letter_answer"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import shuffle from '../assets/js/globalFunctions/suffle';

export default {
  name: 'PlayingField',
  props: {
    word: {
      type: String,
      required: true,
    },
    tip: {
      type: Boolean,
      required: true,
    },
    answer: {
      type: Boolean,
      required: true,
    },
    popup: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      lettersRandom: [],
      lettersTrue: [],
      pick: undefined,
    };
  },
  watch: {
    word(newValue) {
      this.splitIntoLetters(newValue);
    },
  },
  methods: {
    splitIntoLetters(splittingWord) {
      this.lettersRandom = [];
      this.lettersTrue = splittingWord.toUpperCase().split('');
      this.lettersRandom.push(...shuffle(this.lettersTrue));
    },
    pickLetter(index, event) {
      if (this.popup === 'hidden') {
        if (this.pick === undefined) {
          event.target.classList.add('letter_picked');
          this.pick = index;
        } else {
          if (!event.target.classList.contains('letter_picked')) {
            const tempArray = this.lettersRandom;
            const tempValue = tempArray[index];
            tempArray[index] = tempArray[this.pick];
            tempArray[this.pick] = tempValue;
            this.lettersRandom = [];
            this.lettersRandom.push(...tempArray);

            if (this.checkForWin(this.lettersRandom, this.lettersTrue)) {
              this.$bus.$emit('wordCompleted');
            }
          }
          this.$refs[this.pick][0].classList.remove('letter_picked');
          this.pick = undefined;
        }
      }
    },
    checkForWin(task, answer) {
      for (let i = 0; i < task.length; i += 1) {
        if (task[i] !== answer[i]) {
          return false;
        }
      }
      return true;
    },
  },
};
</script>

<style lang="scss">
  .playing-field {
    width: max-content;
    height: 78px;
    margin-top: 10px;

    & > * + * {
      margin-top: 10px;
    }
  }

  .playing-field__row {
    display: flex;

    & > * + * {
      margin-left: 5px;
    }
  }

  .letter {
    display: flex;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 2px solid #ccc;
    user-select: none;
    justify-content: center;

    &_picked {
      border-color: black;
    }

    &_correct {
      background-color: #d9ead3;
    }

    &_task {
      cursor: pointer;
    }
  }
</style>
