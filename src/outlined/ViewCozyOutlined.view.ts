import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ViewCozyOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7.25 7.25h4v4h-4zm5.5 0h4v4h-4zm-5.5 5.5h4v4h-4zm5.5 0h4v4h-4z\"/><path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z\"/>")
      .name("ViewCozyOutlined")
  }
}

export default ViewCozyOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
