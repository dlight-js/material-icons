import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ThumbDownAltSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M1 11.6V16h8.31l-1.12 5.38L9.83 23 17 15.82V3H4.69zM19 3h4v12h-4z\"/>")
      .name("ThumbDownAltSharp")
  }
}

export default ThumbDownAltSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
