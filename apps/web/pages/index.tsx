import React, { useState } from "react";
import {
  WidgetDropBoxContainer,
  Widgets,
  WidgetDropBox,
  Container,
} from "ui/components";
import WidgetsContainer from "ui/components/WidgetsContainer";
import { availableTool, Tool } from "data";
import Head from "next/head";
export default function HomePage() {
  const [widget, setWidget] = useState<Tool[]>([]);
  const [isActiveDrop, setIsActiveDrop] = useState(false);
  const handleOnDrag = (e: DragEvent, tool: Tool) => {
    try {
      setIsActiveDrop(true);
      const tools = JSON.stringify(tool);
      e.dataTransfer.setData("tool", tools);
    } catch (error) {
      return;
    }
  };
  const handleOnDrop = (e: DragEvent) => {
    try {
      const toolString = e.dataTransfer.getData("tool") as any;
      if (!toolString) {
        setIsActiveDrop(false);
        throw new Error("No Tool Dropped!");
      }
      const tool = JSON.parse(toolString) satisfies Tool;
      setWidget([...widget, tool]);
      setIsActiveDrop(false);
    } catch (error) {
      return;
    }
  };

  const handleOnDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Head>
        <title>Drag `N` Dop</title>
      </Head>
      <WidgetDropBoxContainer>
        <WidgetDropBox
          onDrop={(e: any) => handleOnDrop(e)}
          onDragOver={(e: any) => handleOnDragOver(e)}
          onDragEnter={(e: any) => setIsActiveDrop(true)}
          onDragLeave={(e: any) => setIsActiveDrop(false)}
          setWidgets={setWidget}
          isActiveDrop={isActiveDrop}
          widget={widget}
        />
      </WidgetDropBoxContainer>
      <WidgetsContainer>
        <Widgets
          widgets={availableTool}
          onDragStart={handleOnDrag}
          onDragLeave={() => setIsActiveDrop(false)}
        />
      </WidgetsContainer>
    </Container>
  );
}
