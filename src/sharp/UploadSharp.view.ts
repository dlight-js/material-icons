import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class UploadSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z\"/>")
      .name("UploadSharp")
  }
}

export default UploadSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
