import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CheckBoxOutlineBlankSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 5v14H5V5h14m2-2H3v18h18V3z\"/>")
      .name("CheckBoxOutlineBlankSharp")
  }
}

export default CheckBoxOutlineBlankSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
