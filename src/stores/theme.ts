import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { getThemeOverrides, type ThemeConfig } from '@/utils/theme'
import { darkTheme } from 'naive-ui'
import { useColorMode, useCycleList, type BasicColorSchema } from '@vueuse/core'

export const useThemeStore = defineStore('theme', () => {
  /** 默认模式，一般设置为auto跟随系统 */
  const defaultMode = ref<BasicColorSchema>('auto')
  /** 模式列表 */
  const modeList = ref<BasicColorSchema[]>(['dark', 'light', 'auto'])

  const colorMode = useColorMode({
    initialValue: defaultMode.value,
    emitAuto: true
  })
  const { state, next } = useCycleList(modeList, {
    initialValue: colorMode
  })
  watch(
    state,
    () => {
      if (!modeList.value.includes(state.value)) {
        // 如果不在modeList里面，就设置成默认的
        state.value = defaultMode.value
      }
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
