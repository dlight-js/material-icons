import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WarehouseSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 21V7L12 3 2 7v14h5v-9h10v9h5zm-11-2H9v2h2v-2zm2-3h-2v2h2v-2zm2 3h-2v2h2v-2z\"/>")
      .name("WarehouseSharp")
  }
}

export default WarehouseSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
