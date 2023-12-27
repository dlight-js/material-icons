import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SmartDisplaySharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 4H2v16h20V4zM9.5 16.5v-9l7 4.5-7 4.5z\"/>")
      .name("SmartDisplaySharp")
  }
}

export default SmartDisplaySharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
