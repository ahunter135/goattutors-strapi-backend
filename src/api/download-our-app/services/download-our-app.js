'use strict';

/**
 * download-our-app service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::download-our-app.download-our-app');
