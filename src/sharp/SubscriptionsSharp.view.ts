import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SubscriptionsSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 8v12H2V10h20zm-6 6-6-3.27v6.53L16 16z\"/>")
      .name("SubscriptionsSharp")
  }
}

export default SubscriptionsSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
