import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/error/Documents/GitHub/BAAS/nuxt_polynotes/poly/Nuxt_Demo/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}