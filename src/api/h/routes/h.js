module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/h',
      handler: 'h.index',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/hh',
      handler: 'h.index2',
      config: {
        auth: false,
      },
    },
  ]
}