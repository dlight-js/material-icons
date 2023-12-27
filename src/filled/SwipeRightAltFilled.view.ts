import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SwipeRightAltFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13.9 11a5 5 0 1 0 0 2h4.27l-1.59 1.59L18 16l4-4-4-4-1.41 1.41L18.17 11H13.9z\"/>")
      .name("SwipeRightAltFilled")
  }
}

export default SwipeRightAltFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
