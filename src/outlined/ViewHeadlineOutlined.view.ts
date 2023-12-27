import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ViewHeadlineOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z\"/>")
      .name("ViewHeadlineOutlined")
  }
}

export default ViewHeadlineOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
