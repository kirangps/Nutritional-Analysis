import React from "react";
import dataProcessing from "./dataProcessing";


const FactCard = ({data}) => {
    let processed_data = dataProcessing(data);
    return(
        <section id="factCard">
            <p className="h2 m-0 pt-3" id="factTitle">Nutrition Facts</p>
            <table id="factTable">
                <thead>
                    <tr>
                        <th className="text-start">Amount Per Serving</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="calories text-start">Calories</th>
                        <td className="fw-bold">{processed_data.Calories}</td>
                    </tr>
                    <tr>
                        <td className="small-info thickBorder text-end fw-bold" colSpan="3">% Daily Value*</td>
                    </tr>
                    <tr>
                        <th className="factItems fw-bold">Total Fat {processed_data.totalNutrients.Total_Fat}</th>
                        <td className="factPercentage">{processed_data.daily_value.Total_Fat}</td>
                    </tr>
                    <tr>
                        <th className="factItems">Saturated Fat {processed_data.totalNutrients.Sat_Fat}</th>
                        <td className="factPercentage">{processed_data.daily_value.Sat_Fat}</td>
                    </tr>
                    <tr>
                        <th className="factItems">Trans Fat {processed_data.totalNutrients.Trans_Fat}</th>
                        <td className="factPercentage"></td>
                    </tr>
                    <tr>
                        <th className="factItems fw-bold">Cholesterol {processed_data.totalNutrients.Cholesterol}</th>
                        <td className="factPercentage">{processed_data.daily_value.Cholesterol}</td>
                    </tr>
                    <tr>
                        <th className="factItems fw-bold">Sodium {processed_data.totalNutrients.Sodium}</th>
                        <td className="factPercentage">{processed_data.daily_value.Sodium}</td>
                    </tr>
                    <tr>
                        <th className="factItems fw-bold">Total Carbohydrate {processed_data.totalNutrients.Total_Carbs}</th>
                        <td className="factPercentage">{processed_data.daily_value.Total_Carbs}</td>
                    </tr>
                    <tr>
                        <th className="factItems">Dietary Fiber {processed_data.totalNutrients.Dietary_Fiber}</th>
                        <td className="factPercentage">{processed_data.daily_value.Dietary_Fiber}</td>
                    </tr>
                    <tr>
                        <th className="factItems">Total Sugars {processed_data.totalNutrients.Total_Sugars}</th>
                        <td className="factPercentage"></td>
                    </tr>
                    <tr>
                        <th className="factItems">Includes - Added Sugars</th>
                        <td className="factPercentage"></td>
                    </tr>
                    <tr>
                        <th className="factItems fw-bold">Protein {processed_data.totalNutrients.Protein}</th>
                        <td className="factPercentage" >{processed_data.daily_value.Protein}</td>
                    </tr>
                    <tr>
                        <th className="factItems">Vitamin D {processed_data.totalNutrients.Vitamin_D}</th>
                        <td className="factPercentage">{processed_data.daily_value.Vitamin_D}</td>
                    </tr>
                    <tr>
                        <th className="factItems">Calcium {processed_data.totalNutrients.Calcium}</th>
                        <td className="factPercentage">{processed_data.daily_value.Calcium}</td>
                    </tr>
                    <tr>
                        <th className="factItems">Iron {processed_data.totalNutrients.Iron}</th>
                        <td className="factPercentage">{processed_data.daily_value.Iron}</td>
                    </tr>
                    <tr>
                        <th className="factItems">Potassium {processed_data.totalNutrients.Potassium}</th>
                        <td className="factPercentage">{processed_data.daily_value.Potassium}</td>
                    </tr>
                </tbody>
            </table>
            <p className="small-info mt-3">*Percent Daily Values are based on a 2000 calorie diet</p>
        </section>
    );
}

export default FactCard;