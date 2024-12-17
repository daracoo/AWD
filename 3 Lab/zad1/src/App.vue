<template src="./templates/template.html"></template>
  
  <script>
  export default {
    data() {
      return {
        password: '',
        email: ''
      };
    },
    computed: {
      hasUppercase() {
        return /[A-Z]/.test(this.password);
      },
      hasLowercase() {
        return /[a-z]/.test(this.password);
      },
      hasNumber() {
        return /[0-9]/.test(this.password);
      },
      hasSpecial() {
        return /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
      },
      emailValidation() { 
        return /[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(this.email); 
        }
    },
    methods: {
      checkPassword() {},
      checkEmail(){}
    },
  };
  </script>