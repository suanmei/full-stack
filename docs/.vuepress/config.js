module.exports = {
  title: '全栈入门日记',
  description: '全栈入门日记 | node | koa2 | mongodb | React | SSR | Next.js | Markdown | Hightlight',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  base: '/full-stack/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: 'suanmei/full-stack',
    repoLabel: 'Github',
    editLinks: true,
    editLinkText: '发现错误？想参与编辑？ 在 GitHub 上编辑此页！',
    nav: [
      { text: 'Blog', link: 'https://suanmei.github.io' },
    ],
    lastUpdated: '上次更新',
    serviceWorker: {
      updatePopup: { 
         message: "文章有新的内容", 
         buttonText: "刷新" 
      }
    },
    sidebar: [
      '/',
      {
        title: 'React SSR',
        collapsable: false,
        children: [
          'create-react-app/react-init.md'
        ]
      }
    ]
  }
}
