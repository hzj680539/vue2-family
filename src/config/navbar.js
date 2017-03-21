export default {
  navbarList: [
    {
      id: 1,
      name: '数据统计',
      path: '/statistic-data',
      children: [
        {
          name: '网站概况',
          path: '/statistic-data/website-overview'
        },
        {
          name: '实时访客',
          path: '/statistic-data/realtime-visitor'
        },
        {
          name: '趋势分析',
          path: '/statistic-data/trend-analysis'
        },
        {
          name: '受访页面',
          path: '/statistic-data/visited-page'
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
          path: '/manage-deal/website-overview'
        },
        {
          name: '工厂智选',
          path: '/manage-deal/realtime-visitor'
        },
        {
          name: '审核记录',
          path: '/manage-deal/trend-analysis'
        },
        {
          name: '报价单管理',
          path: '/manage-deal/visited-page'
        },
        {
          name: '平台订单管理',
          path: '/manage-deal/visited-page'
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
          path: '/manage-deal/website-overview'
        },
        {
          name: '工厂智选',
          path: '/manage-deal/realtime-visitor'
        },
        {
          name: '审核记录',
          path: '/manage-deal/trend-analysis'
        },
        {
          name: '报价单管理',
          path: '/manage-deal/visited-page'
        },
        {
          name: '平台订单管理',
          path: '/manage-deal/visited-page'
        }
      ]
    }
  ]
}
