import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PunchClockSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 6h-3V1H6v5H3v16h18V6zM8 3h8v3H8V3zm4 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z\"/><path d=\"M12.5 11.5h-1v2.71l1.64 1.64.71-.71-1.35-1.35z\"/>")
      .name("PunchClockSharp")
  }
}

export default PunchClockSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
