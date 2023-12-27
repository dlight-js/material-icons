import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PictureInPictureAltSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 11h-8v6h8v-6zm4 10V3H1v18h22zm-2-1.98H3V4.97h18v14.05z\"/>")
      .name("PictureInPictureAltSharp")
  }
}

export default PictureInPictureAltSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
