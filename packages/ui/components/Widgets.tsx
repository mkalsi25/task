import { Tool } from "data";

export function Widgets({
  widgets,
  onDragStart,
  onDragLeave,
}: {
  widgets: Tool[];
  onDragStart: any;
  onDragLeave: any;
}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {widgets.map((tool: Tool, key: number) => (
        <div
          draggable
          key={key}
          onDragStart={(e) => onDragStart(e, tool)}
          onDragLeave={onDragLeave}
          className={`bg-white border cursor-grab focus:cursor-grabbing rounded-md font-sans capitalize text-sm inline-flex items-center justify-center w-full h-16`}
        >
          {tool.title}
        </div>
      ))}
    </div>
  );
}
