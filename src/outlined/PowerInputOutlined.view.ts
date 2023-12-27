import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PowerInputOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z\"/>")
      .name("PowerInputOutlined")
  }
}

export default PowerInputOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
