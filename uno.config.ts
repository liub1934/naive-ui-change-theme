import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'

const textBgReg =
  /^(text|bg)-(primary|info|success|warning|error)(-(hover|pressed|focus|disabled|[1-9]|10))?$/

export default defineConfig({
  presets: [presetUno()],
  rules: [
    /**
     * text-primary => color: rgb(var(--n-primary-color))
     * text-primary-hover => color: rgb(var(--n-primary-color-hover))
     * bg-primary => background: rgb(var(--n-primary-color))
     * bg-primary-hover => background: rgb(var(--n-primary-color-hover))
     */
    [
      textBgReg,
      ([_, type, color, state]) => ({
        [type === 'text'
          ? 'color'
          : 'background']: `rgba(var(--n-${color}-color${
          state || ''
        }), var(--un-text-opacity, 1))`
      })
    ]
  ]
})
