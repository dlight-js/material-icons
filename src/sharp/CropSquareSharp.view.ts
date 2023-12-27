import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CropSquareSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 4H4v16h16V4zm-2 14H6V6h12v12z\"/>")
      .name("CropSquareSharp")
  }
}

export default CropSquareSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
