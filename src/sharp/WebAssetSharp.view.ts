import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WebAssetSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 4v16h18V4H3zm16 14H5V8h14v10z\"/>")
      .name("WebAssetSharp")
  }
}

export default WebAssetSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
