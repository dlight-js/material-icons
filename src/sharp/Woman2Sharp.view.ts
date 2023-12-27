import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Woman2Sharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13.41 7h-2.82L7 16h3.5v6h3v-6H17z\"/><circle cx=\"12\" cy=\"4\" r=\"2\"/>")
      .name("Woman2Sharp")
  }
}

export default Woman2Sharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
