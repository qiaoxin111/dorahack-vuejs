const userSignInPath = '/adam-user-sign-in'
const userEmail = '/adam-user-email'
const userPath = '/adam-user'
const userLogoutPath = '/adam-user-login-out'
const userpw = '/adam-user-pw'
export default {
  'signIn': {
    url: userSignInPath + '/sign-in-check',
    method: 'post'
  },
  'resendEmail': {
    url: userEmail + '/resend',
    method: 'get'
  },
  'signUp': {
    url: userSignInPath + '/sign-up',
    method: 'post'
  },
  'confirmSmsCode': {
    url: userSignInPath + '/sign-in',
    method: 'post'
  },
  'sendSmsCode': {
    url: userPath + '/bind_phone',
    method: 'post'
  },
  'userInfo': {
    url: userPath + '/get_current_user',
    method: 'get'
  },
  'logOut': {
    url :userLogoutPath + '/login-out',
    method: 'post'
  },
  // 忘记密码页面发送验证码
  'forgetpwVerifyCodeSend': {
    url: userpw + '/forget_verify_code_send',
    method: 'post'
  },
  // 忘记密码确认新密码
  'forgetpwVerifyCodeConfirm': {
    url: userpw + '/forget_verify_code_confirm',
    method: 'post'
  },
  // 邀请中确认密码
  'inviteConfirmPassword' : {
    url: userpw + '/set_by_invite',
    method: 'post'
  }
}