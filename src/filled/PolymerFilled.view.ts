import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PolymerFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z\"/>")
      .name("PolymerFilled")
  }
}

export default PolymerFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
