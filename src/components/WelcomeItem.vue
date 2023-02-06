<template>
  <div class="text-white text-2xl font-medium">
    <button
      class="text-sm text-gray-400 rounded-md border border-zinc-700 dark:bg-zinc-800 hover:text-white hover:bg-zinc-700 px-4 py-2 transform duration-300"
      v-tooltip="{
        content: `Enter your own Page title/H1<br /> to generate highly topical sub-headers. 
          <br>Use the DOM vector H2-H6 recommendations<br /> for optimal results & boosts!`,
        placement: 'bottom',
        html: true,
      }"
    >
      <slot name="icon"></slot>
      Click Me
    </button>
    <button class="btn-search">Search</button>
    <button class="px-[30px] py-[9px] rounded-none rounded-r-lg bg-gradient-to-bl from-[#ffbe02]  to-[#fd5f69]">Search</button>
    <slot></slot>
  </div>
</template>

<style lang="css" scoped>
.btn-search {
  background: linear-gradient(4.88deg, #fd5f69 -21.9%, #ffbe02 109.17%);
  border-radius: 0px 6px 6px 0px;
  padding: 9px 30px;
}
</style>
