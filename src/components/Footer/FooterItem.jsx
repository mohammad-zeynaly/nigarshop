import React from "react";

function FooterItem(props) {
  return (
    <div className="flex items-center">
      <div className="">{props.element}</div>
      <div className="mr-4">
        <h6 className="text-[15px] text-[#666666]">{props.title}</h6>
        <span className="pt-2 text-sm text-[#757575]">{props.caption}</span>
      </div>
    </div>
  );
}

export default FooterItem;
