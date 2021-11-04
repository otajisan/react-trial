import React from "react";

export const GreetingMessage = (props: {children: string}) => {
  const messageStyle = {
    color: 'green',
    fontSize: '20px'
  };

  return <p style={messageStyle}>{props.children}</p>;
};