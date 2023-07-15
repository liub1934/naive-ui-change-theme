import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { getThemeOverrides, type ThemeConfig } from '@/utils/theme'
import { darkTheme } from 'naive-ui'
import { useColorMode, useCycleList, type BasicColorSchema } from '@vueuse/core'

export const useThemeStore = defineStore('theme', () => {
  const colorMode = useColorMode({
    emitAuto: true
  })
  const { state, next } = useCycleList(['dark', 'light', 'auto'], {
    initialValue: colorMode
  })
  watch(
    state,
    () => {
      colorMode.value = state.value as BasicColorSchema
    },
    { immediate: true }
  )

  /** 暗黑模式 */
  const darkMode = computed(() => {
    const { system, store } = colorMode
    if (state.value === 'auto') {
      return system.value === 'dark'
    }
    return store.value === 'dark'
  })

  /** 主题配置 */
  const themeConfig = ref<ThemeConfig>({
    primary: '#18a058',
    info: '#2080f0',
    success: '#18a058',
    warning: '#f0a020',
    error: '#d03050'
  })

  /** 主题 */
  const theme = computed(() => (darkMode.value ? darkTheme : null))

  /** 主题theme-overrides */
  const themeOverrides = computed(() => {
    return getThemeOverrides(themeConfig.value, darkMode.value)
  })

  /** 暗黑模式切换 */
  function toggleDarkMode() {
    next()
  }

  /** 手动设置主题 */
  function setThemeConfig(config: ThemeConfig) {
    themeConfig.value = {
      ...themeConfig.value,
      ...config
    }
  }

  return {
    darkMode,
    themeConfig,
    theme,
    themeOverrides,
    modeState: state,
    toggleDarkMode,
    setThemeConfig
  }
})
