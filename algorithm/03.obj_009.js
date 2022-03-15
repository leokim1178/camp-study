const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

student.school=school
//student["school"]=school; 이렇게도 표현가능
console.log(student)

let a="name"


student.name //.으로 입력할때는 키값을 정확히 입력해야함
student[a] //직접 입력해도 되고 a가 가진 값으로 객체에 접근이 가능
student.age
student["age"]
//이 차이는? 이 키값을 어떠한 변수의 이름값으로 접근할때 사용한다

student.dog="똘이" //객체 데이터 추가
student.dog="별이" //객체 데이터 변경
delete student.dog //객체 데이터 삭제
student.school.teacher="훈이" //객체 내의 객체도 수정,변경 가능