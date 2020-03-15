<template>
  <div
    v-if="popup === 'score'"
    class="popup popup_score"
  >
    <div class="popup__text">
      Превосходно! <br>
      {{ inARow > 1 ? inARow + ' подряд!' : 'Одно есть!' }} <br>
      Желаете продолжить?
    </div>

    <div class="popup__buttons">
      <button @click="oneMore">
        Да, давай еще одно слово
      </button>
      <button @click="showResult">
        Нет, покажи табицу с результатами
      </button>
    </div>
  </div>
  <div
    v-else-if="popup === 'result'"
    class="popup popup_result"
  >
    <div class="popup__result-item popup__result-item_header">
      <div class="result__item-value result__item-value_id">
        №
      </div>
      <div class="result__item-value result__item-value_word">
        Слово
      </div>
      <div class="result__item-value result__item-value_time">
        Время {{ `(${getTime(overallTimer)})` }}
      </div>
    </div>
    <div
      v-for="(item, index) in result"
      :key="item.id"
      class="popup__result-item"
    >
      <div class="result__item-value result__item-value_id">
        {{ index+1 }}.
      </div>
      <div class="result__item-value result__item-value_word">
        {{ item.word }}
      </div>
      <div class="result__item-value result__item-value_time">
        {{ item.time }}
      </div>
    </div>
    <div
      v-if="result.length === 0"
      class="popup__text"
    >
      Вы ничего не отгадали :(
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopUp',
  props: {
    popup: {
      type: String,
      required: true,
    },
    inARow: {
      type: Number,
      required: true,
    },
    result: {
      type: Array,
      required: true,
    },
    overallTimer: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {

  },
  beforeDestroy() {
    this.$bus.$off('wordCompleted');
  },
  methods: {
    oneMore() {
      this.$bus.$emit('oneMore');
    },
    showResult() {
      this.$bus.$emit('showResult');
    },
  },
};
</script>

<style lang="scss">
  .popup {
    display: flex;
    flex-flow: column;
    align-items: center;
    border: 1px solid;
    margin-top: 10px;
    padding: 10px;
    border-radius: 8px;

    &_score {
      & > * + * {
        margin-top: 5px;
      }
    }
    &_result {
      display: grid;
      grid-template-columns: 20px 1fr max-content;
      grid-column-gap: 10px;
      grid-row-gap: 5px;
    }
  }

  .popup__text {
    text-align: center;
    grid-column: 1/4;
  }
  .popup__result-item {
    display: contents;
    width: 100%;

    &_header {
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
  .result__item-value {

    &_id {
      text-align: center;
    }
    &_word {

    }
    &_time {
      text-align: center;
    }
  }
</style>
