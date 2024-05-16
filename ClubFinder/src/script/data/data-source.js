import clubs from "./clubs.js";

console.log(clubs)
class DataSource{
//   constructor(onSuccess,onFailed){
//   this.onSuccess = onSuccess;
//   this.onFailed = onFailed;
// }  

static searchClub(keyword) {
  console.log(clubs);
  return new Promise((resolve,rejected)=>{
    const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
    

    if (filteredClubs.length) {
      resolve(filteredClubs);
    } 
    else {
    rejected(`${keyword}  is not found`);
    }

  });
  }

};

export default DataSource;