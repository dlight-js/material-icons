import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class GiteSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 6H9V4H7v2H6l-4 4v9h20v-9l-4-4zM4 12h10v5H4v-5zm16 5h-4v-6.17l2-2 2 2V17z\"/>")
      .name("GiteSharp")
  }
}

export default GiteSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
