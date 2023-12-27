import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FilterListFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z\"/>")
      .name("FilterListFilled")
  }
}

export default FilterListFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
