<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            
            <h2 class="text-base font-semibold leading-7 text-indigo-600">Welcome</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">To Polytechnic Notes!</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">We are excited to have you here and hope that you find our platform to be a valuable resource for your educational journey. Our goal is to provide high-quality, comprehensive notes and study materials for students pursuing technical and vocational education.</p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <img src="https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg?w=996&t=st=1682586133~exp=1682586733~hmac=6720f6ee1857172a386fb9fdac4fd438046051c919370b8fbb4fc9b8ea27934a" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Comprehensive coverage',
    description:
      'Polytechnic Notes covers a wide range of technical and vocational subjects, providing detailed and up-to-date notes on topics such as engineering, computer science, business, and more.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Easy to understand',
    description: 'Our notes are written in a way that is easy to understand, with clear explanations and examples that help students grasp complex concepts.',
    icon: LockClosedIcon,
  },
  {
    name: 'Saves time',
    description: 'Polytechnic Notes can save students time by providing a concise summary of important concepts covered in class or in textbooks, ',
    icon: ServerIcon,
  },
]
</script>