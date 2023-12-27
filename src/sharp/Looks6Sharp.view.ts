import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Looks6Sharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11 15h2v-2h-2v2zM21 3H3v18h18V3zm-6 6h-4v2h4v6H9V7h6v2z\"/>")
      .name("Looks6Sharp")
  }
}

export default Looks6Sharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
