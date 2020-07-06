import React from "react";
import { render} from "@testing-library/react";

import Login from "../src/login";

function renderLoginForm() {
     render(<Login />);
  }

describe("<Login />", () => {
  test("should display a blank login form", () => {
    renderLoginForm();
  });
});