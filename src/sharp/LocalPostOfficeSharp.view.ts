import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LocalPostOfficeSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 4H2.01v16H22V4zm-2 4-8 5-8-5V6l8 5 8-5v2z\"/>")
      .name("LocalPostOfficeSharp")
  }
}

export default LocalPostOfficeSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
