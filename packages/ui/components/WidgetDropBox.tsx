import { Reorder, AnimatePresence } from "framer-motion";
import { Tool } from "data";
export function WidgetDropBox({
  onDrop,
  onDragOver,
  onDragEnter,
  onDragEnterCapture,
  onDragLeave,
  isActiveDrop,
  widget,
  className,
  setWidgets,
}: {
  onDrop: any;
  onDragOver: any;
  onDragEnter?: any;
  onDragEnterCapture?: any;
  onDragLeave?: any;
  isActiveDrop: boolean;
  widget: Tool[];
  className?: string;
  setWidgets?: any;
}) {
  const haveWidgets = widget.length !== 0;
  if (haveWidgets) {
    return (
      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        onDragEnterCapture={onDragEnterCapture}
        onDragLeave={onDragLeave}
        className={`${
          className ? className : ""
        } transition duration-200 ease-in-out border  w-full p-2 min-h-full inline-flex flex-col items-center rounded-xl  ${
          isActiveDrop
            ? "outline-dashed outline-stone-600 outline-2 outline-offset-8 bg-white/70"
            : "bg-white"
        }`}
      >
        <Reorder.Group
          className="w-full flex-col space-y-2"
          axis="y"
          values={widget}
          onReorder={(ordererd: Tool[]) => setWidgets(ordererd)}
        >
          <AnimatePresence>
            {widget.map((tool: Tool, key: number) => (
              <Reorder.Item
                key={tool.type}
                id={tool.type}
                value={tool}
                className="pl-4 pr-2 overflow-hidden bg-stone-100 rounded-xl flex items-center justify-between"
              >
                <div className="inline-flex space-x-3 items-center cursor-grab h-12 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                    />
                  </svg>

                  <span className="font-mono uppercase text-sm">
                    {tool.title}
                  </span>
                </div>
                <div>
                  <button
                    className="bg-red-100 hover:bg-rose-200 p-2 rounded-lg"
                    onClick={() => {
                      const id = key;
                      const filterList = widget.filter(
                        (_id: Tool, key: number) => key !== id
                      );
                      setWidgets(filterList);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-red-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </Reorder.Item>
            ))}
          </AnimatePresence>
          {isActiveDrop && (
            <li className="h-12 bg-white rounded-xl flex items-center justify-center outline-1 outline-dashed outline-offset-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </li>
          )}
        </Reorder.Group>
      </div>
    );
  }

  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragEnterCapture={onDragEnterCapture}
      onDragLeave={onDragLeave}
      className={`${
        className ? className : ""
      } transition duration-200 ease-in-out w-full border h-full inline-flex flex-col justify-center items-center rounded-xl  ${
        isActiveDrop
          ? "outline-dashed outline-stone-600 outline-2 outline-offset-8 bg-white/70"
          : "bg-white"
      }`}
    >
      <span>
        {isActiveDrop ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        ) : (
          "Drag and Drop your component "
        )}
      </span>
    </div>
  );
}
