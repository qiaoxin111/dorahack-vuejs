const financialQuestion = [
  {
    answer: '1',
    answerType: 'radio',
    number: '1',
    question: 'Does the business need a license or authorization to operate?',
    subQuestion: [
      {
        answer: '',
        answerType: 'text',
        number: '1.1',
        question: 'i. Regulator for banking and prudential matters',
        subQuestion: [],
      },
      {
        answer: '',
        answerType: 'text',
        number: '1.2',
        question: 'ii. Regulator for AML/CTF matters',
        subQuestion: [],
      },
      {
        answer: '',
        answerType: 'file',
        number: '1.3',
        question: 'iii. Business License',
        subQuestion: [],
      },
    ],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '2',
    question:
      'Does the business maintain an Anti-Money Laundering (AML) Compliance Program manual or handbook?',
    subQuestion: [
      {
        answer: '',
        answerType: 'file',
        number: '2.1',
        question: ' i. Anti Money Laundering Compliance Manual',
        subQuestion: [],
      },
    ],
  },
  {
    answer: '',
    answerType: 'text',
    number: '3',
    question:
      'What is the name of your designated legal or compliance officer?',
    subQuestion: [],
  },
  {
    answer: '',
    answerType: 'text',
    number: '4',
    question:
      'What is the email of your designated legal or compliance officer?',
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '5',
    question:
      "Do government agencies or regulators examine or audit your business' compliance program?",
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '6',
    question:
      'Is the AML compliance program approved by the Board or a senior committee?',
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '7',
    question:
      'Does the business have a legal and regulatory compliance program that includes a designated officer that is responsible for coordinating and overseeing the AML framework?',
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '8',
    question:
      'Has the business developed written policies documenting the processes that they have in place to prevent, detect and report suspicious transactions?',
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '9',
    question:
      'In addition to inspections by government supervisors and inspectors, does the company have an internal audit function or other independent third party that assesses the AML policies and practices on a regular basis?',
    subQuestion: [
      {
        answer: '',
        answerType: 'text',
        number: '9.1',
        question: 'i. Name of External Auditor',
        subQuestion: [],
      },
      {
        answer: '1',
        answerType: 'radio',
        number: '9.2',
        question:
          'ii. Does the business have a policy prohibiting accounts / relationships with shell Banks?',
        subQuestion: [],
      },
      {
        answer: '1',
        answerType: 'radio',
        number: '9.3',
        question:
          'iii. Does the business have policies to reasonably ensure that they will not conduct transactions with or on behalf of shell banks through any of its accounts or products?',
        subQuestion: [],
      },
    ],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '10',
    question:
      'Does the business have a privacy policy (including record retention procedures) that comply with applicable law?',
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '11',
    question:
      'Does the business have a risk-based assessment of its customer base and their transactions?',
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '12',
    question:
      ' Does the business determine the appropriate level of enhanced due diligence (EDD) necessary for those categories of customers and transactions that the business has reason to believe pose a heightened risk of illicit activities?',
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '13',
    question:
      'Has the business implemented processes for the identification of those customers on whose behalf it maintains or operates accounts or conducts transactions?',
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '14',
    question:
      "Does the business have a requirement to collect information regarding its customers' business activities?",
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '15',
    question:
      "Does the business assess its customers' AML policies and practices?",
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '16',
    question:
      'Does the business have a process to review and, where appropriate, update customer information relating to high risk client information?',
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '17',
    question:
      'Does the business have procedures to establish a record of each new customer, noting their identification documents and ‘KYC’ information?',
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '18',
    question:
      'Does the business have procedures to establish a record of each new customer, noting their identification documents and ‘KYC’ information?',
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '19',
    question:
      'Does the business have procedures to establish a record of each new customer, noting their identification documents and ‘KYC’ information?',
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '20',
    question:
      'Where cash transaction reporting is mandatory, does the business have procedures to identify transactions structured to avoid such obligations?',
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '21',
    question:
      'Does the business screen customers and transactions against lists of persons, entities or countries issued by government or competent authorities?',
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '22',
    question:
      'Does the business have policies to reasonably ensure that it only operates with correspondent banks that posses licences to operate in their countries of origin?',
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '23',
    question:
      'Does the business have a monitoring program for unusual and potentially suspicious activity?',
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '24',
    question:
      'Does the business provide AML training to employees on the identification and reporting of transactions that must be reported to government authorities?',
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '25',
    question:
      'Does the business retain records of its training sessions including attendance records and relevant training materials used?',
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '26',
    question:
      'Does the business communicate new AML-related laws or changes to existing AML-related policies or practices to relevant employees?',
    subQuestion: [],
  },
  {
    answer: '1',
    answerType: 'radio',
    number: '27',
    question:
      'Does the business employ third parties to carry out some of its functions?',
    subQuestion: [
      {
        answer: '1',
        answerType: 'radio',
        number: '27.1',
        question:
          'i. Does the business provide AML training to the relevant third parties that includes: (1)Identification and reporting of transactions that must be reported to government authorities, (2)Examples of different forms of money laundering involving the products and services, (3)Internal policies to prevent money laundering.',
      },
    ],
  },
]

export {financialQuestion}
