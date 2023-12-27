import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FileUploadSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 10h4v6h6v-6h4l-7-7-7 7zm0 8v2h14v-2H5z\"/>")
      .name("FileUploadSharp")
  }
}

export default FileUploadSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
