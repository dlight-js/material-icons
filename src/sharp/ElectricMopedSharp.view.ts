import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class ElectricMopedSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M19 8.35V3h-5v2h3v2.65L13.52 12H10V7H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 8.35zM7 15c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z\"/><path d=\"M5 4h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM7 20h4v-2l6 3h-4v2z\"/>")
      .name("ElectricMopedSharp")
  }
}

export default ElectricMopedSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
