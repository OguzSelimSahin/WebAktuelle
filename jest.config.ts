module.exports = {
  testEnvironment: 'node',
  globalSetup: './testConfig/globalSetup.ts', // Pfad zur globalSetup Datei
  globalTeardown: './testConfig/globalTeardown.ts',
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: '.', outputName: 'jest-junit.xml' }]
  ],
};