<template>
  <div class="overflow-auto h-screen bg-gray-100 pb-24 px-4 md:px-6">
    <Navbar />

    <br />
    <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="
          shadow-lg
          rounded-2xl
          bg-green-100
          w-64
          p-4
          bg-white
          relative
          overflow-hidden
        "
      >
        <div class="w-4/6">
          <p class="text-gray-800 text-lg font-medium mb-2">
            Kişi sayısı kadar formu doldurmalısınız:
          </p>
          <p class="text-gray-400">
            {{ this.$route.params.id }}
          </p>
        </div>
      </div>

      <br />
    </div>

    <section class="h-screen bg-gray-100 bg-opacity-50">
      <form class="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div
          class="
            p-4
            bg-gray-100
            border-t-2 border-indigo-400
            rounded-lg
            bg-opacity-5
          "
        >
          <div class="max-w-sm mx-auto md:w-full md:mx-0">
            <div class="inline-flex items-center space-x-4">
              <h1 class="text-gray-600">
                Ödeme adımına geçmeden önce lütfen doldurunuz:
              </h1>
                <span v-if="personlist.length >= 1" class="px-4 py-2  text-base rounded-full text-red-600 border border-red-600 bg-red-200 ">
                    Diğer Konuk Bilgilerinide Giriniz!
                </span>
            </div>
          </div>
        </div>
        <div class="space-y-6 bg-white">
          <div
            class="
              items-center
              w-full
              p-4
              space-y-4
              text-gray-500
              md:inline-flex md:space-y-0
            "
          >
            <h2 class="max-w-sm mx-auto md:w-1/3">Ad Soyad</h2>
            <div class="max-w-sm mx-auto md:w-2/3">
              <div class="relative">
                <input
                  @input="v$.namelastname.$touch()"
                  v-model="namelastname"
                  type="text"
                  id="user-info-email"
                  class="
                    rounded-lg
                    border-transparent
                    flex-1
                    appearance-none
                    border border-gray-300
                    w-full
                    py-2
                    px-4
                    bg-white
                    text-gray-700
                    placeholder-gray-400
                    shadow-sm
                    text-base
                    focus:outline-none
                    focus:ring-2
                    focus:ring-purple-600
                    focus:border-transparent
                  "
                  placeholder="Ad Soyad"
                />
                <p v-if="v$.namelastname.$error" class="absolute text-sm text-red-500 -bottom-6">
                    İsim alanı zorunludur.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div
            class="
              items-center
              w-full
              p-4
              space-y-4
              text-gray-500
              md:inline-flex md:space-y-0
            "
          >
            <h2 class="max-w-sm mx-auto md:w-1/3">Yaş</h2>
            <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div class="relative">
                  <input
                    @input="v$.age.$touch()"
                    v-model="age"
                    type="number"
                    id="user-info-phone"
                    class="
                      rounded-lg
                      border-transparent
                      flex-1
                      appearance-none
                      border border-gray-300
                      w-full
                      py-2
                      px-4
                      bg-whitetext-gray-700
                      placeholder-gray-400
                      shadow-sm
                      text-base
                      focus:outline-none
                      focus:ring-2
                      focus:ring-purple-600
                      focus:border-transparent
                    "
                    placeholder="Yaş"
                  />
                  <p v-if="v$.age.$error" class="absolute text-sm text-red-500 -bottom-6">
                    Yaş 6 dan küçük olamaz.
                </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
            <div
            class="
              items-center
              w-full
              p-4
              space-y-4
              text-gray-500
              md:inline-flex md:space-y-0
            "
          >
            <h2 class="max-w-sm mx-auto md:w-1/3">Hes</h2>
            <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div class="relative">
                  <input
                    v-model="hes"
                    type="text"
                    id="user-info-phone"
                    class="
                      rounded-lg
                      border-transparent
                      flex-1
                      appearance-none
                      border border-gray-300
                      w-full
                      py-2
                      px-4
                      bg-whitetext-gray-700
                      placeholder-gray-400
                      shadow-sm
                      text-base
                      focus:outline-none
                      focus:ring-2
                      focus:ring-purple-600
                      focus:border-transparent
                    "
                    placeholder="Hes Kodu* - ORN: A1A1-B1B1-11"
                  />
                  <p v-if="!hesChecker" class="absolute text-sm text-red-500 -bottom-6">
                    Hes alanı zorunludur.
                </p>
                </div>
              </div>
            </div>
          </div>
          <hr>
            <div
            class="
              items-center
              w-full
              p-4
              space-y-4
              text-gray-500
              md:inline-flex md:space-y-0
            "
          >
            <h2 class="max-w-sm mx-auto md:w-1/3">TC</h2>
            <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div class="relative">
                  <input
                    v-model="v$.tc.$model"
                    type="text"
                    id="user-info-phone"
                    class="
                      rounded-lg
                      border-transparent
                      flex-1
                      appearance-none
                      border border-gray-300
                      w-full
                      py-2
                      px-4
                      bg-whitetext-gray-700
                      placeholder-gray-400
                      shadow-sm
                      text-base
                      focus:outline-none
                      focus:ring-2
                      focus:ring-purple-600
                      focus:border-transparent
                    "
                    placeholder="TC No"
                  />
                  <p v-if="!tcnoChecker" class="absolute text-sm text-red-500 -bottom-6">
                    TC alanı zorunludur.
                </p>
                </div>
              </div>
            </div>
          </div>
          <hr>
            <div
            class="
              items-center
              w-full
              p-4
              space-y-4
              text-gray-500
              md:inline-flex md:space-y-0
            "
          >
            <h2 class="max-w-sm mx-auto md:w-1/3">GSM</h2>
            <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div class="relative">
                  <input
                    v-model="v$.gsm.$model"
                    type="text"
                    id="user-info-phone"
                    class="
                      rounded-lg
                      border-transparent
                      flex-1
                      appearance-none
                      border border-gray-300
                      w-full
                      py-2
                      px-4
                      bg-whitetext-gray-700
                      placeholder-gray-400
                      shadow-sm
                      text-base
                      focus:outline-none
                      focus:ring-2
                      focus:ring-purple-600
                      focus:border-transparent
                    "
                    placeholder="GSM"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr>
         
        
          <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <button
              @click="namelerial"
              :disabled="v$.$invalid"
              class="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 cursor-not-allowed rounded-lg "
            >
              Kaydet
            </button>
          </div>
        </div>

        <button @click="paymentpush" v-if="personlist.length === howlongpeople" type="button" class="py-2 px-4 flex justify-center items-center  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
            <svg width="20" height="20" class="mr-2" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z">
                </path>
            </svg>
            Ödeme Sayfası
        </button>

      </form>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import useVuelidate from "@vuelidate/core";
