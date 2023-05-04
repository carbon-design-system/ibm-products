import React from "react";

import { CommonHeader } from "./CommonHeader";
import { Content } from "@carbon/react";

import "./_example.scss";
import { SamplePage } from "./SamplePage";

export const Example = () => (
  <>
    <CommonHeader className='header-area' />
    <Content className='content-area'>
      <SamplePage />
    </Content>
  </>
);

export default Example;
