import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class BuildCircleSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path fill-rule=\"evenodd\" d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.14 15.25-3.76-3.76c-1.22.43-2.64.17-3.62-.81a3.468 3.468 0 0 1-.59-4.1l2.35 2.35 1.41-1.41-2.35-2.35c1.32-.71 2.99-.52 4.1.59.98.98 1.24 2.4.81 3.62l3.76 3.76-2.11 2.11z\"/>")
      .name("BuildCircleSharp")
  }
}

export default BuildCircleSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
