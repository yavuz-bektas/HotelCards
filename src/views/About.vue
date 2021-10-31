<template>
  <div class="overflow-auto h-screen pb-24 px-4 md:px-6">
    <Navbar />
    <br />
    <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="
          pricing-box
          max-w-lg
          mx-auto
          rounded-lg
          shadow-lg
          overflow-hidden
          lg:max-w-none lg:flex
        "
      >
        <div
          class="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12"
        >
          <h3
            class="
              text-2xl
              leading-8
              font-extrabold
              text-gray-900
              sm:text-3xl sm:leading-9
              dark:text-white
            "
          >
            {{ this.selecteHotelData.HotelName }}
          </h3>
          <p class="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
            {{ this.selecteHotelData.Description }}
          </p>
          <div class="mt-8">
            <div class="flex items-center">
              <h4
                class="
                  flex-shrink-0
                  pr-4
                  bg-white
                  dark:bg-gray-800
                  text-sm
                  leading-5
                  tracking-wider
                  font-semibold
                  uppercase
                  text-indigo-600
                "
              >
                Ne İçeriyor?
              </h4>
              <div class="flex-1 border-t-2 border-gray-200"></div>
            </div>
            <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
              <li
                class="flex items-start lg:col-span-1"
                v-for="i in this.selecteHotelData.ContentofHotel"
                :key="i.id"
              >
                <div class="flex-shrink-0">
                  <svg
                    class="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path
                      d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                    ></path>
                  </svg>
                </div>
                <p
                  class="
                    ml-3
                    text-sm
                    leading-5
                    text-gray-700
                    dark:text-gray-200
                  "
                >
                  {{ i }}
                </p>
              </li>
            </ul>
          </div>
          <div class="mt-8">
            <div class="flex items-center">
              <h4
                class="
                  flex-shrink-0
                  pr-4
                  bg-white
                  text-sm
                  dark:bg-gray-800
                  leading-5
                  tracking-wider
                  font-semibold
                  uppercase
                  text-indigo-600
                "
              >
                Ne içermiyor?
              </h4>
            </div>
            <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
              <li
                class="flex items-start lg:col-span-1"
                v-for="i in this.selecteHotelData.NotContentofHotel"
                :key="i.id"
              >
                <div class="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    class="h-6 w-6 mr-2"
                    fill="red"
                    viewBox="0 0 1792 1792"
                  >
                    <path
                      d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                    ></path>
                  </svg>
                </div>
                <p
                  class="
                    ml-3
                    text-sm
                    leading-5
                    text-gray-700
                    dark:text-gray-200
                  "
                >
                  {{ i }}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="
            py-8
            px-6
            text-center
            bg-gray-50
            dark:bg-gray-700
            lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12
          "
        >
          <p class="text-lg leading-6 font-bold text-gray-900 dark:text-white">
            Kahvaltı Bedava
          </p>
          <div
            class="
              mt-4
              flex
              items-center
              justify-center
              text-5xl
              leading-none
              font-extrabold
              text-gray-900
              dark:text-white
            "
          >
            <span> ${{ this.selecteHotelData.Price }}/day </span>
          </div>
          <p class="mt-4 text-sm leading-5">
            <span class="block font-medium text-gray-500 dark:text-gray-400">
              Card ile:
            </span>
            <span
              class="inline-block font-medium text-gray-500 dark:text-gray-400"
            >
              İşlem başına %2.9 + 20p
            </span>
          </p>
          <div class="mt-6">
            <div class="rounded-md shadow">
              <button
                :disabled="v$.howlongpeople.$invalid"
                @click="rezervle"
                type="button"
                class="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 cursor-not-allowed rounded-lg "
              >
                Rezervasyon
              </button>
            </div>
          </div>
          <br />
          <h5>Kişi:</h5>
          <div class="relative">
            <input
              v-model="v$.howlongpeople.$model"
              type="text"
              id="simple-email"
              class="
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
              placeholder="Kişi"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    Navbar,
  },
  data() {
    return {
      hoteldata: "",
      currentelem: "",
      currentparams: "",
      selecteHotelData: "",
      howlongpeople: "",
    };
  },

  created() {
    this.hoteldata = this.$store.state.hotels.Hotels;
    this.currentparams = this.$route.params.id;
    var integer = parseInt(this.currentparams, 10);
    this.$store.state.hotels.Hotels.filter((elmn) => {
      if (elmn.id === integer) {
        this.selecteHotelData = elmn;
      } else {
        console.log("yanlış");
      }
    });
  },

  methods: {
    rezervle() {
      this.$router.push({
        path: "/reservation/" + this.howlongpeople,
        query: {
          otelname: this.selecteHotelData.HotelName,
        },
      });
    },
  },
  validations() {
    return {
      howlongpeople: { required },
    };
  },
};
</script>

<style></style>
