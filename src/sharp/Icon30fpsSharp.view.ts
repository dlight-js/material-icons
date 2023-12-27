import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon30fpsSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 5v3h6v2.5H3v3h5V16H2v3h9V5H2zm17 3v8h-4V8h4m3-3H12v14h10V5z\"/>")
      .name("Icon30fpsSharp")
  }
}

export default Icon30fpsSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
