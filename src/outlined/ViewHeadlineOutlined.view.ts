import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class ViewHeadlineOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z\"/>")
      .name("ViewHeadlineOutlined")
  }
}

export default ViewHeadlineOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
