module.exports = {
  testEnvironment: 'node',
  globalSetup: './testConfig/globalSetup.ts', // Pfad zur globalSetup Datei
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: '.', outputName: 'jest-junit.xml' }]
  ],
};