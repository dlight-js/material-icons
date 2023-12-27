import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TornadoSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20.11 8 23 3H1l2.89 5zM7.95 15 12 22l4.05-7zm11-5H5.05l1.74 3h10.42z\"/>")
      .name("TornadoSharp")
  }
}

export default TornadoSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
