import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Shop2Outlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 9H1v11c0 1.11.89 2 2 2h16v-2H3V9z\"/><path d=\"M18 5V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm9 13H7V7h14v9z\"/><path d=\"M12 8v7l5.5-3.5z\"/>")
      .name("Shop2Outlined")
  }
}

export default Shop2Outlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
