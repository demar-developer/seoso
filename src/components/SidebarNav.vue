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

<style scoped>
.sidebar-btn:hover {
  background: #272b30;
  box-shadow: inset 0px -2px 1px rgba(0, 0, 0, 0.4),
    inset 0px 1px 1px rgba(255, 255, 255, 0.11);
  border-radius: 12px;
  justify-content: center;
}
</style>

<template>
  <aside
    :class="`${
      is_expanded
        ? 'w-[300px] h-full bg-[#1A1D1F] border-r-2 border-[#272B30]'
        : 'w-20 h-full bg-[#1A1D1F] border-r-2 border-[#272B30]'
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
            :class="`font-bold text-2xl duration-300 ${
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
                      class="sidebar-btn inline-block w-full py-2 pl-10 rounded-md hover:bg-[#272B30] focus:outline-none focus:ring-1 focus:ring-zinc-800 focus:bg-[#232428]"
                      :class="`${!is_expanded && 'opacity-0'}`"
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
                          class="sidebar-btn inline-block w-full px-4 py-2 text-smd rounded hover:text-white focus:outline-none focus:ring-0"
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
                  class="relative text-gray-300 hover:text-white focus-within:text-white"
                >
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
                  >
                    <IconSettings />
                  </div>

                  <RouterLink
                    to="/"
                    :class="`inline-block w-full py-2 pl-10 pr-4 text-md rounded hover:bg-[#232428] focus:outline-none focus:ring-1 focus:ring-zinc-800 focus:bg-[#232428] ${
                      !is_expanded && 'scale-0'
                    } duration-300`"
                  >
                    Settings
                  </RouterLink>
                </li>
                <li
                  class="relative text-gray-300 hover:text-white focus-within:text-white"
                >
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
                  >
                    <svg
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.0287 15.0007C11.5806 14.9799 12.0449 15.4104 12.0657 15.9623C12.1127 17.2065 12.1786 18.1145 12.2435 18.7656C12.3074 19.4068 12.6945 19.7926 13.2341 19.8586C13.8703 19.9363 14.7678 20 15.9995 20C17.2312 20 18.1287 19.9363 18.765 19.8586C19.3043 19.7926 19.6916 19.4067 19.7555 18.7653C19.8758 17.5568 19.9995 15.4688 19.9995 12C19.9995 8.53118 19.8758 6.44321 19.7555 5.23468C19.6916 4.59333 19.3043 4.20736 18.765 4.14144C18.1287 4.06366 17.2312 4 15.9995 4C14.7678 4 13.8703 4.06365 13.234 4.14143C12.6945 4.20739 12.3074 4.59318 12.2435 5.23437C12.1786 5.88545 12.1127 6.79354 12.0657 8.03772C12.0449 8.58961 11.5806 9.02012 11.0287 8.99929C10.4768 8.97845 10.0463 8.51417 10.0671 7.96228C10.1153 6.68524 10.1837 5.73543 10.2534 5.03611C10.3998 3.56595 11.4248 2.3477 12.9914 2.15621C13.7206 2.06707 14.7003 2 15.9995 2C17.2987 2 18.2785 2.06707 19.0077 2.15622C20.5743 2.34774 21.5992 3.56655 21.7456 5.03643C21.8745 6.33068 21.9995 8.48847 21.9995 12C21.9995 15.5115 21.8745 17.6693 21.7456 18.9636C21.5992 20.4334 20.5744 21.6523 19.0077 21.8438C18.2785 21.9329 17.2987 22 15.9995 22C14.7003 22 13.7206 21.9329 12.9914 21.8438C11.4248 21.6523 10.3998 20.4341 10.2534 18.9639C10.1837 18.2646 10.1153 17.3148 10.0671 16.0377C10.0463 15.4858 10.4768 15.0215 11.0287 15.0007Z"
                        fill="#EFEFEF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.20711 14.7929C7.59763 15.1834 7.59763 15.8166 7.20711 16.2071C6.81658 16.5976 6.18342 16.5976 5.79289 16.2071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L5.79289 7.79289C6.18342 7.40237 6.81658 7.40237 7.20711 7.79289C7.59763 8.18342 7.59763 8.81658 7.20711 9.20711L5.41421 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13L5.41421 13L7.20711 14.7929Z"
                        fill="#EFEFEF"
                      />
                    </svg>
                  </div>

                  <RouterLink
                    to="/"
                    :class="`inline-block w-full py-2 pl-10 pr-4 text-md rounded hover:bg-[#232428] focus:outline-none focus:ring-1 focus:ring-zinc-800 focus:bg-[#232428] ${
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
