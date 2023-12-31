import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class StarRateSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z\"/>")
      .name("StarRateSharp")
  }
}

export default StarRateSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
