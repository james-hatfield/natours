import React from "react";
import green from "@material-ui/core/colors/green";

const LinearGradient = (svgProps: any) => (
  <svg {...svgProps}>
    <defs>
      <linearGradient id="gradient1">
        <stop offset="20%" stopColor={green[300]} />
        <stop offset="80%" stopColor={green[600]} />
      </linearGradient>
    </defs>
    {React.cloneElement(svgProps.children[0], {
      fill: "url(#gradient1)",
    })}
  </svg>
);
export default LinearGradient;
