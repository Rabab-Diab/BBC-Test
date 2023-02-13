module.exports = {
  env: {
    invalidEmail: 'invalid@test.com',
    invalidPassword: '1234567890ggggg',
    validEmail: 'rabab.diab.07@gmail.com',
    validPassword: 'P@$$w0rd12345',
    accessToken : 'Bearer eb0908088f5f7e0168ce9263f399885dd783695d562f97f31821b24a2ae2af6b',
    userId : '383903',
    userEmail : 'patil_menaka_jd@muller.info',
    userGender : 'female',
    userName : 'Menaka Patil JD',
    userStatus : 'active'


  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://account.bbc.com',
  },
}
