import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FilterNoneSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 5H1v18h18v-2H3V5zm20-4H5v18h18V1zm-2 16H7V3h14v14z\"/>")
      .name("FilterNoneSharp")
  }
}

export default FilterNoneSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
