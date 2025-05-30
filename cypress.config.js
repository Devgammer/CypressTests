const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space',
   
  } 

});
// "https://guest:welcome2qauto@qauto.forstudy.space" 
// логин и пароль прописать в самом урле, 
// сам зайдет везде.Чтобы не прописывать пароль и логи