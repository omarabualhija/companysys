import React from 'react'
import {Route,Switch } from "react-router-dom";
import {Order} from "../Orders/Order"
export const Routers = (props) => {
   
    return (
        <div>
      
<Switch>
<Route exact path="#" ></Route>
<Route exact path="#" ></Route>
<Route exact path="#" ></Route>
<Route exact path="/Order" ><Order {...props} /></Route>
<Route exact path="#" ></Route>
</Switch>
        </div>
    )
}
