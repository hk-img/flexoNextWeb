"use client";
import Svg from "@/components/svg";
import { toast } from "sonner";

export function ShowToast(message, type = "success") {
  toast.custom((t) => (
    <div>
      <div
        onClick={() => toast.dismiss(t)}
        className={`flex items-center gap-3 hover:shadow-[0px_0px_12px_#000] shadow-[0px_0px_12px_#999] rounded-[3px] p-3 w-[300px] cursor-pointer select-none
        ${
          type === "success" ? "bg-[#51a351] text-white": type == "error" ? "bg-[#BD362F] text-white" : 
          "bg-[#f89406] text-white"
        }`}
      >
        <div>
          <Svg
            name={type === "success" ? "checkTic" : type === "error" ? "close" : "triangle_warning"}
            className="size-5 cursor-pointer"
          />
        </div>
        <div>
          {type == "warning" && <h5>Warning</h5>}
          <span className="font-normal">{message}</span>
        </div>
      </div>
    </div>
  ));
}
