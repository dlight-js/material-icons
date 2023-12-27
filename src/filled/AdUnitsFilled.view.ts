import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AdUnitsFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zM8 6h8v2H8z\"/>")
      .name("AdUnitsFilled")
  }
}

export default AdUnitsFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
