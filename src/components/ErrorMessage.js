import React from "react";

const ErrorMessage = () => {
    return(
        <div className="error text-danger mt-1">
            We cannot calculate the nutrition for some ingredients. Please check the ingredient spelling or if you have entered a quantities for the ingredients.
        </div>
    );
}

export default ErrorMessage;