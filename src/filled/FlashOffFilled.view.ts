import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FlashOffFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3.27 3 2 4.27l5 5V13h3v9l3.58-6.14L17.73 20 19 18.73 3.27 3zM17 10h-4l4-8H7v2.18l8.46 8.46L17 10z\"/>")
      .name("FlashOffFilled")
  }
}

export default FlashOffFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
