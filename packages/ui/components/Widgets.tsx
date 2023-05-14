export function Widgets({
  widgets,
  onDragStart,
  onDragLeave,
}: {
  widgets: any[];
  onDragStart: any;
  onDragLeave: any;
}) {
  return (
    <div className=" flex justify-center flex-wrap gap-4">
      {widgets.map((tool: any, key: number) => (
        <div
          draggable
          key={key}
          onDragStart={(e) => onDragStart(e, tool)}
          onDragLeave={onDragLeave}
          className={`bg-white cursor-grab focus:cursor-grabbing rounded-md font-mono uppercase text-sm inline-flex items-center justify-center w-[46%] h-16`}
        >
          {tool.title}
        </div>
      ))}
    </div>
  );
}
