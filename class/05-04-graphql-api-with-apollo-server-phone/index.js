// const { ApolloServer, gql } = require('apollo-server');
import {ApolloServer,gql} from 'apollo-server';
import { checkValidationPhone,getToken,sendTokenToSMS } from './phone.js'


// The GraphQL schema
const typeDefs = gql`
  type BoardReturn{
    number: Int
    writer: String
    title : String
    contents : String
  }

  type Query {
    # fetchBoards : BoardReturn => 객체 1개를 의미 
    "A simple type for getting started!"
    fetchBoards: [BoardReturn]    # =>배열 안에 객체 1개 이상을 의미
  }
  type Mutation {
    createBoard(writer:String,title:String,contents:String): String,
    createBoard2(createBoardInput: createBoardInput): String
    createTokenOfPhone(myphone:String): String

  }
  input createBoardInput{
    writer: String
    title: String
    contents: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    fetchBoards:() =>{
    //1. 데이터를 조회하는 로직 -> ex)DB에 접속해서 데이터 꺼내오기
    const result = [
      { number: 1, writer: "철수", title : "제목입니다", contents: "내용이에요@@@" },
      { number: 2, writer: "영희", title : "영희제목입니다", contents: "영희내용이에요@@@"},
      { number: 3, writer: "훈이", title : "훈이제목입니다", contents: "훈이내용이에요@@@"}]
  
    //2.꺼내온 결과 응답 주기
    return result // 중괄호와 return사이에 아무것도 없으면 이렇게 쓴다 
  }},
  Mutation: {
    createBoard:(_,args) =>{
    //1. 데이터를 조회하는 로직 -> ex)DB에 접속해서 데이터 꺼내오기
      console.log(args)
    //2.꺼내온 결과 응답 주기

    return "등록에 성공!"
  },
    createBoard2:(_,args) =>{
    //1. 데이터를 조회하는 로직 -> ex)DB에 접속해서 데이터 꺼내오기
      console.log(args)
    //2.꺼내온 결과 응답 주기

    return "등록에 성공!"
  },
  createTokenOfPhone:(_,args)=>{
    //1.휴대폰번호 자릿수 맞는지 확인하기
    const isValid= checkValidationPhone(args.myphone)
    if(isValid){    
    //2.핸드폰 토큰 6자리 만들기
    const myToken = getToken()
    //3.핸드폰 번호에 토큰 전송하기
    sendTokenToSMS(args.myphone,myToken)}
    return "인증완료!!"
}
}
  
}
//핵심은 리졸버다
const server = new ApolloServer({
  typeDefs,//: typeDefs, //같으면 생략 가능하다(shorthand property)
  resolvers//: Resolvers,
});

server.listen(3001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
//기본포트:3000