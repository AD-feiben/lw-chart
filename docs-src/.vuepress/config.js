module.exports = {
  base: '/lw-chart/docs/',
  locales: {
    '/': {
      selectText: '选择语言',
      label: '简体中文',
      lang: 'zh-CN',
      title: 'lw-chart',
      description: '一个由canvas实现的轻量级图表',
      serviceWorker: {
        updatePopup: {
          message: "发现新内容可用.",
          buttonText: "刷新"
        }
      },
      nav: [
        {
          text: '首页',
          link: '/'
        },
        {
          text: '快速上手',
          link: '/guide/'
        }
      ]
    },
    'en': {
      selectText: 'Languages',
      label: 'English',
      lang: 'en-US',
      title: 'lw-chart',
      description: 'A lightweight chart implemented by canvas',
      serviceWorker: {
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      },
      nav: [
        {
          text: 'Home',
          link: '/en/'
        },
        {
          text: 'Guide',
          link: '/en/guide/'
        }
      ]
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/imgs/lw-chart.png' }]
  ],
  themeConfig: {
    sidebar: 'auto',
    logo: '/imgs/lw-chart.png',
  },
  markdown: {
    lineNumbers: true
  },
  plugins: {
    run: {
      jsLabs: ['https://www.fedevelop.cn/lw-chart/dist/Area.js'],
    }
  },
};
