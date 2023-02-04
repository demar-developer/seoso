<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

import IconDomainAnalytics from "../components/icons/IconDomainAnalytics.vue";
import IconDashboard from "../components/icons/IconDashboard.vue";
import IconKeywordAnalytics from "../components/icons/IconKeywordAnalytics.vue";
import IconSiteAudit from "../components/icons/IconSiteAudit.vue";
import IconSosalMediaTracker from "../components/icons/IconSosalMediaTracker.vue";
import IconPositionTracker from "../components/icons/IconPositionTracker.vue";
import IconOnPageSeo from "../components/icons/IconOnPageSeo.vue";
import IconSettings from "../components/icons/IconSettings.vue";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const isSubmenuVisible = ref(
  localStorage.getItem("isSubmenuVisible") === "true"
);

const ToggleSidebar = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};

const ToggleSubmenu = () => {
  isSubmenuVisible.value = !isSubmenuVisible.value;
  localStorage.setItem("isSubmenuVisible", isSubmenuVisible.value);
};

const sidebarMenus = [
  { title: "Dashboard", link: "Dashboard", icon: IconDashboard },
  {
    title: "Domain Analytics",
    link: "",
    icon: IconDomainAnalytics,
    submenu: true,
    submenuItem: [
      { title: "Overview", link: "about" },
      { title: "Organic Search", link: "about" },
      { title: "Backlinks", link: "about" },
      { title: "Adverting Research", link: "about" },
      { title: "Traffic Analytics", link: "about" },
    ],
  },
  { title: "Keyword Analytics", icon: IconKeywordAnalytics, link: "home" },
  { title: "Site Audit", icon: IconSiteAudit, link: "home" },
  {
    title: "Sosal Media Tracker",
    icon: IconSosalMediaTracker,
    link: "home",
  },
  { title: "Position Tracker", icon: IconPositionTracker, link: "home" },
  { title: "On page Seo", icon: IconOnPageSeo, link: "home" },
];
</script>

<template>
  <aside
    :class="`${
      is_expanded
        ? 'w-[300px] h-full bg-[#191d20] border-r border-[#232428]'
        : 'w-20 h-full bg-[#191d20] border-r border-[#232428]'
    } duration-300 relative`"
  >
    <div class="px-6">
      <div class="h-[56px] text-white flex justify-between items-center">
        <div class="inline-flex items-center pl-2 space-x-1">
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-1"
          >
            <rect y="3.40909" width="5.71429" height="11.5909" fill="#F5636E" />
            <rect x="7.14282" width="5.71429" height="15" fill="#FABF0D" />
            <rect
              x="14.2856"
              y="7.5"
              width="5.71429"
              height="7.5"
              fill="#64875C"
            />
          </svg>

          <h1
            :class="`font-bold text-xl duration-300 ${
              !is_expanded && 'scale-0'
            }`"
          >
            Seoso
          </h1>
        </div>
        <div :class="`${!is_expanded && '-ml-12'}`">
          <button
            class="flex items-center justify-center p-0.5 rounded bg-zinc-800 group border border-solid border-[#34353b] focus:outline-none focus:ring-0"
            @click="ToggleSidebar"
          >
            <svg
              :class="`${
                is_expanded
                  ? 'w-3 h-3 text-gray-300 stroke-current group-hover:translate-x-[-0.5rem]'
                  : 'w-3 h-3 text-gray-300 stroke-current rotate-180 group-hover:translate-x-[0.5rem]'
              } duration-300 relative`"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.25 6.75L4.75 12L10.25 17.25"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.25 12H5"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="h-[calc(100vh-56px)]">
        <div class="flex flex-col justify-between h-full">
          <div class="pt-4">
            <ul class="flex flex-col space-y-2">
              <li class="" v-for="item in sidebarMenus" v-bind:key="item.id">
                <div
                  class="relative flex justify-between text-gray-300 hover:text-white focus-within:text-white"
                >
                  <div class="flex items-center w-full">
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
                    >
                      <component :is="item.icon" />
                    </div>
                    <RouterLink
                      :to="{ name: item.link }"
                      :href="item.link"
                      :class="`inline-block w-full py-2 pl-8 pr-4 text-md rounded hover:bg-[#232428] focus:outline-none focus:ring-1 focus:ring-zinc-800 focus:bg-[#232428] ${
                        !is_expanded && 'opacity-0'
                      }`"
                    >
                      {{ item.title }}
                    </RouterLink>
                  </div>
                  <template v-if="item.submenu && is_expanded">
                    <button
                      class="absolute right-0 flex items-center p-1"
                      tabindex="-1"
                      @click="ToggleSubmenu"
                    >
                      <svg
                        :class="`${
                          isSubmenuVisible ? 'rotate-180' : ''
                        } w-5 h-5 stroke-current duration-300`"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M15.25 10.75L12 14.25L8.75 10.75"
                        ></path>
                      </svg>
                    </button>
                  </template>
                </div>
                <template v-if="item.submenu && is_expanded">
                  <div class="pt-2 pl-4">
                    <ul
                      class="flex flex-col pl-2 text-gray-400 border-l border-gray-700 duration-300"
                      v-if="item.submenu"
                      v-show="isSubmenuVisible"
                    >
                      <li
                        v-for="subitem in item.submenuItem"
                        v-bind:key="subitem.title"
                      >
                        <RouterLink
                          :to="{ name: subitem.link }"
                          class="inline-block w-full px-4 py-2 text-smd rounded hover:bg-[#232428] hover:text-white focus:outline-none focus:ring-1 focus:ring-zinc-800 focus:text-white"
                          >{{ subitem.title }}
                        </RouterLink>
                      </li>
                    </ul>
                  </div>
                </template>
              </li>
            </ul>
          </div>
          <div class="h-[56px]">
            <div>
              <ul>
                <li
                  class="relative text-gray-300 hover:text-white focus-within:text-white"
                >
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
                  >
                    <IconSettings />
                  </div>

                  <RouterLink
                    to="/"
                    :class="`inline-block w-full py-2 pl-8 pr-4 text-md rounded hover:bg-[#232428] focus:outline-none focus:ring-1 focus:ring-zinc-800 focus:bg-[#232428] ${
                      !is_expanded && 'scale-0'
                    } duration-300`"
                  >
                    Settings
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
