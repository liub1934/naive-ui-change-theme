import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'

const colorNameReg =
  /^(color|bg|bg-color|border)-(primary|info|success|warning|error)(-(hover|pressed|focus|disabled|[1-9]|10))?$/

const colorNameMap = {
  bg: 'background',
  border: 'border-color',
  'bg-color': 'background-color'
}

export default defineConfig({
  presets: [presetUno()],
  rules: [
    /**
     * color-primary => color: rgb(var(--n-primary-color))
     * color-primary-hover => color: rgb(var(--n-primary-color-hover))
     * bg-primary => background: rgb(var(--n-primary-color))
     * bg-primary-hover => background: rgb(var(--n-primary-color-hover))
     * bg-color-primary => background-color: rgb(var(--n-primary-color))
     */
    [
      colorNameReg,
      ([_, type, color, state]) => ({
        [colorNameMap[type] || type]: `rgba(var(--n-${color}-color${
          state || ''
        }), var(--un-text-opacity, 1))`
      })
    ]
  ]
})
