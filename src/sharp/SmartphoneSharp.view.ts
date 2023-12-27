import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SmartphoneSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 1v22h14V1H5zm12 18H7V5h10v14z\"/>")
      .name("SmartphoneSharp")
  }
}

export default SmartphoneSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
