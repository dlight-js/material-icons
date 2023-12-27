import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PictureInPictureSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 7h-8v6h8V7zm4-4H1v17.98h22V3zm-2 16.01H3V4.98h18v14.03z\"/>")
      .name("PictureInPictureSharp")
  }
}

export default PictureInPictureSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
