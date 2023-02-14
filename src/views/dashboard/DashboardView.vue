<script setup>
import { PlusIcon } from "@heroicons/vue/20/solid";
</script>

<template>
  <div class="flex justify-between">
    <div class="space-x-2">
      <button
        class="relative group bg-[#FCFCFC] dark:bg-[#272B30] pr-4 pl-8 py-1 rounded border border-1 border-[#EFEFEF] dark:border-[#33383F] hover:bg-[#FE9035] hover:text-white text-xs text-[#BDC0C6] dark:text-[#9ca7c5] duration-200"
      >
        <svg
          class="absolute h-5 w-5 left-2 top-1/2 transform -translate-y-1/2 fill-[#BDC0C6] dark:fill-[#33383F] group-hover:fill-white duration-200"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 5.25C10 4.69772 9.55228 4.25 9 4.25C8.44772 4.25 8 4.69772 8 5.25V8H5.25C4.69772 8 4.25 8.44772 4.25 9C4.25 9.55228 4.69772 10 5.25 10H8V12.75C8 13.3023 8.44772 13.75 9 13.75C9.55228 13.75 10 13.3023 10 12.75V10H12.75C13.3023 10 13.75 9.55228 13.75 9C13.75 8.44772 13.3023 8 12.75 8H10V5.25Z"
          />
        </svg>

        New project
      </button>
      <button
        class="relative bg-white dark:bg-[#272B30] pr-6 pl-4 py-1 rounded border border-1 border-[#EFEFEF] dark:border-[#33383F] text-xs text-[#9ca7c5]"
      >
        My project 0
      </button>
      <button>My project 0</button>
    </div>
    <div class="flex space-x-3">
      <button
        class="relative bg-[#272B30] pr-4 pl-8 py-1 rounded border border-1 border-[#33383F] text-xs text-[#9ca7c5]"
      >
        <svg
          class="absolute h-5 w-5 left-2 top-1/2 transform -translate-y-1/2"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4952 6.92558C16.4479 6.7884 16.3617 6.6679 16.2472 6.57871C16.1327 6.48952 15.9948 6.43545 15.8502 6.42308L11.5827 5.80058L9.67022 1.92308C9.60881 1.79628 9.51292 1.68934 9.39354 1.61451C9.27416 1.53969 9.13611 1.5 8.99522 1.5C8.85433 1.5 8.71629 1.53969 8.59691 1.61451C8.47752 1.68934 8.38164 1.79628 8.32022 1.92308L6.40772 5.79308L2.14022 6.42308C2.00141 6.44281 1.87092 6.50105 1.76354 6.5912C1.65615 6.68135 1.57619 6.79979 1.53272 6.93308C1.49293 7.06334 1.48936 7.20197 1.52239 7.3341C1.55543 7.46623 1.62382 7.58688 1.72022 7.68308L4.81772 10.6831L4.06772 14.9431C4.03744 15.0844 4.04864 15.2315 4.09996 15.3666C4.15128 15.5017 4.24055 15.6191 4.35702 15.7046C4.47349 15.7902 4.6122 15.8403 4.75647 15.8489C4.90074 15.8575 5.04442 15.8242 5.17022 15.7531L8.99522 13.7506L12.8202 15.7531C12.9255 15.8125 13.0444 15.8435 13.1652 15.8431C13.3241 15.8436 13.479 15.7938 13.6077 15.7006C13.7241 15.6172 13.8142 15.5023 13.8673 15.3694C13.9205 15.2365 13.9345 15.0912 13.9077 14.9506L13.1577 10.6906L16.2552 7.69058C16.3635 7.59884 16.4435 7.47826 16.486 7.34284C16.5285 7.20743 16.5317 7.06274 16.4952 6.92558ZM11.8827 9.92558C11.7959 10.0099 11.7308 10.1139 11.6929 10.2289C11.655 10.3438 11.6455 10.4662 11.6652 10.5856L12.2052 13.7356L9.38522 12.2356C9.27562 12.1814 9.155 12.1532 9.03272 12.1532C8.91045 12.1532 8.78982 12.1814 8.68022 12.2356L5.86022 13.7356L6.40022 10.5856C6.4199 10.4662 6.4104 10.3438 6.37252 10.2289C6.33465 10.1139 6.26953 10.0099 6.18272 9.92558L3.93272 7.67558L7.09022 7.21808C7.21172 7.20118 7.32722 7.15474 7.4266 7.08282C7.52597 7.0109 7.60619 6.91571 7.66022 6.80558L8.99522 3.94808L10.4052 6.81308C10.4593 6.92321 10.5395 7.0184 10.6388 7.09032C10.7382 7.16224 10.8537 7.20868 10.9752 7.22558L14.1327 7.68308L11.8827 9.92558Z"
            fill="#676D7C"
          />
        </svg>

        Favourite
      </button>
      <button
        class="relative bg-[#272B30] pr-4 pl-4 py-1 rounded border border-1 border-[#33383F] text-xs text-[#9ca7c5]"
      >
        Trends: Last 30 days
      </button>
    </div>
  </div>
  <div class="flex items-center justify-center h-[calc(100vh-198px)]">
    <div class="text-center">
      <h3 class="mt-2 text-4xl font-medium text-gray-900 dark:text-white">
        Add your first Project
      </h3>
      <p class="mt-1 text-sm text-gray-500">
        You can check to see how well your website ranks in organic search<br />
        results and compare it to competitors sites
      </p>
      <div class="mt-6">
        <button
          type="button"
          class="inline-flex items-center rounded-md border border-transparent bg-[#83BF6E] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
        >
          <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          New Project
        </button>
      </div>
    </div>
  </div>
</template>
