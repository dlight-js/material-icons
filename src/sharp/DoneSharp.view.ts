import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DoneSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\"/>")
      .name("DoneSharp")
  }
}

export default DoneSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
