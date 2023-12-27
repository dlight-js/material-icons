import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HourglassBottomFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m18 22-.01-6L14 12l3.99-4.01L18 2H6v6l4 4-4 3.99V22h12zM8 7.5V4h8v3.5l-4 4-4-4z\"/>")
      .name("HourglassBottomFilled")
  }
}

export default HourglassBottomFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
