import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class InsertPhotoSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 21V3H3v18h18zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z\"/>")
      .name("InsertPhotoSharp")
  }
}

export default InsertPhotoSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
