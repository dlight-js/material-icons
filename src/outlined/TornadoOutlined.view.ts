import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TornadoOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M23 3H1l11 19L23 3zm-3.47 2-1.74 3H6.21L4.47 5h15.06zm-9.27 10h3.48L12 18.01 10.26 15zm4.64-2H9.1l-1.74-3h9.27l-1.73 3z\"/>")
      .name("TornadoOutlined")
  }
}

export default TornadoOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
