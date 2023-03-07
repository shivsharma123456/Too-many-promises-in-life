// function updateLastUserActivityTime(user, posts, createPost, deletePost) {
//     const newPost = { id: posts.length + 1, userId: user.id, content: "New post" };
  
//     const createPostPromise = createPost(newPost);
//     const updateActivityTimePromise = new Promise((resolve) => {
//       setTimeout(() => {
//         user.lastActivityTime = new Date();
//         resolve();
//       }, 1000);
//     });
  
//     Promise.all([createPostPromise, updateActivityTimePromise]).then(() => {
//       console.log(`All posts by user ${user.id}:`);
//       posts.filter((post) => post.userId === user.id).forEach((post) => console.log(post));
//       console.log(`Last activity time of user ${user.id}: ${user.lastActivityTime}`);
  
//       const lastPost = posts[posts.length - 1];
//       deletePost(lastPost).then(() => {
//         console.log(`Posts of user ${user.id} after deleting last post:`);
//         posts.filter((post) => post.userId === user.id).forEach((post) => console.log(post));
//       });
//     });
  
//     return Promise.all([createPostPromise, updateActivityTimePromise]);
//   }
  function getButter() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Butter');
      }, 2000);
    });
  }
  
  function getBread() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Bread');
      }, 3000);
    });
  }
  
  function getColdDrinks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Cold Drinks');
      }, 1000);
    });
  }
  
  async function makeSandwich() {
    const butter = await getButter();
    const bread = await getBread();
    const coldDrinks = await getColdDrinks();
    console.log(`Made a sandwich with ${butter} and ${bread}, and got ${coldDrinks} as well.`);
  }
  
  makeSandwich();
  
  
  getButter()
    .then(butter => {
      return getBread().then(bread => {
        return [butter, bread];
      });
    })
    .then(([butter, bread]) => {
      return getColdDrinks().then(coldDrinks => {
        console.log(`Made a sandwich with ${butter} and ${bread}, and got ${coldDrinks} as well.`);
      });
    });
  
  
  

  