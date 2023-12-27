import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LabelImportantSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 18.99h12.04L21 12l-4.97-7H4l5 7-5 6.99z\"/>")
      .name("LabelImportantSharp")
  }
}

export default LabelImportantSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
