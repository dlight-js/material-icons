import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AutoAwesomeMotionSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 2H2v12h2V4h10V2zm4 4H6v12h2V8h10V6zm4 4H10v12h12V10z\"/>")
      .name("AutoAwesomeMotionSharp")
  }
}

export default AutoAwesomeMotionSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
