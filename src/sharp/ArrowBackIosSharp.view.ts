import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowBackIosSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17.51 3.87 15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z\"/>")
      .name("ArrowBackIosSharp")
  }
}

export default ArrowBackIosSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
