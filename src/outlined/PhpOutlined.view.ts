import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PhpOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 9h1.5v6H13v-2.5h-2V15H9.5V9H11v2h2V9zm-5 1.5v1c0 .8-.7 1.5-1.5 1.5h-2v2H3V9h3.5c.8 0 1.5.7 1.5 1.5zm-1.5 0h-2v1h2v-1zm15 0v1c0 .8-.7 1.5-1.5 1.5h-2v2h-1.5V9H20c.8 0 1.5.7 1.5 1.5zm-1.5 0h-2v1h2v-1z\"/>")
      .name("PhpOutlined")
  }
}

export default PhpOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
