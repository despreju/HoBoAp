export default {
  unicorns: (state) => state.unicorns,
  blueUnicorns: (state) => state.unicorns.filter((unicorn) => unicorn.colour === 'blue'),
};
