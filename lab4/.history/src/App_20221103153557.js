import "typeface-roboto";
import React from "react";
import FormGroup from "@mui/material/FormGroup";
import MyTextInput from "./components/MyTextInput";
import MySelect from "./components/MySelect";

export default function App() {
  return (
    <FormGroup style={{ width: 200, margin: 10 }}>
      <MyTextInput />
      <MySelect />
    </FormGroup>
  );
}
