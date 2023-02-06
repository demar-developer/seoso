<script setup>
//import { RouterView } from "vue-router";
import SidebarNav from "../../components/SidebarNav.vue";
import IconChevronDown from "../../components/icons/IconChevronDown.vue";
</script>

<template>
  <div class="w-screen h-screen flex dark:text-white">
    <!-- Side bar -->

    <SidebarNav />
    <div class="w-full h-full">
      <nav
        class="h-[98px] bg-[#1A1D1F] flex items-center justify-between px-[40px] w-full py-[10px] z-10"
      >
        <div class="flex">
          <span
            class="inline-flex items-center h-11 rounded-l-md border-r-0 bg-zinc-50 ring-1 ring-zinc-900/7.5 dark:bg-[#272B30] dark:ring-zinc-800 sm:max-w-xl opacity-100 scale-100 px-3 text-xs text-[#EFEFEF]"
            >http + https
          </span>
          <div
            class="rounded-none bg-zinc-50 ring-1 ring-zinc-900/7.5 dark:bg-[#272B30] dark:ring-zinc-800 sm:max-w-xl opacity-100 scale-100"
          >
            <div class="group relative flex h-11">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                class="pointer-events-none absolute left-3 top-0 h-full w-5 stroke-zinc-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
                ></path>
              </svg>
              <input
                class="flex-auto appearance-none bg-transparent pl-10 text-zinc-900 outline-none placeholder:text-zinc-500 focus:w-full focus:flex-none dark:text-white sm:text-sm pr-4"
                placeholder="Domain or URL"
                maxlength="512"
                type="search"
                value=""
                tabindex="0"
              />
            </div>
          </div>
          <span
            class="inline-flex items-center border-r-0 bg-zinc-50 ring-1 ring-zinc-900/7.5 dark:bg-[#272B30] dark:ring-zinc-800 sm:max-w-xl opacity-100 scale-100 px-3 text-gray-400 sm:text-sm"
            >Subdomains
          </span>
          <button class="btn-search font-bold">Search</button>
        </div>
        <div class="flex space-x-2">
          <button
            class="relative flex h-11 w-11 items-center justify-center rounded-full dark:bg-zinc-900 text-gray-400 hover:text-white focus:ring-1 focus:ring-zinc-800"
          >
            <div>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                class="h-7 w-7 stroke-current"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.25 12V10C17.25 7.1005 14.8995 4.75 12 4.75C9.10051 4.75 6.75 7.10051 6.75 10V12L4.75 16.25H19.25L17.25 12Z"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9 16.75C9 16.75 9 19.25 12 19.25C15 19.25 15 16.75 15 16.75"
                />
              </svg>
            </div>
            <div class="absolute top-3 right-3 flex h-2 w-2">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FABF0D] opacity-75"
              />
              <span class="inline-flex h-2 w-2 rounded-full bg-[#FABF0D]" />
            </div>
          </button>
          <button
            class="flex h-11 items-center justify-center rounded-full dark:bg-zinc-900 px-2 text-gray-300 hover:text-white focus:ring-1 focus:ring-zinc-800"
          >
            <img
              src="/img/avatar-1.jpg"
              alt=""
              class="h-8 w-8 rounded-full object-cover"
            />
            <span class="pl-2 text-sm">Demar</span>
            <IconChevronDown class="h-6 w-6 stroke-current" />
          </button>
        </div>
      </nav>
      <div class="h-[calc(100vh-98px)] p-[20px]">
        <div
          class="h-full bg-[##111315] border rounded-md border-[#232428] p-[20px]"
        >
          <RouterView />
        </div>
      </div>
    </div>
    <!-- Main content -->
  </div>
</template>

<style scoped>
.btn-search {
  background: linear-gradient(4.88deg, #fd5f69 -21.9%, #ffbe02 109.17%);
  border-radius: 0px 6px 6px 0px;
  padding: 9px 30px;
}
</style>
