exports.getOurDay =  () => {
  let current = new Date();
  let today = current.toLocaleDateString("en-US", { weekday: "long" });
  return today;
};

//Refactor
// exports.getOurDay = getTheDay;
// function getTheDay(){
// let current = new Date();
// let today = current.toLocaleDateString('en-US',{weekday: 'long'});
// return today;
// }

//Refactored
//exports.getOurDay = getTheDay;
// function getTheDay(){
//   let gettingDate = new Date();
//   let todayDay = gettingDate.getDay();
//   let ourDay;
//   switch (todayDay) {
//     case 0:
//       ourDay = "Sunday";
//       break;
//     case 1:
//       ourDay = "Monday";
//       break;
//     case 2:
//       ourDay = "Tuesday";
//       break;
//     case 3:
//       ourDay = "Wednesday";
//       break;
//     case 4:
//       ourDay = "Thursday";
//       break;
//     case 5:
//       ourDay = "Friday";
//       break;
//     case 6:
//       ourDay = "Saturday";
//       break;
//     default:
//       console.log("Something went wrong");
//       break;
//   }
//   return ourDay;
// }
