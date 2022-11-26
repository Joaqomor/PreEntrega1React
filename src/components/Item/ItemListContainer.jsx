import React from 'react';
import Item from "../Item/Item";

function ItemListContainer () {

  const item = {
    img: "...",
    title: "Esta planta",
    par: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, dolor! Vero maxime suscipit aliquid quibusdam quo tempora doloribus impedit nobis quam, quis optio autem dolore nam porro, ea maiores laboriosam!",
    link: "#",
  };

  return (
    <div className="users-container">
      <Item img={item.img} title={item.title} par={item.par} link={item.link} />
    </div>
  );
}

export default ItemListContainer


