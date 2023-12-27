import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'

function generateColorCombinations(): Record<string, string> {
  const colorTypes = ['primary', 'info', 'success', 'warning', 'error']
  const colorScenes = ['hover', 'pressed', 'focus', 'disabled']
  const result: Record<string, string> = {}
  for (const type of colorTypes) {
    result[type] = `rgba(var(--n-${type}-color))`
    for (let i = 1; i <= 10; i++) {
      result[`${type}-${i}`] = `rgba(var(--n-${type}-color-${i}))`
    }
    for (const scene of colorScenes) {
      result[`${type}-${scene}`] = `rgba(var(--n-${type}-color-${scene}))`
    }
  }
  return result
}
console.log(generateColorCombinations())
export default defineConfig({
  presets: [presetUno()],
  theme: {
    colors: {
      // 生成如下颜色数据
      // 'primary': 'rgba(var(--n-primary-color))'
      // 'primary-1': 'rgba(var(--n-primary-color-1))',
      // 'primary-hover': 'rgba(var(--n-primary-color-hover))',
      // ...其他
      ...generateColorCombinations()
    }
  }
})
