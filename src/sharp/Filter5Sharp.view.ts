import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Filter5Sharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M23 1H5v18h18V1zm-2 16H7V3h14v14zM3 5H1v18h18v-2H3V5zm14 10V9h-4V7h4V5h-6v6h4v2h-4v2h6z\"/>")
      .name("Filter5Sharp")
  }
}

export default Filter5Sharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
