import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PentagonFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m2 9 4 12h12l4-12-10-7z\"/>")
      .name("PentagonFilled")
  }
}

export default PentagonFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
