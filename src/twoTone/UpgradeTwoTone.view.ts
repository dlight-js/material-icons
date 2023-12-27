import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class UpgradeTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 18v2H8v-2h8zM11 7.99V16h2V7.99h3L12 4 8 7.99h3z\"/>")
      .name("UpgradeTwoTone")
  }
}

export default UpgradeTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
