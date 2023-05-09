import React from "react";

import { CommonHeader } from "./CommonHeader";

import "./_example.scss";
import { SamplePage } from "./SamplePage";

export const Example = () => (
  <div className="example">
    <CommonHeader className='header-area' />
    <div className='content-area'>
      <SamplePage />
    </div>
  </div>
);

export default Example;
