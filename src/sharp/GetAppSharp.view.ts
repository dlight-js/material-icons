import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class GetAppSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\"/>")
      .name("GetAppSharp")
  }
}

export default GetAppSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
