import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ViewComfyAltSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 4v16h20V4H2zm9 13H7v-4h4v4zm0-6H7V7h4v4zm6 6h-4v-4h4v4zm0-6h-4V7h4v4z\"/>")
      .name("ViewComfyAltSharp")
  }
}

export default ViewComfyAltSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
