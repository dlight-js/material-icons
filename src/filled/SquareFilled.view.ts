import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SquareFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 3h18v18H3z\"/>")
      .name("SquareFilled")
  }
}

export default SquareFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
