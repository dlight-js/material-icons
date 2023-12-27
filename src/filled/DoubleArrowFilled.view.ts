import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DoubleArrowFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15.5 5H11l5 7-5 7h4.5l5-7z\"/><path d=\"M8.5 5H4l5 7-5 7h4.5l5-7z\"/>")
      .name("DoubleArrowFilled")
  }
}

export default DoubleArrowFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
