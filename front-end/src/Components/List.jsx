import React from "react";

const List = ({id,title,del}) =>{

    return(
    <div>
        <button onClick={() => del(id)}>delete</button>
        <li style={{ display: 'inline' }}>
              {title}
        </li>
        <br></br>
    </div>
    );

}

export default List;