import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class Icon1kPlusOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14v6.5z\"/><path d=\"M7.5 15H9V9H6v1.5h1.5zm4.5-2.25L13.75 15h1.75l-2.25-3 2.25-3h-1.75L12 11.25V9h-1.5v6H12z\"/>")
      .name("Icon1kPlusOutlined")
  }
}

export default Icon1kPlusOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>