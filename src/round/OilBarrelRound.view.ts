import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class OilBarrelRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 13c.55 0 1-.45 1-1s-.45-1-1-1h-1V5h1c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h1v6H4c-.55 0-1 .45-1 1s.45 1 1 1h1v6H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1h-1v-6h1zm-8 3c-1.66 0-3-1.32-3-2.95 0-1.16.41-1.58 2.24-3.68a.999.999 0 0 1 1.51 0c1.82 2.09 2.24 2.52 2.24 3.68C15 14.68 13.66 16 12 16z\"/>")
      .name("OilBarrelRound")
  }
}

export default OilBarrelRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
