const apiCallMock = (retry) => {
  return new Promise((resolve, reject) => {
    const status = 400;
    if (status === 200 || retry === 1) {
      resolve({
        name: "Akash",
      });
    } else {
      reject("Something went wrong");
    }
  });
};

const apiCallRetry = (callBack, delay, maxCount = 3) => {
  return new Promise((resolve, reject) => {
    callBack(maxCount)
      .then((res) => {
        resolve(res);
      })
      .catch(() => {
        if (maxCount) {
          console.log(`retrying ${maxCount}`);
          setTimeout(() => {
            apiCallRetry(callBack, delay, maxCount - 1)
              .then((resp) => resolve(resp))
              .catch((err) => reject("Try after sometime."));
          }, delay);
        } else {
          reject("Try after sometime.");
        }
      });
  });
};

apiCallRetry(apiCallMock, 3000)
  .then((res) => console.log("api call success", res))
  .catch((err) => console.log(err));
