import "typeface-roboto";
import React from "react";
import FormGroup from "@mui/material/FormGroup";
import MyTextInput from "./component/MyTextInput";
import MySelect from "./component/MySelect";

export default function App() {
  return (
    <FormGroup style={{ width: 200, margin: 10 }}>
      <MyTextInput />
      <MySelect />
    </FormGroup>
  );
}
