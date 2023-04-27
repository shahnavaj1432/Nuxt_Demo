import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "admin-layout" | "default"
declare module "/home/error/Documents/GitHub/BAAS/nuxt_polynotes/poly/Nuxt_Demo/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}