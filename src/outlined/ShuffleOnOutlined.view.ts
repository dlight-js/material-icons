import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ShuffleOnOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM5.41 4l5.18 5.17-1.41 1.42L4 5.42 5.41 4zM20 20h-6v-2h2.61l-3.2-3.2 1.42-1.42 3.13 3.13.04.04V14h2v6zm0-10h-2V7.42L5.41 20 4 18.59 16.58 6H14V4h6v6z\"/>")
      .name("ShuffleOnOutlined")
  }
}

export default ShuffleOnOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
