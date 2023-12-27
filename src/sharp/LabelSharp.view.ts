import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LabelSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17.03 5 3 5.01v13.98l14.03.01L22 12l-4.97-7z\"/>")
      .name("LabelSharp")
  }
}

export default LabelSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
