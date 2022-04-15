const axios = require('axios')
const student = require('./student.json')

class MyCustomReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig
    this._options = options
  }

  onRunStart() {
    const isEmpty = Object.values(student).some((val) => !val)

    if (isEmpty)
      throw new Error('\x1b[33m ⚠️  student.json 파일을 채워주세요!⚠️\x1b[0m')

    if (student.generation === 0) {
      throw new Error('\x1b[33m ⚠️  기수를 제대로 기입해주세요!⚠️\x1b[0m')
    }

    if (student.course === 'B 또는 F') {
      throw new Error(
        '\x1b[33m ⚠️  프론트/백엔드 코스를 제대로 기입해주세요!⚠️\x1b[0m'
      )
    }

    if (student.name === '홍길동') {
      throw new Error('\x1b[33m ⚠️  이름을 제대로 기입해주세요!⚠️\x1b[0m')
    }
  }

  onRunComplete(_, results) {
    console.log()
    console.log('------ 테스트 결과 ------')
    console.log(
      `통과한 테스트 : ${results.numPassedTestSuites}개 / ${results.numTotalTestSuites}개`
    )
    console.log(`-------------------------`)

    let data = {
      ...student,
      failed: [],
      score: 0
    }

    results.testResults.forEach((ele, i) => {
      if (ele.numFailingTests !== 0) {
        data.failed.push(ele.testResults[0].ancestorTitles[0])
        data.score--
      }
    })

    axios
      .post('http://34.64.61.241:3000/submit', data)
      .then(() => {
        console.log('👏👏👏 제출이 완료되었습니다. 👏👏👏')
      })
      .catch((error) => {
        if (error.response) {
          console.log('🚨 서버에서 오류 응답 : ', error.response.data.message)
        } else if (error.request) {
          console.log('🚨 서버에서 응답받지 못함', error.request)
        } else {
          console.log('🚨', error.message)
        }
        console.log('🚨🚨🚨 제출이 되지 않았습니다. 다시 시도해주세요. 🚨🚨🚨')
      })
  }
}

module.exports = MyCustomReporter
