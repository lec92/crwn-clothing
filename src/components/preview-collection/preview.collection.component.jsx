import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item2, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          /* <div key={item.id}>{item.name}</div> */
          <CollectionItem key={id} {...otherItemProps}></CollectionItem>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
