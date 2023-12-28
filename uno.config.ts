import { UserConfig, defineConfig } from 'unocss'
import presetUno, { Theme } from '@unocss/preset-uno'
import { generateColorCombinations } from './build/unocss'

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
}) as UserConfig<Theme>
