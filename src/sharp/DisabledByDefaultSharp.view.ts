import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DisabledByDefaultSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 3v18h18V3H3zm14 12.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z\"/>")
      .name("DisabledByDefaultSharp")
  }
}

export default DisabledByDefaultSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
