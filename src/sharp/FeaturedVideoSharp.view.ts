import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FeaturedVideoSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M23 3H1v18h22V3zm-11 9H3V5h9v7z\"/>")
      .name("FeaturedVideoSharp")
  }
}

export default FeaturedVideoSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
