<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

import IconDashBoard from "../components/icons/IconDashBoard.vue";
import IconDomainAnalytics from "../components/icons/IconDomainAnalytics.vue";
import IconKeywordAnalytics from "../components/icons/IconKeywordAnalytics.vue";
import IconSiteAudit from "../components/icons/IconSiteAudit.vue";
import IconSosalMediaTracker from "../components/icons/IconSosalMediaTracker.vue";
import IconPositionTracker from "../components/icons/IconPositionTracker.vue";
import IconOnPageSeo from "../components/icons/IconOnPageSeo.vue";
import IconSettings from "../components/icons/IconSettings.vue";
import IconLogout from "./icons/IconLogout.vue";

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
  { title: "Dashboard", link: "dashboard", icon: IconDashBoard },
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

<style scoped></style>

<template>
  <aside
    :class="`${
      is_expanded
        ? 'w-[400px] h-full bg-[#FFFFFF] dark:bg-[#1A1D1F] border-r-2 border-[#EFEFEF] dark:border-[#272B30]'
        : 'w-20 h-full bg-[#FFFFFF] dark:bg-[#1A1D1F] border-r-2 border-[#EFEFEF] dark:border-[#272B30]'
    } duration-300 relative`"
  >
    <div class="px-6">
      <div class="h-[98px] text-white flex justify-between items-center">
        <div class="inline-flex items-center pl-2 space-x-1">
          <svg
            width="25"
            height="23"
            viewBox="0 0 25 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-1"
          >
            <rect y="8.5" width="7" height="14" rx="1.25" fill="#FD5F69" />
            <rect
              x="9"
              y="0.5"
              width="7"
              height="22"
              rx="1.25"
              fill="#FFBE02"
            />
            <rect
              x="18"
              y="13.5"
              width="7"
              height="9"
              rx="1.25"
              fill="#83BF6E"
            />
          </svg>
          <h1
            :class="`font-bold text-[#302F33] dark:text-white text-2xl duration-300 ${
              !is_expanded && 'scale-0'
            }`"
          >
            Seoso
          </h1>
        </div>
        <div :class="`${!is_expanded && '-ml-16'}`">
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
      <div class="h-[calc(100vh-98px)]">
        <div class="flex flex-col justify-between h-full">
          <div class="pt-4">
            <ul class="flex flex-col space-y-2">
              <li class="" v-for="item in sidebarMenus" v-bind:key="item.id">
                <div
                  class="relative flex justify-between text-[#6F767E] dark:text-gray-300 hover:text-[#1A1D1F]"
                >
                  <div class="flex items-center w-full">
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
                    >
                      <component :is="item.icon" />
                    </div>
                    <RouterLink
                      :to="{ name: item.link }"
                      class="hover:shadow-[inset_0px_-2px_1px_rgba(0,0,0,0.05),inset_0px_1px_1px_#FFFFFF] dark:hover:shadow-[inset_0px_-2px_1px_rgba(0,0,0,0.5),inset_0px_1px_1px_rgba(255,255,255,0.11)] hover:bg-[#EFEFEF] inline-block w-full py-3 pl-10 rounded-xl dark:hover:bg-[#272B30] focus:outline-none"
                      :class="`${!is_expanded && 'scale-0'}`"
                    >
                      {{ item.title }}
                    </RouterLink>
                  </div>
                  <template v-if="item.submenu && is_expanded">
                    <button
                      class="absolute right-0 top-3 flex items-center p-1"
                      tabindex="-1"
                      @click="ToggleSubmenu"
                    >
                      <svg
                        :class="`${
                          isSubmenuVisible ? 'rotate-90' : ''
                        } w-2 h-2  duration-300`"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.792893 0.792893C0.402369 1.18342 0.402369 1.81658 0.792893 2.20711L3.58579 5L0.792893 7.79289C0.402369 8.18342 0.402369 8.81658 0.792893 9.20711C1.18342 9.59763 1.81658 9.59763 2.20711 9.20711L5.70711 5.70711C6.09763 5.31658 6.09763 4.68342 5.70711 4.29289L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792893 0.792893Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </template>
                </div>
                <template v-if="item.submenu && is_expanded">
                  <div class="pt-2 pl-4">
                    <ul
                      class="flex flex-col pl-2 text-[#6F767E] dark:text-gray-400 border-l border-gray-700 duration-300"
                      v-if="item.submenu"
                      v-show="isSubmenuVisible"
                    >
                      <li
                        v-for="subitem in item.submenuItem"
                        v-bind:key="subitem.title"
                      >
                        <RouterLink
                          :to="{ name: subitem.link }"
                          class="hover:shadow-[inset_0px_-2px_1px_rgba(0,0,0,0.05),inset_0px_1px_1px_#FFFFFF] dark:hover:shadow-[inset_0px_-2px_1px_rgba(0,0,0,0.5),inset_0px_1px_1px_rgba(255,255,255,0.11)] hover:bg-[#EFEFEF] dark:hover:bg-[#272B30] inline-block w-full px-4 py-3 text-smd rounded-xl text-[#6F767E] dark:text-gray-300 hover:text-[#1A1D1F] focus:outline-none"
                          >{{ subitem.title }}
                        </RouterLink>
                      </li>
                    </ul>
                  </div>
                </template>
              </li>
            </ul>
          </div>
          <div class="h-[98px]">
            <div>
              <ul>
                <li
                  class="relative text-[#6F767E] dark:text-gray-300 hover:text-[#1A1D1F]"
                >
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
                  >
                    <IconSettings />
                  </div>

                  <RouterLink
                    to="/"
                    :class="`hover:shadow-[inset_0px_-2px_1px_rgba(0,0,0,0.05),inset_0px_1px_1px_#FFFFFF] dark:hover:shadow-[inset_0px_-2px_1px_rgba(0,0,0,0.5),inset_0px_1px_1px_rgba(255,255,255,0.11)] hover:bg-[#EFEFEF] inline-block w-full py-3 pl-10 rounded-xl dark:hover:bg-[#272B30] pr-4 text-md focus:outline-none ${
                      !is_expanded && 'scale-0'
                    } duration-300`"
                  >
                    Settings
                  </RouterLink>
                </li>
                <li
                  class="relative text-[#6F767E] dark:text-gray-300 hover:text-[#1A1D1F]"
                >
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
                  >
                    <IconLogout />
                  </div>

                  <RouterLink
                    to="/"
                    :class="`hover:shadow-[inset_0px_-2px_1px_rgba(0,0,0,0.05),inset_0px_1px_1px_#FFFFFF] dark:hover:shadow-[inset_0px_-2px_1px_rgba(0,0,0,0.5),inset_0px_1px_1px_rgba(255,255,255,0.11)] hover:bg-[#EFEFEF] inline-block w-full py-2 pl-10 rounded-xl dark:hover:bg-[#272B30] pr-4 text-md focus:outline-none ${
                      !is_expanded && 'scale-0'
                    } duration-300`"
                  >
                    Logout
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
