import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class QueueSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 6H2v16h16v-2H4V6zm18-4H6v16h16V2zm-3 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z\"/>")
      .name("QueueSharp")
  }
}

export default QueueSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
