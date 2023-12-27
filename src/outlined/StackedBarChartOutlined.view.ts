import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class StackedBarChartOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 9h4v11H4zm0-5h4v4H4zm6 3h4v4h-4zm6 3h4v4h-4zm0 5h4v5h-4zm-6-3h4v8h-4z\"/>")
      .name("StackedBarChartOutlined")
  }
}

export default StackedBarChartOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
