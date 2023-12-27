import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class EastFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z\"/>")
      .name("EastFilled")
  }
}

export default EastFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
