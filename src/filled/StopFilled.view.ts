import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class StopFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 6h12v12H6z\"/>")
      .name("StopFilled")
  }
}

export default StopFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
