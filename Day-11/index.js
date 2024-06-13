var InsituteDetails = {
    name: "Awdiz",
    age: 12,
    location: "Vashi",
    isOpen: true,
    courses: [
      "Full stack Development",
      "CCNA",
      "WINDOWS",
      "LINUX",
      ["Hi", "Welcome", "target"],
    ],
    batchesDetails: { totalBatches: 50, totalStudents: 500 },
  };

// console.log(InsituteDetails.batchesDetails);
// console.log(InsituteDetails.courses);
// console.log(InsituteDetails.location);
// console.log(InsituteDetails.batchesDetails.totalStudents)

// console.log(InsituteDetails["name"])
// console.log(InsituteDetails["age"])
// console.log(InsituteDetails["courses"].length)

// const keys = Object.keys(InsituteDetails);
// console.log(keys);
// const values = Object.values(InsituteDetails);
// console.log(values);

// subarray=InsituteDetails.courses[4];
// console.log(subarray);
// console.log(subarray[2]);

// for(var i=0;i<subarray.length;i++){
//   if(subarray[i]==="target"){
//     console.log(i)
//   }
// }

for (let key in InsituteDetails) {
  console.log(key, InsituteDetails[key]);
}









