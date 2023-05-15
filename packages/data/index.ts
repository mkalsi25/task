export type Tool = {
  title: string;
  type: string;
};

export const availableTool: Tool[] = [
  { title: "Label", type: "label" },
  { title: "Text Field", type: "text" },
  { title: "Email", type: "email" },
  { title: "URL", type: "url" },
  {
    title: "Text Area",
    type: "textarea",
  },
  { title: "Radio ", type: "radio" },
  {
    title: "Checkbox",
    type: "checkbox",
  },
  { title: "Divider", type: "divider" },
  { title: "Hero Image", type: "heroImage" },
  { title: "Page", type: "page" },
  { title: "Heading", type: "heading" },
  { title: "Link", type: "link" },
  { title: "Video", type: "video" },
  { title: "Tables", type: "tables" },
];