import { required, between } from "@vuelidate/validators";
 import validate from '@/mixins/validate'

export default {
    mixins: [validate],
  components: {
    Navbar,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      currenthoteldata: "",
      howlongpeople: "",
      namelastname: [],
      age: [],
      hes: [],
      tc: [],
      gsm: [],
      cinsiyet: [],
      button_visible_on_reserve_page: false,
      namevalue: false,
      tcvalue: false,
      personlist: [],
    };
  },
  created() {
    const howpeople = this.$route.params.id;
    var integer = parseInt(howpeople, 10);
    this.howlongpeople = integer;

    const otel_name = this.$route.query.otelname;
    this.$store.state.hotels.Hotels.filter((elmn) => {
      if (elmn.HotelName === otel_name) {
        this.currenthoteldata = elmn;
      } else {
        console.log("yanlış");
      }
    });
  },
  methods: {
    namelerial() {
      this.personlist.push([
        this.namelastname,
        this.age,
        this.hes,
        this.tc,
        this.gsm,
      ]);
      this.namelastname = [];
      this.age = [];
      this.hes = [];
      this.tc = [];
      this.gsm = [];
    },
    paymentpush() {
      this.$router.push({
        path: "/payment/",
        query: {
          persons: this.personlist,
        },
      });
    },
  },
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
  computed: {
    hesChecker() {
      var pattern =
        /^[A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9]-[A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9]-[0-9][0-9]$/g;
      if (!pattern.test(this.hes)) {
        return false;
      } else {
        return true;
      }
    },
    tcnoChecker() {
      var pattern = /^[1-9]{1}[0-9]{9}[02468]{1}$/g;
      if (!pattern.test(this.tc)) {
        return false;
      } else {
        return true;
      }
    },
    gsmChecker() {
      var pattern = /^(05)([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/;
      if (!pattern.test(this.gsm)) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style></style>
