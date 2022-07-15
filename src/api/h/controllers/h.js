// path: ./src/api/hello/controllers/hello.js

module.exports = {
  async index(ctx, next) { // called by GET /hello 
    ctx.body = 'Hello World!'; // we could also send a JSON
  },
  async index2(ctx, next) { // called by GET /hello 
    // Send an email to validate his subscriptions.
    strapi.service('api::i.i').exampleService();
    ctx.body='aaaaaaaaaaaaaaaa';
  },
};
