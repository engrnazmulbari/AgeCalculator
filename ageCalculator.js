/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 function ageCalculate(){
                var getBirthDate = document.getElementById('birth_date');
                var birthDate = getBirthDate.value;
                var birthArray = birthDate.split("-");
                var birthYear = parseInt(birthArray[0]);
                var birthMonth = parseInt(birthArray[1]);
                var birthDay = parseInt(birthArray[2]);
                
                var getSpecificDate = document.getElementById('specific_date');
                var specificDate = getSpecificDate.value;
                var specificDateArr = specificDate.split("-");
                var year = parseInt(specificDateArr[0]);
                var month = parseInt(specificDateArr[1]);
       
                var day = parseInt(specificDateArr[2]);
                var numOfDay = day-birthDay;
                var rday;
                if(numOfDay<0){
                    day=day + 30;
                    rday= day - birthDay;
                    month=month-1;
                    numOfDay= day-birthDay;
                }
                var numOfMonth = month-birthMonth;
                if(numOfMonth<0){
                    month=month+12;
                    year=year-1;
                    numOfMonth = month-birthMonth;
                }
                var numOfYear = year-birthYear;
                var result = numOfYear.toString()+" years ".concat(numOfMonth.toString()+" months ").concat(numOfDay.toString()+"days");
                var age_calc = document.getElementById('age_calc');
                age_calc.innerHTML = "Your age is:"+result;
            }