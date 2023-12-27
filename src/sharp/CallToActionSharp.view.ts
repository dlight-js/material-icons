import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CallToActionSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M23 3H1v18h22V3zm-2 16H3v-3h18v3z\"/>")
      .name("CallToActionSharp")
  }
}

export default CallToActionSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
