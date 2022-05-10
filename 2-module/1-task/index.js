function sumSalary(salaries) {
  let sum = 0;
   for (let key in salaries) {
     let isSalary = typeof salaries[key] === 'number' && Number.isFinite(salaries[key]);
    if (isSalary) {
      sum += salaries[key];
    }
   }
return sum
  }
