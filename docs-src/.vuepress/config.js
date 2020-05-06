module.exports = {
  base: '/lw-chart/docs/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'lw-chart',
      description: '一个由canvas实现的轻量级图表'
    },
    '/en/': {
      lang: 'en-US',
      title: 'lw-chart',
      description: 'A lightweight chart implemented by canvas'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/imgs/lw-chart.png' }]
  ],
  themeConfig: {
    sidebar: 'auto',
    smoothScroll: true,
    logo: '/imgs/lw-chart.png',
    locales: {
      '/': {
        sidebar: 'auto',
        selectText: '选择语言',
        label: '简体中文',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        sidebar: {
          '/config/': [
            '',
            'axis'
          ]
        },
        nav: [
          {
            text: '快速上手',
            link: '/guide/'
          },
          {
            text: '配置',
            link: '/config/'
          },
          {
            text: 'Github',
            link: 'https://www.github.com/ad-feiben/lw-chart'
          }
        ]
      },
      '/en/': {
        sidebar: 'auto',
        selectText: 'Languages',
        label: 'English',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        sidebar: {
          '/en/config/': [
            '',
            'axis'
          ]
        },
        nav: [
          {
            text: 'Guide',
            link: '/en/guide/'
          },
          {
            text: 'Config',
            link: '/en/config/'
          },
          {
            text: 'Github',
            link: 'https://www.github.com/ad-feiben/lw-chart'
          }
        ]
      }
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      'run',
      {
        jsLabs: ['https://www.fedevelop.cn/lw-chart/dist/Area.js'],
        // jsLabs: ['http://localhost:8081/dist/Area.js'],
      }
    ]
  ],
};
