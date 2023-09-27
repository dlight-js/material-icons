import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class CallReceivedFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M20 5.41 18.59 4 7 15.59V9H5v10h10v-2H8.41z\"/>")
      .name("CallReceivedFilled")
  }
}

export default CallReceivedFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
