import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LooksTwoSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3H3v18h18V3zm-6 10h-4v2h4v2H9v-6h4V9H9V7h6v6z\"/>")
      .name("LooksTwoSharp")
  }
}

export default LooksTwoSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
