import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FastForwardSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m4 18 8.5-6L4 6v12zm9-12v12l8.5-6L13 6z\"/>")
      .name("FastForwardSharp")
  }
}

export default FastForwardSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
