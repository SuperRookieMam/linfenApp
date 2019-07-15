import Router from 'vue-router'

export default new Router({
  base: CONTEXT_PATH,
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'wellcome',
      component: () => import('../../module/wellcome/wellcome'),
      children: []
    }
  ]
})
