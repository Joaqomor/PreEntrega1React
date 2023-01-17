import React from "react";
import {Route, Routes} from "react-router-dom";
import NotFound from "./NotFound";

function RoutesWithNotFound (props){
    const {children, path} = props;
    return(
        <Routes>
            {children}
            <Route path={path} element= {<NotFound />} />
        </Routes>
    );
}

export default RoutesWithNotFound

