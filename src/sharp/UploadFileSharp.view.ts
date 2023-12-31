import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class UploadFileSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 2H4v20h16V8l-6-6zm-1 13v4h-2v-4H8l4.01-4L16 15h-3zm0-6V3.5L18.5 9H13z\"/>")
      .name("UploadFileSharp")
  }
}

export default UploadFileSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
