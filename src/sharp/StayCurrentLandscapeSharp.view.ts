import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class StayCurrentLandscapeSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M1 19h22V5H1v14zM19 7v10H5V7h14z\"/>")
      .name("StayCurrentLandscapeSharp")
  }
}

export default StayCurrentLandscapeSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>