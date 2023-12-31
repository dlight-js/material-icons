import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ShopTwoSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 9H1v13h18v-2H3V9zm15-4V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H5v13h18V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z\"/>")
      .name("ShopTwoSharp")
  }
}

export default ShopTwoSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
