import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SegmentRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 18h10c.55 0 1-.45 1-1s-.45-1-1-1H10c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm7 6h10c.55 0 1-.45 1-1s-.45-1-1-1H10c-.55 0-1 .45-1 1s.45 1 1 1z\"/>")
      .name("SegmentRound")
  }
}

export default SegmentRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
