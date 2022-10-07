// Task 1: Translate the story into code.

const onMybirthday = (isKayoSick) => {
  return new Promise((resolve, reject) => {
    if (!isKayoSick) {
      resolve(2);
    } else {
      reject("0 cakes and I am Sad.");
    }
  });
};
onMybirthday(false)
  .then((result) => {
    console.log(`I have ${result} cakes and I am Happy.`);
  })
  .catch((err) => {
    console.log(`I have ${err}`);
  })
  .finally(() => {
    console.log("Party is On");
  });
