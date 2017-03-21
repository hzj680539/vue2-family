import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Index from '@/components/login/Login'
import Main from '@/components/Main'

Vue.use(Router)

import RealtimeVisitor from '../components/StatisticData/RealtimeVisitor'
import TrendAnalysis from '../components/StatisticData/TrendAnalysis'
import VisitedPage from '../components/StatisticData/VisitedPage'
import WebsiteOverview from '../components/StatisticData/WebsiteOverview'

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
                  component: WebsiteOverview
                },
                {
                  path: 'visited-page',
                  component: VisitedPage
                },
                {
                  path: 'trend-analysis',
                  component: TrendAnalysis
                },
                {
                  path: 'realtime-visitor',
                  component: RealtimeVisitor
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
