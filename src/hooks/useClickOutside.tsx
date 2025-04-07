import { RefObject, useEffect } from "react";

// 定义 handler 的类型：接收 MouseEvent 参数，无返回值
type ClickHandler = (event: MouseEvent) => void;
function useClickOutside(ref: RefObject<HTMLElement>, handler: ClickHandler) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
}

export default useClickOutside;
