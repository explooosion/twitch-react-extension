
const Twitch = window.Twitch ? window.Twitch.ext : null;

export default (state = Twitch) => {
  return state;
}

