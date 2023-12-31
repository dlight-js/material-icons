import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CurtainsClosedRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-1zM11 5h2v14h-2V5z\"/>")
      .name("CurtainsClosedRound")
  }
}

export default CurtainsClosedRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
