import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SkipPreviousSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 6h2v12H6V6zm3.5 6 8.5 6V6l-8.5 6z\"/>")
      .name("SkipPreviousSharp")
  }
}

export default SkipPreviousSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
