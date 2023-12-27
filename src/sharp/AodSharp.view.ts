import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AodSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 1H5v22h14V1zm-2 17H7V6h10v12zm-9-8h8v1.5H8V10zm1 3h6v1.5H9V13z\"/>")
      .name("AodSharp")
  }
}

export default AodSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
