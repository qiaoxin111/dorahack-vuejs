const comPath = '/adam-com-info'
const comExtend = '/adam-com-info-extend'
const comShareholder = '/adam-com-shareholder'
const legalPerson = '/adam-com-legal-person'
const countryFileLink = '/adam-country-file-link'
const countryProvince = '/adam-sys-country-province'
export default {
  // 激活中step1公司信息
  'queryComInfo': {
    url: comPath + '/query',
    method: 'get'
  },
  // 公共的selectList
  'getComSelectList': {
    url: comPath + '/enum_list',
    method: 'get'
  },
  'queryBusiAndfinaInfo': {
    url: comExtend + '/query',
    method: 'get'
  },
  'queryComShareholderInfo': {
    url: comShareholder + '/query',
    method: 'get'
  },
  'queryComLegalPersonInfo': {
    url: legalPerson + '/query',
    method: 'get'
  },
  'stateOrProvince': {
    url: countryProvince + '/list_province',
    method: 'get'
  },
  'getCountryFileLink': {
    url: countryFileLink + '/query',
    method: 'get',
    reUrl: true
  },
}