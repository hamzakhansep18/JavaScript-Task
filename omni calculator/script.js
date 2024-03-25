function calculateWageHourly() {
    const hourlyWage = document.getElementById("hour").value;
    const dailyWage = document.getElementById("daily").value = (hourlyWage * 8);
    const WeeklyWage = document.getElementById("weekly").value = (hourlyWage * 40).toFixed(2);
    const MonthlyWage = document.getElementById("monthly").value = (WeeklyWage * (52/12)).toFixed(2);
    const YearlyWage = document.getElementById("yearly").value = (MonthlyWage * 12).toFixed(2);

}


function calculateWageDaily() {
    const dailyWage = document.getElementById("daily").value;
    const hourlyWage = document.getElementById("hour").value=(dailyWage/8).toFixed(2);
    const WeeklyWage = document.getElementById("weekly").value = (hourlyWage * 40).toFixed(2);
    const MonthlyWage = document.getElementById("monthly").value = (WeeklyWage * (52/12)).toFixed(2);
    const YearlyWage = document.getElementById("yearly").value = (MonthlyWage * 12).toFixed(2);

  
}

function calculateWageWeekly() {
    const WeeklyWage = document.getElementById("weekly").value;
    const hourlyWage = document.getElementById("hour").value=(WeeklyWage/40).toFixed(2);
    const dailyWage= document.getElementById("daily").value=(WeeklyWage/5).toFixed(2);
    const MonthlyWage = document.getElementById("monthly").value = (WeeklyWage * (52/12)).toFixed(2);
    const YearlyWage = document.getElementById("yearly").value = (MonthlyWage * 12).toFixed(2);

    
}

function calculateWageMonthly() {
    const MonthlyWage = parseFloat(document.getElementById("monthly").value);
    const hourlyWage = document.getElementById("hour").value=(((MonthlyWage/(52/12))/5)/8).toFixed(2);
    const dailyWage = document.getElementById("daily").value = ((MonthlyWage/(52/12))/5).toFixed(2);
    const WeeklyWage = document.getElementById("weekly").value = (MonthlyWage/(52/12)).toFixed(2);
    const YearlyWage = document.getElementById("yearly").value = (WeeklyWage*(52/12)*12).toFixed(2);

    
}

function calculateWageYearly() {
    const YearlyWage = document.getElementById("yearly").value;
    const hourlyWage = document.getElementById("hour").value=(((YearlyWage/12/(52/12))/5)/8).toFixed(2);
    const dailyWage = document.getElementById("daily").value=(((YearlyWage/12)/(52/12)/5)).toFixed(2);
    const WeeklyWage = document.getElementById("weekly").value = ((YearlyWage / 12)/(52/12)).toFixed(2);
    const MonthlyWage = document.getElementById("monthly").value = (YearlyWage/12).toFixed(2);

}
