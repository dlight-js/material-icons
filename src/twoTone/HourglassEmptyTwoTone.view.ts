import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class HourglassEmptyTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M18 2H6v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2zm-2 14.5V20H8v-3.5l4-4 4 4zm0-9-4 4-4-4V4h8v3.5z\"/>")
      .name("HourglassEmptyTwoTone")
  }
}

export default HourglassEmptyTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>