import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DraftsSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21.99 6.86 12 1 2 6.86V20h20l-.01-13.14zM12 13 3.74 7.84 12 3l8.26 4.84L12 13z\"/>")
      .name("DraftsSharp")
  }
}

export default DraftsSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
