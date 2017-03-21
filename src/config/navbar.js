export default {
  navbarList: [
    {
      id: 1,
      name: '数据统计',
      path: '/statistic-data',
      children: [
        {
          name: '网站概况',
          path: '/website-overview'
        },
        {
          name: '实时访客',
          path: '/realtime-visitor'
        },
        {
          name: '趋势分析',
          path: '/trend-analysis'
        },
        {
          name: '受访页面',
          path: '/visited-page'
        }
      ]
    },
    {
      id: 2,
      name: '交易管理',
      path: '/manage-deal',
      children: [
        {
          name: '询价单审核',
          path: '/website-overview'
        },
        {
          name: '工厂智选',
          path: '/realtime-visitor'
        },
        {
          name: '审核记录',
          path: '/trend-analysis'
        },
        {
          name: '报价单管理',
          path: '/visited-page'
        },
        {
          name: '平台订单管理',
          path: '/visited-page'
        }
      ]
    },
    {
      id: 3,
      name: '类目管理',
      path: '/manage-category',
      children: [
        {
          name: '询价单审核',
          path: '/website-overview'
        },
        {
          name: '工厂智选',
          path: '/realtime-visitor'
        },
        {
          name: '审核记录',
          path: '/trend-analysis'
        },
        {
          name: '报价单管理',
          path: '/visited-page'
        },
        {
          name: '平台订单管理',
          path: '/visited-page'
        }
      ]
    }
  ]
}
