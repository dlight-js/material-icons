import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LabelOffSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m22 12-4.97-7H8.66l10.7 10.73zM2 4l1 1v14h14l2 2 1.41-1.41L3.44 2.62z\"/>")
      .name("LabelOffSharp")
  }
}

export default LabelOffSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
