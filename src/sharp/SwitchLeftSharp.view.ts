import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SwitchLeftSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M8.5 8.62v6.76L5.12 12 8.5 8.62M10 5l-7 7 7 7V5zm4 0v14l7-7-7-7z\"/>")
      .name("SwitchLeftSharp")
  }
}

export default SwitchLeftSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
