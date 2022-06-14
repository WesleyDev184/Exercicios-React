import React from 'react';

function DescriptionWithLink(props) {
  return (
    <div>
      <p>{props.descripion}</p>
      <a href={props.link}>Click aqui para saber mais</a>
    </div>
  );
}

export default DescriptionWithLink;
