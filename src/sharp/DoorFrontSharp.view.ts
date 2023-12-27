import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DoorFrontSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 19V3H5v16H3v2h18v-2h-2zm-4-6h-2v-2h2v2z\"/>")
      .name("DoorFrontSharp")
  }
}

export default DoorFrontSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
