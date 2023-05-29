import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["text", "contained", "outlined"] },
    // children: { control: "text" },
    color: { control: "select", options: ["success", "error", "secondary"] },
    size: { control: "select", options: ["small", "medium", "large"] },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args}>{args.text}</Button>;

export const TextButton = Template.bind({});
TextButton.args = {
  variant: "text",
  text: "Click me",
  color: "secondary",
  size: "medium",
};

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  text: "Click me",
  color: "secondary",
  size: "medium",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  text: "Click me",
  color: "secondary",
  size: "medium",
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
  text: "Click me",
  color: "success",
  size: "medium",
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  variant: "contained",
  text: "Click me",
  color: "success",
  size: "small",
};

export const Icon = () => (
  <Button variant="outlined" startIcon={<DeleteIcon />}>
    Delete
  </Button>
);
