import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FastRewindFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11 18V6l-8.5 6 8.5 6zm.5-6 8.5 6V6l-8.5 6z\"/>")
      .name("FastRewindFilled")
  }
}

export default FastRewindFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
