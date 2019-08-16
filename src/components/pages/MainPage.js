import React from "react";
import ItemIndex from "../pages/ItemIndex";
import ItemForm from "../forms/ItemForm";
import RecipeForm from "../forms/RecipeForm";

function MainPage(){
    return(
        <div>
            <div className="row">
                <div className="col">
                    {/* <ItemForm/> */}
                    <RecipeForm/>
                </div>
                <div className="col">
                    <ItemIndex/>
                </div>
            </div>
        </div>
    )

}

export default MainPage;