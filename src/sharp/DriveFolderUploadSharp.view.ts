import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DriveFolderUploadSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 6H12l-2-2H2v16h20V6zm-9 7v4h-2v-4H8l4.01-4L16 13h-3z\"/>")
      .name("DriveFolderUploadSharp")
  }
}

export default DriveFolderUploadSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
