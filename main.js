//1.
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

          let res = studentRecords.map((value) => {
            return value.name;
      });
      
      console.log(res);

    //2.
    let res_2 = studentRecords.filter((value) => {
        return value.marks>50 ;
  });
  
  console.log(res_2);
  //3
  let res_3 = studentRecords.filter((value) => {
    return value.marks>50 && value.id>120 ;
});

console.log(res_3);

//4
let res_4 = studentRecords.map(value=>value.marks).reduce((accumulator , currentValue  )=> accumulator+ currentValue);
console.log(res_4);

//5
let res_5 = studentRecords.filter((value) => {
    return (value.marks>50)
}).map(value => value.name);
console.log(res_5);

//6
let res_6 = studentRecords.filter(value => value.id>120).reduce((acc, curr) => {
    return acc + curr.marks
}, 0);
console.log(res_6);

//7
let res_7 = studentRecords.filter(value => value.marks<50).map(value => value.marks + 15)
let result = studentRecords.filter(value => value.marks>50).reduce((a, v) => {return a + v.marks},0) + res_7.filter(value => value>50).reduce((lastAcc, lastCurrVal) => {return lastAcc + lastCurrVal},0)
console.log(result);


//8
let obj =[
      {name: "Sudhanshu", class:"10th", rollNo: "20"  },
      {name: "Kunal", class:"12th", rollNo: "34"  },
      {name: "Surya", class:"5th", rollNo: "54"  },
      {name: "Aditya", class:"8th", rollNo: "04"  },
      {name: "Satyam", class:"7th", rollNo: "30"  },
      {name: "Sarthak", class:"12th", rollNo: "10"  }
]
console.log(obj);