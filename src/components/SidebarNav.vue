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
  { title: "Dashboard", link: "/", icon: IconDashboard },
  {
    title: "Domain Analytics",
    link: "#",
    icon: IconDomainAnalytics,
    submenu: true,
    submenuItem: [
      { title: "Overview", link: "/products" },
      { title: "Organic Search", link: "/products" },
      { title: "Backlinks", link: "/products" },
      { title: "Adverting Research", link: "/products" },
      { title: "Traffic Analytics", link: "/products" },
    ],
  },
  { title: "Keyword Analytics", icon: IconKeywordAnalytics, link: "/products" },
  { title: "Site Audit", icon: IconSiteAudit, link: "/analytics" },
  {
    title: "Sosal Media Tracker",
    icon: IconSosalMediaTracker,
    link: "/schedule",
  },
  { title: "Position Tracker", icon: IconPositionTracker, link: "/payout" },
  { title: "On page Seo", icon: IconOnPageSeo, link: "/statements" },
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
            class="flex items-center justify-center p-0.5 rounded bg-[#232428] group focus:outline-none focus:ring-1 focus:ring-gray-500"
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
                  class="relative flex justify-between text-gray-500 hover:text-white focus-within:text-white"
                >
                  <div class="flex items-center w-full">
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
                    >
                      <component :is="item.icon" />
                    </div>
                    <a
                      :href="item.link"
                      :class="`inline-block w-full py-2 pl-8 pr-4 text-sm rounded hover:bg-[#232428] focus:outline-none focus:ring-1 focus:ring-zinc-800 focus:bg-[#232428] ${
                        !is_expanded && 'scale-0'
                      }`"
                      >{{ item.title }}
                    </a>
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
                      class="flex flex-col pl-2 text-gray-500 border-l border-gray-700 duration-300"
                      v-if="item.submenu"
                      v-show="isSubmenuVisible"
                    >
                      <li
                        v-for="subitem in item.submenuItem"
                        v-bind:key="subitem.title"
                      >
                        <a
                          :href="subitem.link"
                          class="inline-block w-full px-4 py-2 text-sm rounded hover:bg-[#232428] hover:text-white focus:outline-none focus:ring-1 focus:ring-zinc-800 focus:text-white"
                          >{{ subitem.title }}</a
                        >
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
                  class="relative text-gray-500 hover:text-white focus-within:text-white"
                >
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
                  >
                    <svg
                      class="w-5 h-5 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M13.1191 5.61336C13.0508 5.11856 12.6279 4.75 12.1285 4.75H11.8715C11.3721 4.75 10.9492 5.11856 10.8809 5.61336L10.7938 6.24511C10.7382 6.64815 10.4403 6.96897 10.0622 7.11922C10.006 7.14156 9.95021 7.16484 9.89497 7.18905C9.52217 7.3524 9.08438 7.3384 8.75876 7.09419L8.45119 6.86351C8.05307 6.56492 7.49597 6.60451 7.14408 6.9564L6.95641 7.14408C6.60452 7.49597 6.56492 8.05306 6.86351 8.45118L7.09419 8.75876C7.33841 9.08437 7.3524 9.52216 7.18905 9.89497C7.16484 9.95021 7.14156 10.006 7.11922 10.0622C6.96897 10.4403 6.64815 10.7382 6.24511 10.7938L5.61336 10.8809C5.11856 10.9492 4.75 11.372 4.75 11.8715V12.1285C4.75 12.6279 5.11856 13.0508 5.61336 13.1191L6.24511 13.2062C6.64815 13.2618 6.96897 13.5597 7.11922 13.9378C7.14156 13.994 7.16484 14.0498 7.18905 14.105C7.3524 14.4778 7.3384 14.9156 7.09419 15.2412L6.86351 15.5488C6.56492 15.9469 6.60451 16.504 6.9564 16.8559L7.14408 17.0436C7.49597 17.3955 8.05306 17.4351 8.45118 17.1365L8.75876 16.9058C9.08437 16.6616 9.52216 16.6476 9.89496 16.811C9.95021 16.8352 10.006 16.8584 10.0622 16.8808C10.4403 17.031 10.7382 17.3519 10.7938 17.7549L10.8809 18.3866C10.9492 18.8814 11.3721 19.25 11.8715 19.25H12.1285C12.6279 19.25 13.0508 18.8814 13.1191 18.3866L13.2062 17.7549C13.2618 17.3519 13.5597 17.031 13.9378 16.8808C13.994 16.8584 14.0498 16.8352 14.105 16.8109C14.4778 16.6476 14.9156 16.6616 15.2412 16.9058L15.5488 17.1365C15.9469 17.4351 16.504 17.3955 16.8559 17.0436L17.0436 16.8559C17.3955 16.504 17.4351 15.9469 17.1365 15.5488L16.9058 15.2412C16.6616 14.9156 16.6476 14.4778 16.811 14.105C16.8352 14.0498 16.8584 13.994 16.8808 13.9378C17.031 13.5597 17.3519 13.2618 17.7549 13.2062L18.3866 13.1191C18.8814 13.0508 19.25 12.6279 19.25 12.1285V11.8715C19.25 11.3721 18.8814 10.9492 18.3866 10.8809L17.7549 10.7938C17.3519 10.7382 17.031 10.4403 16.8808 10.0622C16.8584 10.006 16.8352 9.95021 16.8109 9.89496C16.6476 9.52216 16.6616 9.08437 16.9058 8.75875L17.1365 8.4512C17.4351 8.05308 17.3955 7.49599 17.0436 7.1441L16.8559 6.95642C16.504 6.60453 15.9469 6.56494 15.5488 6.86353L15.2412 7.09419C14.9156 7.33841 14.4778 7.3524 14.105 7.18905C14.0498 7.16484 13.994 7.14156 13.9378 7.11922C13.5597 6.96897 13.2618 6.64815 13.2062 6.24511L13.1191 5.61336Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M13.25 12C13.25 12.6904 12.6904 13.25 12 13.25C11.3096 13.25 10.75 12.6904 10.75 12C10.75 11.3096 11.3096 10.75 12 10.75C12.6904 10.75 13.25 11.3096 13.25 12Z"
                      ></path>
                    </svg>
                  </div>
                  <a
                    href="#"
                    :class="`inline-block w-full py-2 pl-8 pr-4 text-md rounded hover:bg-[#232428] focus:outline-none focus:ring-1 focus:ring-zinc-800 focus:bg-[#232428] ${
                      !is_expanded && 'scale-0'
                    } duration-300`"
                    >Settings</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
