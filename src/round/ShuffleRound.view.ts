import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class ShuffleRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M10.59 9.17 6.12 4.7a.996.996 0 1 0-1.41 1.41l4.46 4.46 1.42-1.4zm4.76-4.32 1.19 1.19L4.7 17.88a.996.996 0 1 0 1.41 1.41L17.96 7.46l1.19 1.19a.5.5 0 0 0 .85-.36V4.5c0-.28-.22-.5-.5-.5h-3.79a.5.5 0 0 0-.36.85zm-.52 8.56-1.41 1.41 3.13 3.13-1.2 1.2a.5.5 0 0 0 .36.85h3.79c.28 0 .5-.22.5-.5v-3.79c0-.45-.54-.67-.85-.35l-1.19 1.19-3.13-3.14z\"/>")
      .name("ShuffleRound")
  }
}

export default ShuffleRound as Pretty as Typed<DLightIconType, HTMLSpanElement>