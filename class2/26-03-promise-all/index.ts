const fetchData = async () => {
  const result1 = await new Promise((resolve, reject) => {
    console.time("===개별 promise 각각 ====");
    //특정작업을 한다(API 보내기 등)
    setTimeout(() => {
      try {
        resolve("성공시 받는 데이터");
      } catch (error) {
        reject("실패했습니다!!");
      }
    }, 2000);
  });
  const result2 = await new Promise((resolve, reject) => {
    //특정작업을 한다(API 보내기 등)

    setTimeout(() => {
      try {
        resolve("성공시 받는 데이터");
      } catch (error) {
        reject("실패했습니다!!");
      }
    }, 2000);
  });
  const result3 = await new Promise((resolve, reject) => {
    //특정작업을 한다(API 보내기 등)

    setTimeout(() => {
      try {
        resolve("성공시 받는 데이터");
      } catch (error) {
        reject("실패했습니다!!");
      }
    }, 2000);
  });
  console.timeEnd("===개별 promise 각각 ====");
};

const fetchData2 = async () => {
  console.time("===한방에 프로미스 올 ====");

  await Promise.all([
    new Promise((resolve, reject) => {
      //특정작업을 한다(API 보내기 등)
      setTimeout(() => {
        try {
          resolve("성공시 받는 데이터");
        } catch (error) {
          reject("실패했습니다!!");
        }
      }, 2000);
    }),
    new Promise((resolve, reject) => {
      //특정작업을 한다(API 보내기 등)
      setTimeout(() => {
        try {
          resolve("성공시 받는 데이터");
        } catch (error) {
          reject("실패했습니다!!");
        }
      }, 3000);
    }),
    new Promise((resolve, reject) => {
      //특정작업을 한다(API 보내기 등)
      setTimeout(() => {
        try {
          resolve("성공시 받는 데이터");
        } catch (error) {
          reject("실패했습니다!!");
        }
      }, 1000);
    }),
  ]); // 배열이 들어감 await는 한번만
  console.timeEnd("===한방에 프로미스올 ====");
};

fetchData();
fetchData2();
