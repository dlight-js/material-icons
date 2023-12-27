import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VideocamSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 10.5V6H3v12h14v-4.5l4 4v-11l-4 4z\"/>")
      .name("VideocamSharp")
  }
}

export default VideocamSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
