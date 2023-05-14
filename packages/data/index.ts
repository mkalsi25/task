export type Tool = {
  title: string;
  type: string;
};

export const availableTool: Tool[] = [
  { title: "Label", type: "label" },
  { title: "Text Field", type: "text" },
  { title: "Email", type: "email" },
  { title: "Url", type: "url" },
  {
    title: "Text Area",
    type: "textarea",
  },
  { title: "Radio Button", type: "radio" },
  {
    title: "Check Box",
    type: "checkbox",
  },
  { title: "Divider", type: "divider" },
];
