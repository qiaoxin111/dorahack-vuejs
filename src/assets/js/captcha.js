import {EventEmitter} from 'events'

const event = new EventEmitter()

// 可在业务逻辑中监听
event.on('popUp', () => {
  console.log('触发弹出')
})

// 可在业务逻辑中监听
event.on('verify', () => {
  console.log('验证完成')
})
// 可在业务逻辑中监听
event.on('error', () => {
  console.log('触发失败')
})

const getTimestamp = msec => {
  msec = !msec && msec !== 0 ? msec : 1
  return parseInt(new Date().valueOf() / msec, 10)
}

const loadScript = src => {
  return new Promise(res => {
    let head = document.head || document.getElementsByTagName('head')[0]
    let script = document.createElement('script')

    script.type = 'text/javascript'
    script.src = src

    if (!('onload' in script)) {
      script.onreadystatechange = function() {
        if (this.readyState !== 'complete' && this.readyState !== 'loaded')
          return
        this.onreadystatechange = null
        res(script)
      }
    }

    script.onload = function() {
      this.onload = null
      res(script)
    }

    head.appendChild(script)
  })
}

const appendDomToWrap = (id, wrap) => {
  const cpt = document.createElement('div')
  cpt.id = id
  wrap.appendChild(cpt)
}

class Captcha {
  instance

  constructor(opts = {}) {
    this.cptId = opts.cptId || 'captcha'
    this.width = opts.width || 320
    this.mode = opts.mode || 'popup'
    this.wrap = opts.wrap || document.body
  }

  async init() {
    let url =
      'http://cstaticdun.126.net/load.min.js' +
      '?t=' +
      getTimestamp(1 * 60 * 1000) // 时长1分钟，建议时长分钟级别
    await loadScript(url)
    await appendDomToWrap(this.cptId, this.wrap)
    await this.initCaptcha()
  }

  // 提供外层调用初始化、可传入 callback
  initCaptcha(callback) {
    const that = this
    return new Promise((res, rej) => {
      window.initNECaptcha(
        {
          element: `#${this.cptId}`,
          captchaId: '4c587cb4b4184caf9605665886d45fd5',
          mode: 'popup',
          width: '320px',
          // enableClose: true, // 由业务方控制验证码弹框关闭
          // feedbackEnable: false, // 业务方关闭反馈入口
          onClose: function() {
            // 弹出关闭结束后将会触发该函数
          },
          onVerify: function(err, data) {
            event.emit('verify', data)
            // if callback in
            callback && callback(data)
            // if (!err) {
            // 验证成功后，调用close方法关闭弹框（enableClose为true时调用）
            //captchaIns.close()
            //}
          },
        },
        function(instance) {
          // 初始化成功后得到验证实例instance，可以调用实例的方法
          that.instance = instance
          res(instance)
        },
        function(err) {
          // 初始化失败后触发该函数，err对象描述当前错误信息
          event.emit('error', err)
          rej(new Error(err))
        }
      )
    })
  }

  async getInstance() {
    if (!this.instance) {
      return this.initCaptcha()
    } else {
      return this.instance
    }
  }

  refresh() {
    const instance = this.getInstance()
    instance.refresh()
  }

  destroy() {
    if (!this.instance) {
      this.instance = this.getInstance()
      this.instance.destroy()
    } else {
      this.instance.destroy()
    }
  }

  async popUp() {
    const instance = await this.getInstance()
    instance.popUp()
  }

  close() {
    const instance = this.getInstance()
    instance.close()
  }
}

const captcha = new Captcha()

export {event, captcha}
