import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class StopSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 6h12v12H6V6z\"/>")
      .name("StopSharp")
  }
}

export default StopSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
