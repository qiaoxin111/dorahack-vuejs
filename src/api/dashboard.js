const adamDashboard = 'adam-dashboard'
const adamUserFeedback = 'adam-user-feedback'
export default {
  'summaryWallet': {
    url: adamDashboard + '/summary_wallet',
    method: 'get'
  },
  'summaryTransactions': {
    url: adamDashboard + '/summary_transactions',
    method: 'get'
  },
  'selectList': {
    url: adamDashboard + '/enum_list',
    method: 'get'
  },
  'summayWalletTransaction': {
    url: adamDashboard + '/summary_wallet_transaction',
    method: 'get'
  },
  'summaryWalletBalance':{
    url: adamDashboard + '/summary_wallet_balance',
    method: 'get'
  },
  // help页面 caterogroy List
  'feedbackList':{
    url: adamUserFeedback + '/enum_list',
    method: 'get'
  },
  'feedbackSubmit': {
    url: adamUserFeedback + '/submit',
    method: 'post'
  }
}