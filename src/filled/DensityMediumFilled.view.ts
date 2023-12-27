import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DensityMediumFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3z\"/>")
      .name("DensityMediumFilled")
  }
}

export default DensityMediumFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
