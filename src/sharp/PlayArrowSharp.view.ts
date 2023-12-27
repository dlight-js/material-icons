import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PlayArrowSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M8 5v14l11-7L8 5z\"/>")
      .name("PlayArrowSharp")
  }
}

export default PlayArrowSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
