import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SubscriptionsOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 6h16v2H4zm2-4h12v2H6zm14 8H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10H4v-8h16v8zm-10-7.27v6.53L16 16z\"/>")
      .name("SubscriptionsOutlined")
  }
}

export default SubscriptionsOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
