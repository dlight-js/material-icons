import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LocalAirportOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z\"/>")
      .name("LocalAirportOutlined")
  }
}

export default LocalAirportOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
