import React from "react";



function layoutStyle(props){
    return (
        <>
        <header
        style={ 
            {
                backgroundColor: "blue",
                color: "white",
                padding: "10px 0"
            }
        
        }
        >
            항상출력될 머리글 입니다
        </header>
        {props.children}
        </>
    );
}
export default layoutStyle