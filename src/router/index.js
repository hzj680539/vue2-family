import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Index from '@/components/login/Login'
import Main from '@/components/Main'

Vue.use(Router)

import StatisticData from '../components/StatisticData' // 数据统计
import ManageDeal from '../components/ManageDeal' // 交易管理
import ManageCategory from '../components/ManageCategory' // 类目管理

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,
      children: [
        {
          path: '/index',
          alias: '/login',
          name: 'index',
          component: Index
        },
        {
          path: '/',
          component: Main,
          children: [
            {
              path: '/statistic-data',
              components: { content: App },
              children: [
                {
                  path: '',
                  alias: 'website-overview',
                  component: StatisticData.WebsiteOverview
                },
                {
                  path: 'visited-page',
                  component: StatisticData.VisitedPage
                },
                {
                  path: 'trend-analysis',
                  component: StatisticData.TrendAnalysis
                },
                {
                  path: 'realtime-visitor',
                  component: StatisticData.RealtimeVisitor
                }
              ]
            },
            {
              path: '/manage-deal',
              components: { content: App },
              children: [
                {
                  path: '',
                  alias: 'check-enquiry-list',
                  component: ManageDeal.CheckEnquiryList
                },
                {
                  path: 'factory-select',
                  component: ManageDeal.FactorySelect
                },
                {
                  path: 'check-record',
                  component: ManageDeal.CheckRecord
                },
                {
                  path: 'manage-offer-list',
                  component: ManageDeal.ManageOfferList
                },
                {
                  path: 'manage-order-list',
                  component: ManageDeal.ManageOrderList
                }
              ]
            },
            {
              path: '/manage-category',
              components: { content: App },
              children: [
                {
                  path: '',
                  alias: 'maintain-basedata',
                  component: ManageCategory.MaintainBasedata
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
