import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TryFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6.43 9.57L12 15l-1.57-3.43L7 10l3.43-1.57L12 5l1.57 3.43L17 10l-3.43 1.57z\"/>")
      .name("TryFilled")
  }
}

export default TryFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
