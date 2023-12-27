import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Man4Sharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7.96 7 10 22h4l2.04-15z\"/><circle cx=\"12\" cy=\"4\" r=\"2\"/>")
      .name("Man4Sharp")
  }
}

export default Man4Sharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
