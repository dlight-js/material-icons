import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ExposurePlus1Outlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 7H8v4H4v2h4v4h2v-4h4v-2h-4V7zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3v13z\"/>")
      .name("ExposurePlus1Outlined")
  }
}

export default ExposurePlus1Outlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
