const isEmail = (rule, value, callback) => {
  if (!value) {
    callback()
  } else {
    var reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/
    if (reg.test(value)) {
      callback()
    } else {
      callback(new Error('Please enter the correct email format'))
    }
  }
}

const isPassword = (rule, value, callback) => {
  if (!value) {
    callback()
  } else {
    // var reg =  /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,24}$/
    var reg = /^(?=.*[0-9])(?=.*[a-zA-Z])[^].{7,23}$/
    if (reg.test(value)) {
      callback()
    } else {
      callback(
        new Error(
          'Password must be 8 - 24 characters with at least 1 letter and 1 number, and also case sensitive'
        )
      )
    }
  }
}

const validateMoney = (rule,value,callback) =>{
  if(!value){
      callback()
   }else if(value.split('.').length > 2){
      callback(new Error('Please ensure two decimal places')) //防止输入多个小数点
   }
}
const phoneVali = {
  86: /^1[3456789]\d{9}$/,
  1 : /^(1?|(1\-)?)\d{10}$/,
  852: /^(5|6|8|9)\\d{7}$/,  //香港
  65: /^(6|8|9)\d{7}/,  //新加坡
  62: /^\d{9,11}$/, //印度尼西亚
  66: /^\d{8,11}$/, //泰国
}
const phone = function(number){
  let reg
  reg = phoneVali[number]
  return (rule, value, callback)=>{
    if (!value) {
      callback()
    } else {
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error('Please enter the correct phone format'))
      }
    }
  }
}

const isNum = (rule, value, callback) => {
  const num = /^[0-9]*$/
  if (!num.test(value)) {
    callback(new Error('please enter a number'))
  } else {
    callback()
  }
}

export default {isEmail, isPassword, isNum, phone, validateMoney}
