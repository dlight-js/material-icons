import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ViewSidebarSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 20H2V4h14v16zm2-12h4V4h-4v4zm0 12h4v-4h-4v4zm0-6h4v-4h-4v4z\"/>")
      .name("ViewSidebarSharp")
  }
}

export default ViewSidebarSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
