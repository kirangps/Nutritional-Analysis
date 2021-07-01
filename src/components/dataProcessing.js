
const dataProcessing = (props) => {

    console.log(props);
    let processed_data = {
        Calories : 0,
        totalNutrients: {
            Total_Fat: "",
            Sat_Fat: "",
            Trans_Fat:  "",
            Cholesterol: "",
            Sodium: "",
            Total_Carbs: "",
            Dietary_Fiber:  "",
            Total_Sugars: "",
            Protein: "",
            Vitamin_D: "",
            Calcium: "",
            Iron: "",
            Potassium: ""
        },
        daily_value: {
            Total_Fat: "",
            Sat_Fat: "",
            Cholesterol: "",
            Sodium: "",
            Total_Carbs: "",
            Dietary_Fiber:  "",
            Protein: "",
            Vitamin_D: "",
            Calcium: "",
            Iron: "",
            Potassium: ""
        },
        units : {
            Total_Fat: "",
            Sat_Fat: "",
            Trans_Fat:  "",
            Cholesterol: "",
            Sodium: "",
            Total_Carbs: "",
            Dietary_Fiber:  "",
            Total_Sugars: "",
            Protein: "",
            Vitamin_D: "",
            Calcium: "",
            Iron: "",
            Potassium: ""
        }
    }

    props.forEach(data => {
        if(!data.error) {
            let totalNutrients = data.totalNutrients;
            let totalDaily = data.totalDaily;

            // calories
            processed_data.Calories += data.calories;

            // totalNutrients value
            processed_data.totalNutrients.Total_Fat = +processed_data.totalNutrients.Total_Fat + +((totalNutrients.FAT)?totalNutrients.FAT.quantity:"");
            processed_data.totalNutrients.Sat_Fat = +processed_data.totalNutrients.Sat_Fat + +((totalNutrients.FASAT)?totalNutrients.FASAT.quantity:"");
            processed_data.totalNutrients.Trans_Fat = +processed_data.totalNutrients.Trans_Fat + +((totalNutrients.FATRN)?totalNutrients.FATRN.quantity:"");
            processed_data.totalNutrients.Cholesterol = +processed_data.totalNutrients.Cholesterol + +((totalNutrients.CHOLE)?totalNutrients.CHOLE.quantity:"");
            processed_data.totalNutrients.Sodium = +processed_data.totalNutrients.Sodium + +((totalNutrients.NA)?totalNutrients.NA.quantity:"");
            processed_data.totalNutrients.Total_Carbs = +processed_data.totalNutrients.Total_Carbs + +((totalNutrients.CHOCDF)?totalNutrients.CHOCDF.quantity:"");
            processed_data.totalNutrients.Dietary_Fiber = +processed_data.totalNutrients.Dietary_Fiber + +((totalNutrients.FIBTG)?totalNutrients.FIBTG.quantity:"");
            processed_data.totalNutrients.Total_Sugars = +processed_data.totalNutrients.Total_Sugars + +((totalNutrients.SUGAR)?totalNutrients.SUGAR.quantity:"");
            processed_data.totalNutrients.Protein = +processed_data.totalNutrients.Protein + +((totalNutrients.PROCNT)?totalNutrients.PROCNT.quantity:"");
            processed_data.totalNutrients.Vitamin_D = +processed_data.totalNutrients.Vitamin_D + +((totalNutrients.VITD)?totalNutrients.VITD.quantity:"");
            processed_data.totalNutrients.Calcium = +processed_data.totalNutrients.Calcium + +((totalNutrients.CA)?totalNutrients.CA.quantity:"");
            processed_data.totalNutrients.Iron = +processed_data.totalNutrients.Iron + +((totalNutrients.FE)?totalNutrients.FE.quantity:"");
            processed_data.totalNutrients.Potassium = +processed_data.totalNutrients.Potassium + +((totalNutrients.K)?totalNutrients.K.quantity:"");

            // daily_value
            processed_data.daily_value.Total_Fat = +processed_data.daily_value.Total_Fat + +((totalDaily.FAT)?totalDaily.FAT.quantity:"");
            processed_data.daily_value.Sat_Fat = +processed_data.daily_value.Sat_Fat + +((totalDaily.FASAT)?totalDaily.FASAT.quantity:"");
            processed_data.daily_value.Cholesterol = +processed_data.daily_value.Cholesterol + +((totalDaily.CHOLE)?totalDaily.CHOLE.quantity:"");
            processed_data.daily_value.Sodium = +processed_data.daily_value.Sodium + +((totalDaily.NA)?totalDaily.NA.quantity:"");
            processed_data.daily_value.Total_Carbs = +processed_data.daily_value.Total_Carbs + +((totalDaily.CHOCDF)?totalDaily.CHOCDF.quantity:"");
            processed_data.daily_value.Dietary_Fiber = +processed_data.daily_value.Dietary_Fiber + +((totalDaily.FIBTG)?totalDaily.FIBTG.quantity:"");
            processed_data.daily_value.Protein = +processed_data.daily_value.Protein + +((totalDaily.PROCNT)?totalDaily.PROCNT.quantity:"");
            processed_data.daily_value.Vitamin_D = +processed_data.daily_value.Vitamin_D + +((totalDaily.VITD)?totalDaily.VITD.quantity:"");
            processed_data.daily_value.Calcium = +processed_data.daily_value.Calcium + +((totalDaily.CA)?totalDaily.CA.quantity:"");
            processed_data.daily_value.Iron = +processed_data.daily_value.Iron + +((totalDaily.FE)?totalDaily.FE.quantity:"");
            processed_data.daily_value.Potassium = +processed_data.daily_value.Potassium + +((totalDaily.K)?totalDaily.K.quantity:"");

            // totalNutrients unit
            processed_data.units.Total_Fat = (totalNutrients.FAT)?totalNutrients.FAT.unit:processed_data.units.Total_Fat;
            processed_data.units.Sat_Fat = (totalNutrients.FASAT)?totalNutrients.FASAT.unit:processed_data.units.Sat_Fat;
            processed_data.units.Trans_Fat = (totalNutrients.FATRN)?totalNutrients.FATRN.unit:processed_data.units.Trans_Fat;
            processed_data.units.Cholesterol = (totalNutrients.CHOLE)?totalNutrients.CHOLE.unit:processed_data.units.Cholesterol;
            processed_data.units.Sodium = (totalNutrients.NA)?totalNutrients.NA.unit:processed_data.units.Sodium;
            processed_data.units.Total_Carbs = (totalNutrients.CHOCDF)?totalNutrients.CHOCDF.unit:processed_data.units.Total_Carbs;
            processed_data.units.Dietary_Fiber = (totalNutrients.FIBTG)?totalNutrients.FIBTG.unit:processed_data.units.Dietary_Fiber;
            processed_data.units.Total_Sugars = (totalNutrients.SUGAR)?totalNutrients.SUGAR.unit:processed_data.units.Total_Sugars;
            processed_data.units.Protein = (totalNutrients.PROCNT)?totalNutrients.PROCNT.unit:processed_data.units.Protein;
            processed_data.units.Vitamin_D = (totalNutrients.VITD)?totalNutrients.VITD.unit:processed_data.units.Vitamin_D;
            processed_data.units.Calcium = (totalNutrients.CA)?totalNutrients.CA.unit:processed_data.units.Calcium;
            processed_data.units.Iron = (totalNutrients.FE)?totalNutrients.FE.unit:processed_data.units.Iron;
            processed_data.units.Potassium = (totalNutrients.K)?totalNutrients.K.unit:processed_data.units.Potassium;

        }
    });
    
    processed_data.Calories = Math.round(processed_data.Calories);

    // Concatenating units and round off
    for(let element in processed_data.totalNutrients) {
        if(processed_data.totalNutrients[element]==="") {
            element = "-";
        }
        else {
            processed_data.totalNutrients[element] = ((processed_data.totalNutrients[element]===0)? 0: processed_data.totalNutrients[element].toFixed(1)) +" "+ processed_data.units[element];
        }
    }

    // Concatenating % and round off
    for(let element in processed_data.daily_value) {
        if(processed_data.daily_value[element]==="") {
            processed_data.daily_value[element] = "-";
        }
        else {
            processed_data.daily_value[element] = Math.round(processed_data.daily_value[element]) + " %";
        }
    } 
    
    return(processed_data);
}

export default dataProcessing;