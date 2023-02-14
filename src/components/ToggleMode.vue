<template>
  <Switch
    v-model="isDark"
    :class="[
      isDark ? 'bg-[#E9A528]' : 'bg-gray-200',
      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#E9A528] focus:ring-offset-2',
    ]"
    @change="toggleDarkMode()"
  >
    <span class="sr-only">Use setting</span>
    <span
      :class="[
        isDark ? 'translate-x-5' : 'translate-x-0',
        'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
      ]"
    >
      <span
        :class="[
          isDark
            ? 'opacity-0 ease-out duration-100'
            : 'opacity-100 ease-in duration-200',
          'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          class="h-5 w-5 stroke-zinc-900 dark:hidden"
        >
          <path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
          <path
            stroke-linecap="round"
            d="M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"
          ></path>
        </svg>
      </span>
      <span
        :class="[
          isDark
            ? 'opacity-100 ease-in duration-200'
            : 'opacity-0 ease-out duration-100',
          'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          class="hidden h-5 w-5 stroke-slate-900 dark:block"
        >
          <path
            d="M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z"
          ></path>
        </svg>
      </span>
    </span>
  </Switch>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { Switch } from "@headlessui/vue";

const isDark = useDark();
// eslint-disable-next-line no-unused-vars
const toggleDark = useToggle(isDark);
console.log(isDark.value);
</script>

<style></style>
