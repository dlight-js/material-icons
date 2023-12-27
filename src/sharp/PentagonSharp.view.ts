import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PentagonSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m2 9 4 12h12l4-12-10-7z\"/>")
      .name("PentagonSharp")
  }
}

export default PentagonSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
