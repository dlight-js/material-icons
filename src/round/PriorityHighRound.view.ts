import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PriorityHighRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<circle cx=\"12\" cy=\"19\" r=\"2\"/><path d=\"M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z\"/>")
      .name("PriorityHighRound")
  }
}

export default PriorityHighRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
