import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FiberDvrSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17.5 10.5h2v1h-2v-1zm-13 0h2v3h-2v-3zM23 3H1v18h22V3zM8 13.5c0 .85-.65 1.5-1.5 1.5H3V9h3.5c.85 0 1.5.65 1.5 1.5v3zm4.62 1.5h-1.5L9.37 9h1.5l1 3.43 1-3.43h1.5l-1.75 6zM21 12.9h-.9L21 15h-1.5l-.85-2H17.5v2H16V9h5v3.9z\"/>")
      .name("FiberDvrSharp")
  }
}

export default FiberDvrSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
