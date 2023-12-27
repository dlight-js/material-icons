import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NearMeFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z\"/>")
      .name("NearMeFilled")
  }
}

export default NearMeFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
