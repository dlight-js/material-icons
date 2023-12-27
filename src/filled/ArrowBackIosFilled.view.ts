import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowBackIosFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z\"/>")
      .name("ArrowBackIosFilled")
  }
}

export default ArrowBackIosFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
