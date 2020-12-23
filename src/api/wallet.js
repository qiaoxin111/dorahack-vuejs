export default {
    'balanceList': {
        url: '/adam-account-balance/list',
        method: 'get'
    },

    'walletListPage': {
        url: '/adam-account-wallet/list_page',
        method: 'get'
    },

    'walletList': {
        url: '/adam-account-wallet/list_wallets',
        method: 'get'
    },

    'walletCreate': {
        // 创建币种钱包
        url: '/adam-account-wallet/create',
        method: 'post'
    },

    'walletDetails': {
        // 钱包详情
        url: '/adam-account-wallet/get',
        method: 'get'
    },

    'walletDelete': {
        // 删除钱包
        url: '/adam-account-wallet/delete',
        method: 'post'
    },

    'walletUpdateName': {
        // 修改钱包昵称
        url: '/adam-account-wallet/update_name',
        method: 'post'
    },


    'transactionPage': {
        url: '/adam-transaction/page',
        method: 'get'
    },

    'transactionDetail': {
        url: '/adam-transaction/get',
        method: 'get'
    }


}