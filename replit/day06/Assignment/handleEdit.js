//assignment
const handleEdit = (nickname, interests) => {

  interests=interests.split(",")
  for (let i=0; i<interests.length;i++){
    interests[i]=interests[i].trim()}
  interests= interests.join(",")
  
  const handleObj = {
      // 아래에 코드를 작성해주세요.
      nickname  : nickname,
      interests : interests.split(","),
      bio       : `제 닉네임은 ${nickname}입니다. 취미는 ${interests}입니다.`
  }
  return handleObj;
}

// 아래의 코드는 절대로 수정하거나 삭제하지 마세요.
module.exports = handleEdit;


