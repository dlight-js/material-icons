import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SdStorageSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 2H10L4 8v14h16V2zm-8 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z\"/>")
      .name("SdStorageSharp")
  }
}

export default SdStorageSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
