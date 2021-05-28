module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts)?$': 'ts-jest',
    '^.+\\.(js)?$': 'babel-jest'
  }
}
