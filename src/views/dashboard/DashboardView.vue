<script>
import SidebarNav from "../../components/SidebarNav.vue";

export default {
  components: {
    SidebarNav,
  },
};
</script>

<template>
  <div class="w-screen h-screen flex dark:text-white">
    <!-- Side bar -->

    <SidebarNav />
    <div class="w-full h-full">
      <div
        class="h-[56px] bg-[#191d20] flex items-center px-[40px] w-full py-[10px] border-b border-[#232428] z-10"
      >
        <div
          class="rounded-md bg-zinc-50 ring-1 ring-zinc-900/7.5 dark:bg-zinc-900 dark:ring-zinc-800 sm:max-w-xl opacity-100 scale-100"
        >
          <div class="group relative flex h-8">
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
              placeholder="Find something..."
              maxlength="512"
              type="search"
              value=""
              tabindex="0"
            />
          </div>
        </div>
      </div>
      <div class="h-[calc(100vh-56px)] p-[20px]">
        <div
          class="h-full bg-[#191d20] border rounded-md border-[#232428] p-[20px]"
        >
          Main content
        </div>
      </div>
    </div>
    <!-- Main content -->
  </div>
</template>

<style></style>
