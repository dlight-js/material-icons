import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BreakfastDiningSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17.85 3H6.14C4.15 3 2.36 4.39 2.05 6.36c-.27 1.75.59 3.29 1.95 4.09V21h16V10.45a3.996 3.996 0 0 0 1.95-4.11C21.63 4.38 19.83 3 17.85 3zm-1.44 10L12 17.42 7.59 13 12 8.59 16.41 13z\"/>")
      .name("BreakfastDiningSharp")
  }
}

export default BreakfastDiningSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
