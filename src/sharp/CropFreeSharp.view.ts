import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CropFreeSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 3v6h2V5h4V3H3zm2 12H3v6h6v-2H5v-4zm14 4h-4v2h6v-6h-2v4zm2-16h-6v2h4v4h2V3z\"/>")
      .name("CropFreeSharp")
  }
}

export default CropFreeSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
