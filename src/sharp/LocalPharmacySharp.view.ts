import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LocalPharmacySharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z\"/>")
      .name("LocalPharmacySharp")
  }
}

export default LocalPharmacySharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
