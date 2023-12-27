import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RectangleFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 4h20v16H2z\"/>")
      .name("RectangleFilled")
  }
}

export default RectangleFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
