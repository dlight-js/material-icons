import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TabletSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M23 4H1v16h21.99L23 4zm-4 14H5V6h14v12z\"/>")
      .name("TabletSharp")
  }
}

export default TabletSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
