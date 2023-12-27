import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CallReceivedFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 5.41 18.59 4 7 15.59V9H5v10h10v-2H8.41z\"/>")
      .name("CallReceivedFilled")
  }
}

export default CallReceivedFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
