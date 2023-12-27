import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FunctionsTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 17h-7l5-5-5-5h7V4H6v2l6.5 6L6 18v2h12z\"/>")
      .name("FunctionsTwoTone")
  }
}

export default FunctionsTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
