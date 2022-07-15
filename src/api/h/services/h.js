// path: ./src/api/email/services/email.js

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::h.h', ({ strapi }) => ({
  async exampleService() {
    let response = { okay: true,kind:1 }

    return response
  },
}));