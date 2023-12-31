import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ChairSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 13h10V7h3V3H4v4h3z\"/><path d=\"M23 9h-4v6H5V9H1v10h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1h3V9z\"/>")
      .name("ChairSharp")
  }
}

export default ChairSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
