import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DoubleArrowSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15.5 5H11l5 7-5 7h4.5l5-7z\"/><path d=\"M8.5 5H4l5 7-5 7h4.5l5-7z\"/>")
      .name("DoubleArrowSharp")
  }
}

export default DoubleArrowSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
