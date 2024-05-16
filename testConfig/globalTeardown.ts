// cf. https://nodkz.github.io/mongodb-memory-server/docs/guides/integration-examples/test-runners

import { MongoMemoryServer } from "mongodb-memory-server";

/**
 * Stops the MongoMemoryServer. 
 * 
 * This file is configured in jest.config.js and automatically called after all tests.
 * 
 * It uses a global variable previously set in globalSetup.ts.
 * 
 * Please do not change this file.
 */
module.exports = async () => {
    if (global.__MONGOD__) {
      await global.__MONGOD__.stop();
    }
  };