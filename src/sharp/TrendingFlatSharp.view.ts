import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TrendingFlatSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m22 12-4-4v3H3v2h15v3l4-4z\"/>")
      .name("TrendingFlatSharp")
  }
}

export default TrendingFlatSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
