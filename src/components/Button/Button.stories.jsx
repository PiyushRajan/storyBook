import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "text" },
    children: { control: "text" },
    color: { control: "text" },
    size: { control: "text" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const TextButton = Template.bind({});
TextButton.args = {
  variant: "text",
  children: "Click me",
};

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  children: "Click me",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  children: "Click me",
};

export const HandleClick = () => (
  <Button
    onClick={() => {
      alert("clicked");
    }}
    variant="contained"
  >
    Click me
  </Button>
);

export const Color = Template.bind({});
Color.args = {
  variant: "contained",
  children: "Click me",
  color: "success",
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  variant: "contained",
  children: "Click me",
  color: "success",
  size: "small",
};

export const Icon = () => (
  <Button variant="outlined" startIcon={<DeleteIcon />}>
    Delete
  </Button>
);
