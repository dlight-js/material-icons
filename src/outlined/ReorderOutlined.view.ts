import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ReorderOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z\"/>")
      .name("ReorderOutlined")
  }
}

export default ReorderOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
