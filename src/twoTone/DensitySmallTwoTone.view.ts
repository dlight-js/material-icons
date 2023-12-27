import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DensitySmallTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 2h18v2H3zm0 18h18v2H3zm0-6h18v2H3zm0-6h18v2H3z\"/>")
      .name("DensitySmallTwoTone")
  }
}

export default DensitySmallTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
