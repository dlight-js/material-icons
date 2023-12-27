import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ClassSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 2H4v20h16V2zM6 4h5v8l-2.5-1.5L6 12V4z\"/>")
      .name("ClassSharp")
  }
}

export default ClassSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
