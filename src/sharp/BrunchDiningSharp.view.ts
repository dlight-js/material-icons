import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BrunchDiningSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 8h2V4h-2v4zm-2 14H2v-2h14v2zm2-6.11-.4-.42a5.852 5.852 0 0 1-1.6-4V2h6v9.51c0 1.46-.54 2.87-1.53 3.94l-.47.52V20h2v2h-4v-6.11zM7 16v-2h4v2h5v2H2v-2h5z\"/>")
      .name("BrunchDiningSharp")
  }
}

export default BrunchDiningSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
