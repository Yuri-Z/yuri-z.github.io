<template>
  <div
    id="app"
    class="app"
  >
    <div class="interface-panel">
      <button @click="newGame">
        Новая игра
      </button>
      <button @click="enableTip">
        {{ tip ? 'Отключить' : 'Включить' }} подсказку
      </button>
      <button @click="enableAnswer">
        {{ answer ? 'Скрыть' : 'Показать' }} ответ
      </button>
      <button @click="giveUp">
        Сдаюсь!
      </button>
    </div>
    <playing-field
      :answer="answer"
      :popup="popup"
      :tip="tip"
      :word="word"
    />
    <popup
      :in-a-row="inARow"
      :overall-timer="overallTimer"
      :popup="popup"
      :result="result"
    />
  </div>
</template>

<script>
import PlayingField from './PlayingField.vue';
import Popup from './Popup.vue';

export default {
  components: {
    PlayingField,
    Popup,
  },
  data() {
    return {
      word: '',
      tip: false,
      answer: false,
      popup: 'hidden',
      inARow: 0,
      result: [],
      timerID: undefined,
      timer: 0,
      overallTimer: 0,
    };
  },
  mounted() {
    this.$bus.$on('wordCompleted', () => {
      this.popup = 'score';
      this.inARow += 1;
      this.overallTimer += this.timer;
      this.result.push({ word: this.word, time: this.getTime(this.timer) });
      this.resetTimer();
    });
    this.$bus.$on('oneMore', () => {
      this.getRandomWord();
      this.popup = 'hidden';
      this.startTimer();
    });
    this.$bus.$on('showResult', () => {
      this.popup = 'result';
    });
  },
  beforeDestroy() {
    this.$bus.$off('wordCompleted');
    this.$bus.$off('oneMore');
    this.$bus.$off('showResult');
  },
  methods: {
    async getRandomWord() {
      try {
        for (let ttl = 100; ttl > 0; ttl -= 1) {
          const { data } = await this.axios.get(`https://apidir.pfdo.ru/v1/directory-program-activities/${this.getRandomInt(2, 1386)}`);
          if (data.result_code === 'FLSCS') {
            this.word = data.data.name;
            break;
          }
        }
        return '';
      } catch (e) {
        throw new Error(e);
      }
    },
    newGame() {
      this.result = [];
      this.inARow = 0;
      this.popup = 'hidden';
      this.getRandomWord();
      this.overallTimer = 0;
      this.resetTimer();
      this.startTimer();
    },
    enableTip() {
      this.tip = !this.tip;
    },
    enableAnswer() {
      this.answer = !this.answer;
    },
    giveUp() {
      this.popup = 'result';
      this.resetTimer();
    },
    startTimer() {
      this.timer = 0;
      if (this.timerID === undefined) {
        this.timerID = setInterval(this.tick, 1000);
      }
    },
    resetTimer() {
      clearInterval(this.timerID);
      this.timerID = undefined;
    },
    tick() {
      this.timer += 1;
    },
  },
};
</script>

<style lang="scss">
  body {
    margin: 0;
  }
  .app {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px 10px;
    flex-flow: column;
  }
  .interface-panel {
    width: max-content;
  }
</style>
