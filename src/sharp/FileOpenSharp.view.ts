import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FileOpenSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 2H4v20h11v-8h5V8l-6-6zm-1 7V3.5L18.5 9H13zm4 12.66V16h5.66v2h-2.24l2.95 2.95-1.41 1.41L19 19.41v2.24h-2z\"/>")
      .name("FileOpenSharp")
  }
}

export default FileOpenSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
