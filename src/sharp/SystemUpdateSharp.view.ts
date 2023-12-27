import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SystemUpdateSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 1v22h14V1H5zm12 18H7V5h10v14zm-1-6h-3V8h-2v5H8l4 4 4-4z\"/>")
      .name("SystemUpdateSharp")
  }
}

export default SystemUpdateSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
