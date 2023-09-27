import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FiberManualRecordFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<circle cx=\"12\" cy=\"12\" r=\"8\"/>")
      .name("FiberManualRecordFilled")
  }
}

export default FiberManualRecordFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>