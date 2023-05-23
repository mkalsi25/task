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

export const data = [
  {
    title: "USA",
    description: "A Land of Opportunities",
    image:
      "https://images.unsplash.com/photo-1682686580186-b55d2a91053c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2575&q=80",
  },
  {
    title: "England",
    description: "A Land of Royals",
    image:
      "https://images.unsplash.com/photo-1682686580186-b55d2a91053c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2575&q=80",
  },
  {
    title: "Germany",
    description: "A Land of Histories",
    image:
      "https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
  },
  {
    title: "India",
    description: "A Land of Rich Histories And Wonders",
    image:
      "https://images.unsplash.com/photo-1682687220566-5599dbbebf11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2575&q=80",
  },
];

export type Tool = {
  title: string;
  type: string;
};
