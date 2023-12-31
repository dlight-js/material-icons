import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RoofingFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 18h-2v-2h2v2zm2-4H9v6h6v-6zm4-4.7V4h-3v2.6L12 3 2 12h3l7-6.31L19 12h3l-3-2.7z\"/>")
      .name("RoofingFilled")
  }
}

export default RoofingFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
