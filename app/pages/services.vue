<script setup lang="ts">
definePageMeta({
  title: "Services - Mohammed Mirzan",
  description:
    "Professional AI development services including full-stack development, consulting, and technical leadership.",
})

// Fetch services data from Nuxt Content collection
const { data: servicesData } = await useAsyncData("services", () => {
  return queryCollection("services").first()
})

useSeoMeta({
  title: "Services - Mohammed Mirzan",
  description:
    "Professional AI & Data development services including data engineering, analytics, machine learning, and consulting.",
  ogTitle: "Services - Mohammed Mirzan",
  ogDescription:
    "Professional AI & Data development services including data engineering, analytics, machine learning, and consulting.",
  twitterCard: "summary_large_image",
  twitterTitle: "Services - Mohammed Mirzan",
  twitterDescription:
    "Professional AI & Data development services including data engineering, analytics, machine learning, and consulting.",
})

useSchemaOrg([
  defineWebPage({
    name: "Services - Mohammed Mirzan",
    description:
      "Professional AI & Data development services including data engineering, analytics, machine learning, and consulting.",
  }),
])
</script>

<template>
  <div>
    <div class="space-y-24">
      <!-- Page Header -->
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Services</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Professional AI development services to help bring your ideas to life
        </p>
      </div>

      <!-- Process -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">How I Work</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A proven process that ensures successful project delivery
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="step in servicesData?.process"
            :key="step.step"
            class="text-center"
          >
            <div class="relative mb-6">
              <div
                class="w-16 h-16 bg-primary-100 dark:bg-primary-900 flex items-center justify-center mx-auto mb-4"
              >
                <UIcon :name="step.icon" class="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 class="text-lg font-semibold mb-2">
              {{ step.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              {{ step.description }}
            </p>
          </div>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="space-y-8">
        <h2 class="text-3xl font-bold text-center mb-8">What I Offer</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center">
          I provide a range of data and AI services tailored to meet your
          specific needs, from data engineering and analytics to machine learning
          and AI automation.
        </p>

        <div class="grid gap-8 md:grid-cols-2">
          <UCard
            v-for="service in servicesData?.services"
            :key="service.id"
            class="h-full"
            variant="soft"
          >
            <div class="space-y-6">
              <!-- Service Header -->
              <div class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 flex items-center justify-center"
                >
                  <UIcon :name="service.icon" class="w-6 h-6 text-primary" />
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold mb-2">
                    {{ service.title }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ service.description }}
                  </p>
                </div>
              </div>

              <!-- Features -->
              <div>
                <h4 class="font-semibold mb-3">Includes:</h4>
                <ul class="space-y-2">
                  <li
                    v-for="feature in service.features"
                    :key="feature"
                    class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <UIcon
                      name="i-ph-check"
                      class="w-4 h-4 text-primary flex-shrink-0"
                    />
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <!-- Service Details -->
              <div
                class="flex flex-wrap gap-4 pt-4 border-t border-neutral-200/50 dark:border-neutral-700/50"
              >
                <div class="text-sm">
                  <span class="font-medium">Timeline:</span>
                  <span class="text-gray-600 dark:text-gray-400 ml-1">{{
                    service.timeline
                  }}</span>
                </div>
                <div class="text-sm">
                  <span class="font-medium">Best for:</span>
                  <span class="text-gray-600 dark:text-gray-400 ml-1">{{
                    service.suitable
                  }}</span>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="space-y-8 text-center px-4 sm:px-0">
        <div>
          <h2 class="text-2xl sm:text-3xl font-bold mb-4">Let's Discuss Your Project</h2>
          <p class="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Every project is unique. Reach out to discuss your specific needs, timeline, and goals. I'll provide you with a custom proposal tailored to your requirements.
          </p>
        </div>

        <div class="flex justify-center pt-6 px-4 sm:px-0">
          <UButton
            to="/contact"
            size="lg"
            variant="solid"
            class="w-full sm:w-auto font-semibold justify-center"
          >
            <UIcon name="i-ph-envelope" />
            Get In Touch - Let's Talk
          </UButton>
        </div>
      </section>

    </div>
  </div>
</template>
