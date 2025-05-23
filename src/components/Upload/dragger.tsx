import { FC, useState, DragEvent, ReactNode } from "react";
import classNames from "classnames";
import React from "react";

interface DraggerProps {
  onFile: (files: FileList) => void;
  children?: ReactNode;
}

export const Dragger: FC<DraggerProps> = (props) => {
  const { onFile, children } = props;
  const [dragOver, setDragOver] = useState(false);
  const klass = classNames("as-uploader-dragger", {
    "is-dragover": dragOver,
  });
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDragOver(false);
    console.log("inside drag", e.dataTransfer.files);
    onFile(e.dataTransfer.files);
  };
  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault();
    setDragOver(over);
  };
  return (
    <div
      className={klass}
      onDragOver={(e) => {
        handleDrag(e, true);
      }}
      onDragLeave={(e) => {
        handleDrag(e, false);
      }}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

export default Dragger;
