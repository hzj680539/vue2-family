export default {
  navbarList: [
    {
      id: 1,
      name: '数据统计',
      path: '/statistic-data',
      showChildren: true,
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
      showChildren: false,
      children: [
        {
          name: '询价单审核',
          path: '/check-enquiry-list'
        },
        {
          name: '工厂智选',
          path: '/factory-select'
        },
        {
          name: '审核记录',
          path: '/check-record'
        },
        {
          name: '报价单管理',
          path: '/manage-offer-list'
        },
        {
          name: '平台订单管理',
          path: '/manage-order-list'
        }
      ]
    },
    {
      id: 3,
      name: '类目管理',
      path: '/manage-category',
      showChildren: false,
      children: [
        {
          name: '基础数据维护',
          path: '/maintain-basedata'
        }
      ]
    },
    {
      id: 4,
      name: '运营管理',
      path: '/manage-operation',
      showChildren: false,
      children: [
        {
          name: '运营人员维护',
          path: '/maintain-operation-staff'
        },
        {
          name: '运营分组维护',
          path: '/maintain-operation-group'
        },
        {
          name: '业务区域维护',
          path: '/maintain-business-area'
        },
        {
          name: '区域信息维护',
          path: '/maintain-area-info'
        }
      ]
    }
  ]
}
