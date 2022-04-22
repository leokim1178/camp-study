import express from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import {options} from './swagger/config.js'

const app=express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));


app.get('/users',(req,res) => {
    const result=[// 회원 1명 데이터 객체 예시
    {email : "aaa@gmail.com", name : "철수",phone : "01012345678",personal : "220110-2222222",prefer : "https://naver.com"},
    {email : "sam@gmail.com", name : "훈이",phone : "01087654321",personal : "211212-1111111",prefer : "https://daum.net"},
    {email : "leo@gmail.com", name : "맹구",phone : "01016161942",personal : "211111-2222222",prefer : "https://youtube.com"},
    {email : "mike@gmail.com", name : "빠키",phone : "01015152828",personal : "200000-1111111",prefer : "https://cyworld.com"},
    {email : "billy@gmail.com", name : "선우",phone : "01066654941",personal : "2020202-2222222",prefer : "https://google.com"}
    ]

    res.send(result)
})

app.get('/starbucks',(req,res)=>{
    const coffee=[// 커피 1개 객체 데이터 예시
    { name: '아메리카노', kcal: 5 },
    { name: '카페라떼', kcal: 300 },
    { name: '카푸치노', kcal:  200},
    { name: '카라멜마끼아또', kcal: 450 },
    { name: '아이스 아메리카노', kcal: 5 },
    { name: '아이스 카페라떼', kcal: 200 },
    { name: '아이스 카라멜마끼아또', kcal: 400 },
    { name: '돌체라떼', kcal: 400 },
    { name: '녹차라떼', kcal:  300},
    { name: '연유라떼', kcal:  450},
    ]
    res.send(coffee)
})

app.listen(3000)