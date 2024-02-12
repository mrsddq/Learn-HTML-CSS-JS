//IIFE
//immediately invoked function expression
// (function()
// {
//       console.log("IIFE");
// })();
// //
// (function(a,b)
// {
//       console.log(a**b);
// })(4,2);

const user=(function(){
      const userData={
            userName: 'John',
            userAge: 20,
      };

      function getName(){
            console.log(userData.userName);
      }

      function updateAge(age){
            console.log(userData.userAge + age);
      }

      return {getName, updateAge};
})();
console.log(user);
console.log(user.userData);
user.getName();
user.updateAge(3);