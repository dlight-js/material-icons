import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class OfflinePinFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z\"/>")
      .name("OfflinePinFilled")
  }
}

export default OfflinePinFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
