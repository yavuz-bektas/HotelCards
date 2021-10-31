<template>
  <main class="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
    <div class="flex items-start justify-between">
      <div class="flex flex-col w-full md:space-y-4">
        <Navbar/>
        
        <div class="overflow-auto h-screen pb-24 px-4 md:px-6">
          <h1 class="text-4xl font-semibold text-gray-800 dark:text-white">
            Good afternoom, Charlie
          </h1>
          <h2 class="text-md text-gray-400">
            Here&#x27;s what&#x27;s happening with your ambassador account
            today.
          </h2>
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4"
          >
            <div
              class="w-full"
              v-for="item in $store.state.hotels.Hotels"
              :key="item.id"
            >
              <div class="flex bg-white dark:bg-gray-800 rounded-lg shadow">
                <div class="flex-none w-24 md:w-48 relative">
                  <img
                    :src="item.Image"
                    alt="shopping image"
                    class="
                      absolute
                      rounded-lg
                      inset-0
                      w-full
                      h-full
                      object-cover
                    "
                  />
                </div>
                <form class="flex-auto p-6">
                  <div class="flex flex-wrap">
                    <h1
                      class="flex-auto text-xl font-semibold dark:text-gray-50"
                    >
                      {{ item.HotelName }}
                    </h1>
                    <div
                      class="
                        text-xl
                        font-semibold
                        text-gray-500
                        dark:text-gray-300
                      "
                    >
                      ${{ item.Price }}
                    </div>
                    <div
                      class="
                        w-full
                        flex-none
                        text-sm
                        font-medium
                        text-gray-500
                        dark:text-gray-300
                        mt-2
                      "
                    >
                      {{item.Review}}
                    </div>
                  </div>
                  <div
                    class="
                      flex
                      items-baseline
                      mt-4
                      mb-6
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    <div class="space-x-2 flex" v-for="i in item.Star" :key="i.id">
                      <svg
                        class="w-5 h-5 fill-current text-gray-700"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex mb-4 text-sm font-medium">
                    <button
                      type="button"
                      @click="pushtoDesc(item.id)"
                      class="
                        py-2
                        px-4
                        bg-indigo-600
                        hover:bg-indigo-700
                        focus:ring-indigo-500 focus:ring-offset-indigo-200
                        text-white
                        w-full
                        transition
                        ease-in
                        duration-200
                        text-center text-base
                        font-semibold
                        shadow-md
                        focus:outline-none focus:ring-2 focus:ring-offset-2
                        rounded-lg
                      "
                    >
                      Rezervle
                    </button>
                  </div>
                  <p class="text-sm text-gray-500 dark:text-gray-300">
                    {{item.Beach}}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from "@/components/Navbar"
export default {
  components:{
    Navbar
  },
  methods:{
    pushtoDesc(id){
      this.$router.push('/about/'+id)
    }
  }
};
</script>

<style></style>
