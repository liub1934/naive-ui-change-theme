<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-element>
      <n-layout has-sider style="height: 100vh">
        <n-layout-sider content-style="padding: 24px;">
          <n-menu
            default-value="hear-the-wind-sing"
            :options="menuOptions"
            :default-expanded-keys="defaultExpandedKeys"
          />
        </n-layout-sider>
        <n-layout>
          <n-layout-header bordered>
            <n-row style="align-items: center">
              <n-col :span="20">
                <n-row gutter="12">
                  <n-form inline>
                    <n-col :span="4">
                      <n-form-item label="Primary Color">
                        <n-color-picker
                          v-model:value="themeConfig.primary"
                          :show-alpha="false"
                        />
                      </n-form-item>
                    </n-col>
                    <n-col :span="4">
                      <n-form-item label="Info Color">
                        <n-color-picker
                          v-model:value="themeConfig.info"
                          :show-alpha="false"
                        />
                      </n-form-item>
                    </n-col>
                    <n-col :span="4">
                      <n-form-item label="Success Color">
                        <n-color-picker
                          v-model:value="themeConfig.success"
                          :show-alpha="false"
                        />
                      </n-form-item>
                    </n-col>
                    <n-col :span="4">
                      <n-form-item label="Warning Color">
                        <n-color-picker
                          v-model:value="themeConfig.warning"
                          :show-alpha="false"
                        />
                      </n-form-item>
                    </n-col>
                    <n-col :span="4">
                      <n-form-item label="Error Color">
                        <n-color-picker
                          v-model:value="themeConfig.error"
                          :show-alpha="false"
                        />
                      </n-form-item>
                    </n-col>
                  </n-form>
                </n-row>
              </n-col>
              <n-col :span="4">
                <n-space>
                  <a
                    href="https://github.com/liub1934/naive-ui-change-theme"
                    target="_blank"
                  >
                    <n-tooltip trigger="hover" placement="left">
                      <template #trigger>
                        <n-button>
                          <n-icon>
                            <logo-github />
                          </n-icon>
                        </n-button>
                      </template>
                      <span>查看源码</span>
                    </n-tooltip>
                  </a>

                  <n-button @click="themeStore.toggleDarkMode">
                    <template #icon>
                      <n-icon>
                        <moon-outline v-if="modeState === 'dark'" />
                        <sunny-outline v-if="modeState === 'light'" />
                        <contrast-outline v-if="modeState === 'auto'" />
                      </n-icon>
                    </template>
                    <span v-if="modeState === 'dark'">深色</span>
                    <span v-if="modeState === 'light'">浅色</span>
                    <span v-if="modeState === 'auto'">跟随系统</span>
                  </n-button>
                </n-space>
              </n-col>
            </n-row>
          </n-layout-header>
          <n-layout-content
            position="absolute"
            content-style="padding: 24px;"
            style="top: 85px"
          >
            <n-space>
              <div class="custom-color-1">class自己定义颜色</div>
              <div class="custom-color-2">class自己定义颜色</div>
              <div class="custom-color-3">class自己定义颜色 透明度50%</div>
            </n-space>
            <n-divider />
            <n-space>
              <div class="text-primary">Primary Color</div>
              <div class="text-primary text-opacity-50">
                Primary Color 透明度50%
              </div>
              <div class="text-primary-1">Primary Color1</div>
              <div class="text-primary-2">Primary Color2</div>
              <div class="text-primary-3">Primary Color3</div>
              <div class="text-primary-4">Primary Color4</div>
              <div class="text-primary-5">Primary Color5</div>
              <div class="text-primary-6">Primary Color6</div>
              <div class="text-primary-7">Primary Color7</div>
              <div class="text-primary-8">Primary Color8</div>
              <div class="text-primary-9">Primary Color9</div>
              <div class="text-primary-10">Primary Color10</div>
            </n-space>
            <n-divider />
            <n-space>
              <div class="bg-primary">Primary Color</div>
              <div class="bg-primary color-opacity-50">
                Primary Color 透明度50%
              </div>
              <div class="bg-primary-1">Primary Color1</div>
              <div class="bg-primary-2">Primary Color2</div>
              <div class="bg-primary-3">Primary Color3</div>
              <div class="bg-primary-4">Primary Color4</div>
              <div class="bg-primary-5">Primary Color5</div>
              <div class="bg-primary-6">Primary Color6</div>
              <div class="bg-primary-7">Primary Color7</div>
              <div class="bg-primary-8">Primary Color8</div>
              <div class="bg-primary-9">Primary Color9</div>
              <div class="bg-primary-10">Primary Color10</div>
            </n-space>
            <n-divider />
            <n-space>
              <div class="text-info">Info Color</div>
              <div class="text-info text-opacity-50">Info Color 透明度50%</div>
              <div class="text-info-1">Info Color1</div>
              <div class="text-info-2">Info Color2</div>
              <div class="text-info-3">Info Color3</div>
              <div class="text-info-4">Info Color4</div>
              <div class="text-info-5">Info Color5</div>
              <div class="text-info-6">Info Color6</div>
              <div class="text-info-7">Info Color7</div>
              <div class="text-info-8">Info Color8</div>
              <div class="text-info-9">Info Color9</div>
              <div class="text-info-10">Info Color10</div>
            </n-space>
            <n-divider />
            <n-space>
              <div class="bg-info">Info Color</div>
              <div class="bg-info color-opacity-50">Info Color 透明度50%</div>
              <div class="bg-info-1">Info Color1</div>
              <div class="bg-info-2">Info Color2</div>
              <div class="bg-info-3">Info Color3</div>
              <div class="bg-info-4">Info Color4</div>
              <div class="bg-info-5">Info Color5</div>
              <div class="bg-info-6">Info Color6</div>
              <div class="bg-info-7">Info Color7</div>
              <div class="bg-info-8">Info Color8</div>
              <div class="bg-info-9">Info Color9</div>
              <div class="bg-info-10">Info Color10</div>
            </n-space>
            <n-divider />

            <n-space>
              <div class="text-success">Success Color</div>
              <div class="text-success text-opacity-50">
                Success Color 透明度50%
              </div>
              <div class="text-success-1">Success Color1</div>
              <div class="text-success-2">Success Color2</div>
              <div class="text-success-3">Success Color3</div>
              <div class="text-success-4">Success Color4</div>
              <div class="text-success-5">Success Color5</div>
              <div class="text-success-6">Success Color6</div>
              <div class="text-success-7">Success Color7</div>
              <div class="text-success-8">Success Color8</div>
              <div class="text-success-9">Success Color9</div>
              <div class="text-success-10">Success Color10</div>
            </n-space>
            <n-divider />
            <n-space>
              <div class="bg-success">Success Color</div>
              <div class="bg-success color-opacity-50">
                Success Color 透明度50%
              </div>
              <div class="bg-success-1">Success Color1</div>
              <div class="bg-success-2">Success Color2</div>
              <div class="bg-success-3">Success Color3</div>
              <div class="bg-success-4">Success Color4</div>
              <div class="bg-success-5">Success Color5</div>
              <div class="bg-success-6">Success Color6</div>
              <div class="bg-success-7">Success Color7</div>
              <div class="bg-success-8">Success Color8</div>
              <div class="bg-success-9">Success Color9</div>
              <div class="bg-success-10">Success Color10</div>
            </n-space>
            <n-divider />

            <n-space>
              <div class="text-warning">Warning Color</div>
              <div class="text-warning text-opacity-50">
                Warning Color 透明度50%
              </div>
              <div class="text-warning-1">Warning Color1</div>
              <div class="text-warning-2">Warning Color2</div>
              <div class="text-warning-3">Warning Color3</div>
              <div class="text-warning-4">Warning Color4</div>
              <div class="text-warning-5">Warning Color5</div>
              <div class="text-warning-6">Warning Color6</div>
              <div class="text-warning-7">Warning Color7</div>
              <div class="text-warning-8">Warning Color8</div>
              <div class="text-warning-9">Warning Color9</div>
              <div class="text-warning-10">Warning Color10</div>
            </n-space>
            <n-divider />
            <n-space>
              <div class="bg-warning">Warning Color</div>
              <div class="bg-warning color-opacity-50">
                Warning Color 透明度50%
              </div>
              <div class="bg-warning-1">Warning Color1</div>
              <div class="bg-warning-2">Warning Color2</div>
              <div class="bg-warning-3">Warning Color3</div>
              <div class="bg-warning-4">Warning Color4</div>
              <div class="bg-warning-5">Warning Color5</div>
              <div class="bg-warning-6">Warning Color6</div>
              <div class="bg-warning-7">Warning Color7</div>
              <div class="bg-warning-8">Warning Color8</div>
              <div class="bg-warning-9">Warning Color9</div>
              <div class="bg-warning-10">Warning Color10</div>
            </n-space>
            <n-divider />

            <n-space>
              <div class="text-error">Error Color</div>
              <div class="text-error text-opacity-50">
                Error Color 透明度50%
              </div>
              <div class="text-error-1">Error Color1</div>
              <div class="text-error-2">Error Color2</div>
              <div class="text-error-3">Error Color3</div>
              <div class="text-error-4">Error Color4</div>
              <div class="text-error-5">Error Color5</div>
              <div class="text-error-6">Error Color6</div>
              <div class="text-error-7">Error Color7</div>
              <div class="text-error-8">Error Color8</div>
              <div class="text-error-9">Error Color9</div>
              <div class="text-error-10">Error Color10</div>
            </n-space>
            <n-divider />
            <n-space>
              <div class="bg-error">Error Color</div>
              <div class="bg-warning color-opacity-50">
                Error Color 透明度50%
              </div>
              <div class="bg-error-1">Error Color1</div>
              <div class="bg-error-2">Error Color2</div>
              <div class="bg-error-3">Error Color3</div>
              <div class="bg-error-4">Error Color4</div>
              <div class="bg-error-5">Error Color5</div>
              <div class="bg-error-6">Error Color6</div>
              <div class="bg-error-7">Error Color7</div>
              <div class="bg-error-8">Error Color8</div>
              <div class="bg-error-9">Error Color9</div>
              <div class="bg-error-10">Error Color10</div>
            </n-space>
            <n-divider />

            <n-space>
              <n-button>Default</n-button>
              <n-button type="tertiary"> Tertiary </n-button>
              <n-button type="primary"> Primary </n-button>
              <n-button type="primary" disabled> Primary </n-button>
              <n-button type="info"> Info </n-button>
              <n-button type="info" disabled> Info </n-button>
              <n-button type="success"> Success </n-button>
              <n-button type="success" disabled> Success </n-button>
              <n-button type="warning"> Warning </n-button>
              <n-button type="warning" disabled> Warning </n-button>
              <n-button type="error"> Error </n-button>
              <n-button type="error" disabled> Error </n-button>
            </n-space>
            <n-divider />
            <n-space>
              <n-tag> liubing.me </n-tag>
              <n-tag type="success"> 不该 </n-tag>
              <n-tag type="warning"> 超人不会飞 </n-tag>
              <n-tag type="error"> 手写的从前 </n-tag>
              <n-tag type="info"> 哪里都是你 </n-tag>
            </n-space>
            <n-divider />
            <n-checkbox-group :default-value="['Beijing', 'Shanghai']">
              <n-space item-style="display: flex;">
                <n-checkbox value="Beijing" label="北京" />
                <n-checkbox value="Shanghai" label="上海" disabled />
                <n-checkbox value="Guangzhou" label="广州" />
                <n-checkbox value="Shenzhen" label="深圳" />
              </n-space>
            </n-checkbox-group>
            <n-divider />
            <n-space>
              <n-radio value="1" default-checked> liubing.me </n-radio>
              <n-radio value="1" default-checked disabled> liubing.me </n-radio>
              <n-switch :default-value="true" />
              <n-switch :default-value="true" disabled />
            </n-space>
            <n-divider />
            <n-space vertical :size="12">
              <n-alert title="Default 类型" type="default">
                <template #icon>
                  <n-icon>
                    <ios-airplane />
                  </n-icon>
                </template>
                Gee it's good to be back home
              </n-alert>
              <n-alert title="Info 类型" type="info">
                Gee it's good to be back home
              </n-alert>
              <n-alert title="Success 类型" type="success">
                Leave it till tomorrow to unpack my case
              </n-alert>
              <n-alert title="Warning 类型" type="warning">
                Honey disconnect the phone
              </n-alert>
              <n-alert title="Error 类型" type="error">
                I'm back in the U.S.S.R.
              </n-alert>
            </n-space>
            <n-divider />
            <n-pagination :page-count="100" />
            <n-divider />
            <n-tabs type="line" animated>
              <n-tab-pane name="oasis" tab="Oasis"> liubing.me </n-tab-pane>
              <n-tab-pane name="the beatles" tab="the Beatles">
                Hey Jude
              </n-tab-pane>
              <n-tab-pane name="jay chou" tab="周杰伦"> 七里香 </n-tab-pane>
            </n-tabs>
            <n-divider />
            <n-date-picker type="date" />
            <n-divider />
            <n-timeline horizontal>
              <n-timeline-item content="啊" />
              <n-timeline-item
                type="success"
                title="成功"
                content="哪里成功"
                time="2018-04-03 20:46"
              />
              <n-timeline-item
                type="error"
                content="哪里失败"
                time="2018-04-03 20:46"
              />
              <n-timeline-item
                type="warning"
                title="警告"
                content="哪里警告"
                time="2018-04-03 20:46"
              />
              <n-timeline-item
                type="info"
                title="信息"
                content="是的"
                time="2018-04-03 20:46"
              />
            </n-timeline>
            <n-divider />
            <n-space :size="24" align="center">
              <n-badge dot type="error">
                <n-avatar />
              </n-badge>
              <n-badge dot type="info">
                <n-avatar />
              </n-badge>
              <n-badge dot type="success">
                <n-avatar />
              </n-badge>
              <n-badge dot type="warning">
                <n-avatar />
              </n-badge>
            </n-space>
            <n-divider />
          </n-layout-content>
        </n-layout>
      </n-layout>
    </n-element>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  BookOutline,
  PersonOutline,
  WineOutline,
  MoonOutline,
  SunnyOutline,
  ContrastOutline,
  LogoGithub
} from '@vicons/ionicons5'
import { h, type Component } from 'vue'

const themeStore = useThemeStore()
const { theme, themeConfig, themeOverrides, modeState } =
  storeToRefs(themeStore)

const defaultExpandedKeys = ['dance-dance-dance', 'food', 'beverage']
const menuOptions: MenuOption[] = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookOutline)
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookOutline),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    icon: renderIcon(BookOutline),
    disabled: true
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon(BookOutline),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon(PersonOutline)
          },
          {
            label: '羊男',
            key: 'sheep-man',
            icon: renderIcon(PersonOutline)
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon(WineOutline),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
</script>

<style>
.custom-color-1 {
  color: rgb(var(--n-primary-color));
}
.custom-color-2 {
  background: rgb(var(--n-warning-color));
}
.custom-color-3 {
  background: rgba(var(--n-info-color), 0.5);
}
</style>
