export default function getTime(time) {
  return `${Math.floor(time / 60)}:${time % 60 >= 10 ? time % 60 : `0${time % 60}`}`;
}
