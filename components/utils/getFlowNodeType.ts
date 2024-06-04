import { HandlePosition, IHandleType } from "@/types"

export function getFlowNodeType(position: HandlePosition): IHandleType | null {
    if (position === "right") {
        return {
            source: "right",
            target: "left"
        }
    } else if (position === "bottom") {
        return {
            source: "bottom",
            target: "top"
        }
    } else if (position === "left") {
        return {
            source: "left",
            target: "right"
        }
    } else if (position === "top") {
        return {
            source: "top",
            target: "bottom"
        }
    } else {
        return null
    }
}
