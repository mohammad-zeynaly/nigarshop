import React from "react";

function FooterList(props) {
  return (
    <>
      <h5 className="pb-2 text-[#474646] text-[15px]">{props.title}</h5>
      <li className="text-sm pb-[6px]">
        <a className="text-[#757575]" href="#">
          {props.listItem}
        </a>
      </li>
    </>
  );
}

export default FooterList;
