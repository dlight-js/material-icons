import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LocalPhoneSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m21 15.46-5.27-.61-2.52 2.52a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51z\"/>")
      .name("LocalPhoneSharp")
  }
}

export default LocalPhoneSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
