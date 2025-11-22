import { render as testRenderer } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import React from "react";

export const render = (component: React.ReactNode | React.ReactElement) => {
  return testRenderer(<BrowserRouter>{component}</BrowserRouter>);
};
