const adamPayout = '/adam-payout'
const accountWallet = '/adam-account-wallet'
const adamPayer = '/adam-payer'
const adamBeneficiary = '/adam-beneficiary'
export default{
  'querySenderList': {
    url: adamPayer + '/list',
    method: 'get'
  },
  'queryBeneficiariesList': {
    url: adamBeneficiary + '/list',
    method: 'get'
  },
  'createSender': {
    url: adamPayer + '/create',
    method: 'post'
  },
  'createBeneficiaries': {
    url: adamBeneficiary + '/create',
    method: 'post'
  },
  'createPayOut': {
    url: adamPayout + '/create',
    method: 'post'
  },
  'payOutOptionsList': {
    url: adamPayer + '/enum_list',
    method: 'get'
  },
  'beneficiaryChargeType': {
    url: adamBeneficiary + '/enum_list',
    method: 'get'
  },
  // 货币钱包
  'accountWalletList': {
    url: accountWallet + '/list_wallets',
    method: 'get'
  },
  // 删除付款人列表
  'deletePayer':{
    url: adamPayer + '/delete',
    method: 'post'
  },
  // 删除收款人列表
  'deleteBeneficiary': {
    url: adamBeneficiary + '/delete',
    method: 'post'
  },
  //付款人列表分页列表
  'pageSenderList': {
    url: adamPayer + '/page',
    method: 'get'
  },
  //收款人列表分页列表
  'pageBeneficiaryList': {
    url: adamBeneficiary + '/page',
    method: 'get'
  },
  //获取单个付款人信息
  'getSenderInfo': {
    url: adamPayer + '/get',
    method: 'get'
  },
  // 编辑单个付款人信息
  'editPayer': {
    url: adamPayer + '/edit',
    method: 'post'
  },
  // 获取单个收款人信息
  'getBeneficiaryInfo': {
    url: adamBeneficiary + '/get',
    method: 'get'
  },
  // 编辑单个收款人信息
  'editBeneficiary': { 
    url: adamBeneficiary + '/edit',
    method: 'post'
  },
  // 编辑下发
  'editPayOut': {
    url: adamPayout + '/edit',
    method: 'post'
  },
  'beneficiaryPaymentMethod':{
    url: adamBeneficiary + '/required_details',
    method: 'post'
  },
  'cancelPayout': {
    url: adamPayout + '/cancelled',
    method: 'post'
  }
}