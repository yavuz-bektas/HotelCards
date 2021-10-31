import { required, between } from "@vuelidate/validators";
const testMixins = {
  validations() {
    return {
      namelastname: { required },
      age: {
        between: between(6, 99),
      },
      tc: { required },
      gsm: { required },
    };
  },
};
export default testMixins;
