import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AirplayOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 22h12l-6-6z\"/><path d=\"M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"/>")
      .name("AirplayOutlined")
  }
}

export default AirplayOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
