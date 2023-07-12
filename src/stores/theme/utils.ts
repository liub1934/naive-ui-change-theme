import { generate } from '@ant-design/colors'
import { type GlobalThemeOverrides, commonDark, commonLight } from 'naive-ui'

export type ColorType = 'primary' | 'info' | 'success' | 'warning' | 'error'
export type ColorTypeCase = 'Primary' | 'Info' | 'Success' | 'Warning' | 'Error'
export type ColorScene = '' | 'Suppl' | 'Hover' | 'Pressed'
export type ButtonColorScene = '' | 'Hover' | 'Pressed' | 'Focus' | 'Disabled'
export type ColorKey = `${ColorType}Color${ColorScene}`
export type ButtonColorKey = `textColor${ButtonColorScene}${ColorTypeCase}`
export type ThemeColor = Partial<Record<ColorKey, string>>
export type ButtonThemeColor = Partial<Record<ColorKey, string>>
export type ThemeConfig = {
  [key in ColorType]?: string
}

export interface ColorAction {
  scene: ColorScene
  handler: (color: string) => string
}

/**
 * 首字母大写
 *
 * @param {ColorType} str "primary" | "info" | "success" | "warning" | "error"
 * @return {ColorTypeCase} "Primary" | "Info" | "Success" | "Warning" | "Error"
 */
function capitalCase(str: ColorType): ColorTypeCase {
  return (str.charAt(0).toUpperCase() + str.slice(1)) as ColorTypeCase
}

/**
 * 根据颜色获取色系
 *
 * @param {string} color #1890ff
 * @param {boolean} darkMode 暗黑模式
 * @return {string[]} ['#E6F7FF', '#BAE7FF', '#91D5FF', ''#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']
 */
function getGenerateColors(color: string, darkMode: boolean): string[] {
  return darkMode
    ? generate(color, {
        theme: 'dark',
        backgroundColor: commonDark.bodyColor
      })
    : generate(color)
}

/**
 * 获取其他组件颜色，主要用于适配暗色下文字颜色，该方法可以按需取舍
 *
 * @desc 比如暗黑模式下Primary按钮文字、Checkbox勾号默认都是黑色的，所以需要特殊处理变成白色,可能会有遗漏，需要的话按需补充
 * @param {ThemeConfig} config store themeConfig
 * @param {boolean} darkMode 暗黑模式
 * @return {GlobalThemeOverrides}
 */
function getOtherColor(
  config: ThemeConfig,
  darkMode: boolean
): GlobalThemeOverrides {
  const otherColor: GlobalThemeOverrides = {
    Button: {},
    Checkbox: {
      checkMarkColor: getTextColor(darkMode)
    },
    DatePicker: {
      itemTextColorActive: getTextColor(darkMode)
    },
    Calendar: {
      dateTextColorCurrent: getTextColor(darkMode)
    },
    Switch: {
      buttonColor: getTextColor(darkMode)
    }
  }
  const keys = Object.keys(config) as ColorType[]
  const scenes: ButtonColorScene[] = [
    '',
    'Hover',
    'Pressed',
    'Focus',
    'Disabled'
  ]
  keys.forEach((key) => {
    scenes.forEach((scene) => {
      const colorKey = `textColor${scene}${capitalCase(key)}` as ButtonColorKey
      otherColor.Button![colorKey] = getTextColor(darkMode)
    })
  })
  return otherColor
}

/**
 * 获取主题颜色
 *
 * @param {ThemeConfig} config store themeConfig
 * @param {boolean} darkMode 暗黑模式
 * @return {ThemeColor}
 */
export function getThemeColors(
  config: ThemeConfig,
  darkMode: boolean
): ThemeColor {
  const themeColor: ThemeColor = {}
  const keys = Object.keys(config) as ColorType[]
  const colorActions: ColorAction[] = [
    { scene: '', handler: (color) => getGenerateColors(color, darkMode)[5] },
    {
      scene: 'Hover',
      handler: (color) => getGenerateColors(color, darkMode)[4]
    },
    {
      scene: 'Suppl',
      handler: (color) => getGenerateColors(color, darkMode)[4]
    },
    {
      scene: 'Pressed',
      handler: (color) => getGenerateColors(color, darkMode)[6]
    }
  ]
  keys.forEach((key) => {
    colorActions.forEach((action) => {
      const color = action.handler(config[key]!)
      const colorKey = `${key}Color${action.scene}` as ColorKey
      themeColor[colorKey] = color
    })
  })
  return themeColor
}

/**
 * 获取文字颜色，主要用于适配暗黑模式文字颜色
 *
 * @param {boolean} darkMode 暗黑模式
 * @return {string}
 */
function getTextColor(darkMode: boolean): string {
  return darkMode ? commonDark.textColor2 : commonLight.baseColor
}

/**
 * 获取动态主题ThemeOverrides
 *
 * @param {ThemeConfig} config store themeConfig
 * @param {boolean} darkMode 暗黑模式
 * @return {GlobalThemeOverrides}
 */
export function getThemeOverrides(
  config: ThemeConfig,
  darkMode: boolean
): GlobalThemeOverrides {
  const themeColors = getThemeColors(config, darkMode)
  return {
    common: {
      ...themeColors
    },
    ...getOtherColor(config, darkMode)
  }
}
