import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SegmentFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 18h12v-2H9v2zM3 6v2h18V6H3zm6 7h12v-2H9v2z\"/>")
      .name("SegmentFilled")
  }
}

export default SegmentFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
