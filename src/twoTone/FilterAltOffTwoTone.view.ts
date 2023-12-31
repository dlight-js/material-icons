import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FilterAltOffTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M8.83 6h8.12l-3.57 4.55z\" opacity=\".3\"/><path d=\"m16.95 6-3.57 4.55 1.43 1.43c1.03-1.31 4.98-6.37 4.98-6.37A.998.998 0 0 0 19 4H6.83l2 2h8.12zM2.81 2.81 1.39 4.22 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.17l5.78 5.78 1.41-1.41L2.81 2.81z\"/>")
      .name("FilterAltOffTwoTone")
  }
}

export default FilterAltOffTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
