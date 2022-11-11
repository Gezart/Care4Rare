module.exports = {
  async rewrites() {
      return [
        {
          source: 'http://13.38.32.150/',
          destination: 'https://care4-rare-owmf.vercel.app/',
        },
      ]
    },
};