import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FlashOnFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 2v11h3v9l7-12h-4l4-8z\"/>")
      .name("FlashOnFilled")
  }
}

export default FlashOnFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
