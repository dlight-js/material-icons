import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VideocamFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z\"/>")
      .name("VideocamFilled")
  }
}

export default VideocamFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
