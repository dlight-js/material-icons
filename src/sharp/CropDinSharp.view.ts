import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CropDinSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3H3v18h18V3zm-2 16H5V5h14v14z\"/>")
      .name("CropDinSharp")
  }
}

export default CropDinSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
