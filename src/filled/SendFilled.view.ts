import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SendFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z\"/>")
      .name("SendFilled")
  }
}

export default SendFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
