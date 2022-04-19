// new Promise((resolve, reject) => {
//   //특정작업을 한다(API 보내기 등)
//   //   if ("성공!!") {
//     resolve();
//   }
//   if ("실패") {
//     reject();
//   }
// })
//   .then((res) => {})

const fetchDat = async () => {
  const result = await new Promise((resolve, reject) => {
    //특정작업을 한다(API 보내기 등)

    setTimeout(() => {
      try {
        resolve("성공시 받는 데이터");
      } catch (error) {
        reject("실패했습니다!!");
      }
    }, 2000);
  });
};
