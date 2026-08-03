<script lang="ts" setup>
// Fetch profile data from Nuxt Content collection
const { data: profile } = await useAsyncData("profile", () => {
  return queryCollection("profile").first()
})

// SEO Meta
if (profile.value) {
  useSeoMeta({
    title: `${profile.value.name} - ${profile.value.title}`,
    description: profile.value.description,
    ogTitle: `${profile.value.name} - ${profile.value.title}`,
    ogDescription: profile.value.description,
    ogImage: profile.value.avatar,
    ogType: "profile",
    twitterCard: "summary_large_image",
    twitterTitle: `${profile.value.name} - ${profile.value.title}`,
    twitterDescription: profile.value.description,
    twitterImage: profile.value.avatar,
  })

  // Structured data for SEO
  useSchemaOrg([
    defineWebSite({
      name: profile.value.name,
      description: profile.value.description,
      url: "https://mirzan.js.org",
    }),
    definePerson({
      name: profile.value.name,
      jobTitle: profile.value.title,
      description: profile.value.description,
      image: profile.value.avatar,
      url: "https://mirzan.js.org",
      sameAs: profile.value.social?.map((s) => s.url) || [],
    }),
  ])
}
</script>

<template>
  <div v-if="profile">
    <!-- Hero Section -->
    <section class="relative text-center pt-2 sm:pt-4 mb-12 sm:mb-16">
      <div class="max-w-5xl mx-auto">
        <div class="flex justify-center mb-6">
          <NuxtImg
            :src="profile.avatar"
            :alt="profile.name"
            width="80"
            height="80"
            format="webp"
            quality="85"
            fetchpriority="high"
            loading="eager"
            class="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover ring-2 ring-zinc-200/50 dark:ring-zinc-700/50"
          />
        </div>

        <div class="space-y-6">
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight">
            {{ profile.name }}
          </h1>
          <p class="text-xl md:text-2xl text-primary font-medium leading-relaxed">
            {{ profile.title }}
          </p>
          <p
            class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {{ profile.tagline }}
          </p>
        </div>

        <!-- Availability Status -->
        <div class="flex justify-center mt-8">
          <div
            class="flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-full"
          >
            <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span class="text-primary text-sm font-medium"
              >Available for new projects</span
            >
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-12 px-4 sm:px-0">
          <UButton to="/contact" size="lg" variant="solid" class="glass-button w-full sm:w-auto justify-center">
            <UIcon name="i-ph-envelope" />
            Get In Touch
          </UButton>

          <UButton to="/projects" size="lg" variant="outline" class="w-full sm:w-auto justify-center">
            <UIcon name="i-ph-folder-open" />
            View My Work
          </UButton>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center gap-4 mt-8 md:mt-8 mb-16 sm:mb-24">
          <UButton
            v-for="social in profile.social"
            :key="social.name"
            :to="social.url"
            external
            variant="ghost"
            size="sm"
          >
            <UIcon
              :name="
                social.name === 'GitHub'
                  ? 'i-ph-github-logo'
                  : 'i-ph-linkedin-logo'
              "
              class="w-5 h-5"
            />
            {{ social.name }}
          </UButton>
        </div>
      </div>
    </section>

    <div class="space-y-30">
      <!-- About Preview -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p
            class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {{ profile.description }}
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <!-- Work Approach -->
          <UCard variant="soft" class="h-full">
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <UIcon name="i-ph-strategy" class="w-6 h-6 text-primary" />
                <h3 class="text-lg font-semibold">My Work Approach</h3>
              </div>
              <ul class="space-y-3">
                <li
                  v-for="(approach, index) in (
                    profile.workApproach || []
                  ).slice(0, 3)"
                  :key="index"
                  class="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                >
                  <UIcon
                    name="i-ph-check"
                    class="w-5 h-5 text-primary mt-1 flex-shrink-0"
                  />
                  <span class="text-base md:text-lg leading-relaxed">
                    {{ approach }}
                  </span>
                </li>
              </ul>
              <UButton to="/about" variant="ghost" size="sm" class="mt-4">
                Learn More About Me
                <UIcon name="i-ph-arrow-right" />
              </UButton>
            </div>
          </UCard>

          <!-- Current Focus -->
          <UCard variant="soft" class="h-full">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <UIcon name="i-ph-target" class="w-6 h-6 text-primary" />
                <h3 class="text-xl font-semibold">Current Focus</h3>
              </div>
              <ul class="space-y-3">
                <li
                  v-for="(focus, index) in (profile.currentFocus || []).slice(
                    0,
                    5,
                  )"
                  :key="index"
                  class="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                >
                  <UIcon
                    name="i-ph-check"
                    class="w-5 h-5 text-primary mt-1 flex-shrink-0"
                  />
                  <span class="text-base md:text-lg leading-relaxed">
                    {{ focus }}
                  </span>
                </li>
              </ul>
              <UButton to="/about" variant="ghost" size="sm" class="mt-4">
                View Professional Journey
                <UIcon name="i-ph-arrow-right" />
              </UButton>
            </div>
          </UCard>
        </div>

        <div class="text-center">
          <UButton to="/about" variant="outline" size="lg" class="w-full sm:w-auto justify-center">
            <UIcon name="i-ph-info" />
            View All Details
          </UButton>
        </div>
      </section>

      <FeaturedProjects />

      <RecentBlogPosts />

      <CallToAction />
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Glass Button Animation */
.glass-button {
  position: relative;
  overflow: hidden;
}

.glass-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.6),
    transparent
  );
  transition: left 0.6s ease;
  z-index: 1;
  pointer-events: none;
}

.glass-button:hover::before {
  left: 100%;
}

.glass-button:hover {
  transform: translateY(-1px);
  transition: transform 0.2s ease;
}

/* Shimmer animation that runs continuously */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.glass-button::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    transparent 40%,
    rgba(255, 255, 255, 0.4) 50%,
    transparent 60%
  );
  transform: translateX(-100%);
  animation: shimmer 4s ease-in-out infinite;
  z-index: 1;
  pointer-events: none;
}

/* Ensure button content is above the effects */
.glass-button :deep(*) {
  position: relative;
  z-index: 2;
}
</style>
