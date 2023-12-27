import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Filter4Sharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 5H1v18h18v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm8-14H5v18h18V1zm-2 16H7V3h14v14z\"/>")
      .name("Filter4Sharp")
  }
}

export default Filter4Sharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
