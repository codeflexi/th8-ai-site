<template>
  <div class="min-h-screen flex flex-col">
    <header
      class="fixed top-0 inset-x-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur"
    >
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4"
      >
        <div class="flex items-center gap-2">
          <div
            class="h-9 w-9 rounded-2xl bg-red-600 flex items-center justify-center text-xs font-semibold tracking-wider text-white shadow-sm"
          >
            TH8
          </div>
          <div class="flex flex-col">
            <span
              class="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600"
            >
              TH8.AI
            </span>
            <span class="text-[11px] text-slate-500">
              Thailand-First Agentic AI & Workflow
            </span>
          </div>
        </div>

        <nav
          class="hidden md:flex items-center gap-6 text-[13px] font-medium text-slate-600"
        >
          <RouterLink
            :to="{ name: 'home' }"
            class="hover:text-red-600 transition-colors"
            :class="{ 'text-red-600': $route.name === 'home' }"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/#about"
            class="hover:text-red-600 transition-colors hidden lg:inline"
          >
            About
          </RouterLink>
          <RouterLink
            to="/#what-we-do"
            class="hover:text-red-600 transition-colors hidden lg:inline"
          >
            What we do
          </RouterLink>
          <RouterLink
            :to="{ name: 'logistics' }"
            class="hover:text-red-600 transition-colors"
            :class="{ 'text-red-600': $route.name === 'logistics' }"
          >
            Logistics Suite
          </RouterLink>
          <RouterLink
            :to="{ name: 'case-studies' }"
            class="hover:text-red-600 transition-colors"
            :class="{ 'text-red-600': $route.name === 'case-studies' }"
          >
            Case Studies
          </RouterLink>
          <RouterLink
            to="/#contact"
            class="hover:text-red-600 transition-colors hidden lg:inline"
          >
            Contact
          </RouterLink>
        </nav>

        <RouterLink
          to="/#contact"
          class="rounded-full bg-red-600 text-white text-[11px] sm:text-xs font-medium px-4 py-1.5 shadow-sm hover:bg-red-700 transition-colors"
        >
          นัดคุย Use Case ฟรี
        </RouterLink>
      </div>
    </header>

    <main class="flex-1 pt-16">
      <RouterView />
    </main>

    <footer class="border-t border-slate-200 bg-white">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3"
      >
        <p class="text-[11px] text-slate-500">
          © TH8.AI — Thailand-First Agentic AI & Workflow Automation.
        </p>
        <p class="text-[11px] text-slate-500">
          Built on real-world projects · Focused on practical impact, not hype.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
