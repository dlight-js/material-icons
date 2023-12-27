import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FeaturedVideoFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z\"/>")
      .name("FeaturedVideoFilled")
  }
}

export default FeaturedVideoFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
