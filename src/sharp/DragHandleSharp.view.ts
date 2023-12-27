import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DragHandleSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 9H4v2h16V9zM4 15h16v-2H4v2z\"/>")
      .name("DragHandleSharp")
  }
}

export default DragHandleSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
