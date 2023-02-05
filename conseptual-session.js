// ----------------1+n..........

// let n=5;
// let sum=0;
// for(let i=0;i<=n;i++){
//     sum=sum+i;
// }
// console.log(sum);

// ................3 ar namata..................

// for(i=0;i<=10;i++){
//     console.log(3+'*'+i+'='+i*3);
// }
// ....................5 >big Numbers Count...........

// let number=[-1,2,-3,4,5,6,-7,8,-9,10]
// let count=0;
// for(i=0;i<number.length;i++){
//     const element=number[i];
//     if(element>5){
//       count=count+1;
//     }
// }
// console.log(count);

// ....................two Friends Names Reverse...........
// function friendsName(names1,names2){
//  if(names1.length>names2){
//     console.log(names1.split('').reverse().join());
//  }
//  else{
//     console.log(names2.split('').reverse().join(''));
//  }
// }
// console.log(friendsName('anik','asraful',));

// ....................milimrter to leter ...........
// function waterTomeli(number){
//    const leter=number/1000;
//    return leter;
// }
// console.log(waterTomeli(10000));
// ....................milimrter to leter ...........

// ...................problems1............
// function  radianToDegree(redian){
//  const redianNumber=redian*(180/3.1416);
//  return redianNumber.toFixed(2);
// }
// const degree=radianToDegree(5);
// console.log(degree);

// ,,,,,,,,,,,,,,,,,,,,,,,,,file checked,,,,,,,,,,

// function  isJavaScriptFile(srt){
//  if(srt.endsWith('.js')){
//     console.log('ture');
//  }
//  else{
//     console.log('false');
//  }
// }
// isJavaScriptFile('image.jpg.js');
// oliprice...............
// function oilPrice(Digel,pettrol,actel){
//     let  digelLeter=114;
//     let  pettrolLeter=130;
//     let  actelLeter=135;
//       const digelleterTo=digelLeter*Digel;
//       const pettrolLeterTO=pettrol*pettrolLeter;
//       const actelLeterTo=actel*actelLeter;
//       const totalTk=digelleterTo+pettrolLeterTO+actelLeterTo;
//       return totalTk;
// }
// console.log(oilPrice(0,2,3));
// function publicBusFare(numbers){
//    let busShet=50;
//    let Carshet=11;
//    let Bus=numbers%busShet;
// //    console.log(Bus);
//    let car=Bus%Carshet;
//  //    console.log(Bus);
//    let publicbus=car*250;
//    console.log(publicbus);

// }

// publicBusFare(55);
function isBestFriend(nam1,nam2){
  if(nam1.name===nam2.friend && nam1.friend===nam2.name){
    console.log('yes');
  }
  else{
    console.log('No');
  }
}
isBestFriend({ name: "doe", friend: "alex" },
{ name: "john", friend: "doe" });


