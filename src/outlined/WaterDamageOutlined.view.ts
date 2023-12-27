import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WaterDamageOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 3 2 12h3v8h14v-8h3L12 3zM7 18v-7.81l5-4.5 5 4.5V18H7zm7-4c0 1.1-.9 2-2 2s-2-.9-2-2 2-4 2-4 2 2.9 2 4z\"/>")
      .name("WaterDamageOutlined")
  }
}

export default WaterDamageOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
