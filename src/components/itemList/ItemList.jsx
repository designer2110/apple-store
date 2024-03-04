import React from "react";
import { useState } from "react";
import FlexWrapper from "../flexWrapper/FlexWrapper";
import Card from "../Card/Card";
import "./itemlist.css";

function ItemList(props) {
  const [query, setQuery] = useState("");
  return (
    <div>
      <input type="text" placeholder=" Buscar productos..." className="search" onChange={(e) => setQuery(e.target.value)}></input>
    <FlexWrapper>
      {props.products.filter(product=>product.title.toLowerCase().includes(query)).map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </FlexWrapper>
    </div>
  );
}

export default ItemList;
