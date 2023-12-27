import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TextFormatTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98 13.87 11h-3.74L12 5.98z\"/>")
      .name("TextFormatTwoTone")
  }
}

export default TextFormatTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
