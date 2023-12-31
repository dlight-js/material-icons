import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TabletAndroidOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z\"/>")
      .name("TabletAndroidOutlined")
  }
}

export default TabletAndroidOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
